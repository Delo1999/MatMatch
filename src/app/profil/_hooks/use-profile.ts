import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("/api/profile", {
        credentials: "include",
      });

      const data = await response.json();
      return {
        name: data.profile.name || "",
        allergies: data.profile.allergies || [],
        dietaryPrefs: data.profile.dietaryPrefs || [],
      };
    },
  });
};

export const useSaveProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profileData: {
      name: string;
      allergies: string[];
      dietaryPrefs: string[];
    }) => {
      return await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: profileData.name.trim() || undefined,
          allergies: profileData.allergies,
          dietaryPrefs: profileData.dietaryPrefs,
        }),
      });
    },
    onSuccess: (_, profileData) => {
      queryClient.setQueryData(["profile"], {
        name: profileData.name || "",
        allergies: profileData.allergies || [],
        dietaryPrefs: profileData.dietaryPrefs || [],
      });
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: async (passwordData: {
      currentPassword: string;
      newPassword: string;
    }) => {
      const response = await fetch("/api/profile/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(passwordData),
      });
      const data = await response.json();
      return data;
    },
  });
};
