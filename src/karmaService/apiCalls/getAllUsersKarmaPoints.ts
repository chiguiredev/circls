import { API_URL } from "@/envService";

export const getAllUsersKarmaPoints = async () => {
  const response = await fetch(`${API_URL}/v1/karma/`);
  return await response.json();
}
