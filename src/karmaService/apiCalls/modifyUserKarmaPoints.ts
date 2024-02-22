import { API_URL } from "@/envService";

export const modifyUserKarmaPoints = async (email: string, karma_points: number) => {

  const response = await fetch(`${API_URL}/v1/karma/`, {
    method: "POST",
    body: JSON.stringify({ email, karma_points }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
