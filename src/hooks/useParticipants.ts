import { useEffect, useState } from "react";

import type { Participant as ParticipantInterface } from "../interfaces";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  setNewParticipantName: React.Dispatch<React.SetStateAction<string>>;
  newParticipantName: string;
}

const PARTICIPANTS_STORAGE_KEY = "@imhere/participants";

const generateRandomID = () => Math.random().toString(36).substr(2, 9);

export const useParticipants = ({
  setNewParticipantName,
  newParticipantName,
}: Props) => {
  const [participants, setParticipants] = useState<ParticipantInterface[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(PARTICIPANTS_STORAGE_KEY).then((participantsJSON) => {
      if (!participantsJSON) return;
      setParticipants(JSON.parse(participantsJSON));
    });
  }, []);

  useEffect(() => {
    const participantsJSON = JSON.stringify(participants);
    AsyncStorage.setItem(PARTICIPANTS_STORAGE_KEY, participantsJSON);
  }, [participants]);

  const handleAddParticipant = () => {
    const participantWithThisNameExists = participants.some(
      (participant) => participant.name === newParticipantName
    );

    if (!newParticipantName) {
      return Alert.alert(
        "Nome Inválido",
        "O nome do participante não pode ser vazio"
      );
    }

    if (participantWithThisNameExists) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    const newParticipant: ParticipantInterface = {
      name: newParticipantName.trim(),
      id: generateRandomID(),
    };
    setParticipants((prev) => [...prev, newParticipant]);
    setNewParticipantName("");
  };

  const handleRemoveParticipant = (participant: ParticipantInterface) => {
    const confirmRemoval = () => {
      Alert.alert(
        "Removido!",
        `Participante ${participant.name} removido com sucesso!`
      );

      setParticipants((prev) =>
        prev.filter((item) => item.id !== participant.id)
      );
    };

    Alert.alert(
      "Remover Participante",
      `Deseja remover o participante ${participant.name} da lista de presença?`,
      [
        { text: "Não, cancelar", style: "cancel" },
        { onPress: confirmRemoval, text: "Sim, remover!" },
      ]
    );
  };

  return { participants, handleAddParticipant, handleRemoveParticipant };
};
