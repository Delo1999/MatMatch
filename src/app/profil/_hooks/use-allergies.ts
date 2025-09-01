import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

type ProfileData = {
  name: string;
  allergies: string[];
  dietaryPrefs: string[];
};

export const useAllergies = (initialAllergies: string[] = []) => {
  const queryClient = useQueryClient();
  const [newAllergy, setNewAllergy] = useState("");

  const addAllergy = () => {
    if (newAllergy.trim() && !initialAllergies.includes(newAllergy.trim())) {
      const newAllergies = [...initialAllergies, newAllergy.trim()];

      queryClient.setQueryData(
        ["profile"],
        (old: ProfileData | undefined) =>
          ({
            ...old,
            allergies: newAllergies,
          } as ProfileData)
      );

      setNewAllergy("");
    }
  };

  const removeAllergy = (allergyToRemove: string) => {
    const updatedAllergies = initialAllergies.filter(
      (allergy: string) => allergy !== allergyToRemove
    );

    queryClient.setQueryData(
      ["profile"],
      (old: ProfileData | undefined) =>
        ({
          ...old,
          allergies: updatedAllergies,
        } as ProfileData)
    );
  };

  return {
    newAllergy,
    setNewAllergy,
    addAllergy,
    removeAllergy,
  };
};
