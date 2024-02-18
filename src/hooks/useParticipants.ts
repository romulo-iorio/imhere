import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Participant as ParticipantInterface } from "../interfaces";

const PARTICIPANTS_STORAGE_KEY = "@imhere/participants";

export const useParticipants = () => {
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

  return { participants, setParticipants };
};
