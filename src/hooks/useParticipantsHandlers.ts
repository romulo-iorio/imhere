import { useEffect, useState } from "react";

import type { Participant as ParticipantInterface } from "../interfaces";
import { Alert } from "react-native";

interface Props {
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantInterface[]>>;
  setNewParticipantName: React.Dispatch<React.SetStateAction<string>>;
  participants: ParticipantInterface[];
  newParticipantName: string;
}

const generateRandomID = () => Math.random().toString(36).substr(2, 9);

export const useParticipantsHandlers = ({
  setNewParticipantName,
  newParticipantName,
  setParticipants,
  participants,
}: Props) => {
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

  return { handleAddParticipant, handleRemoveParticipant };
};
