export const modifyUserKarmaPoints = async (email: string, karma_points: number) => {

  const response = await fetch("http://localhost:3000/api/v1/karma/", {
    method: "POST",
    body: JSON.stringify({ email, karma_points }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
