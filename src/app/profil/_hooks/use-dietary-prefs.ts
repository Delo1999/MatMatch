import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

type ProfileData = {
  name: string;
  allergies: string[];
  dietaryPrefs: string[];
};

export const useDietaryPrefs = (initialDietaryPrefs: string[] = []) => {
  const queryClient = useQueryClient();
  const [newDietaryPref, setNewDietaryPref] = useState("");

  const addDietaryPref = () => {
    if (
      newDietaryPref.trim() &&
      !initialDietaryPrefs.includes(newDietaryPref.trim())
    ) {
      const newDietaryPrefs = [...initialDietaryPrefs, newDietaryPref.trim()];

      queryClient.setQueryData(
        ["profile"],
        (old: ProfileData | undefined) =>
          ({
            ...old,
            dietaryPrefs: newDietaryPrefs,
          } as ProfileData)
      );

      setNewDietaryPref("");
    }
  };

  const removeDietaryPref = (prefToRemove: string) => {
    const updatedDietaryPrefs = initialDietaryPrefs.filter(
      (pref: string) => pref !== prefToRemove
    );

    queryClient.setQueryData(
      ["profile"],
      (old: ProfileData | undefined) =>
        ({
          ...old,
          dietaryPrefs: updatedDietaryPrefs,
        } as ProfileData)
    );
  };

  return {
    newDietaryPref,
    setNewDietaryPref,
    addDietaryPref,
    removeDietaryPref,
  };
};
