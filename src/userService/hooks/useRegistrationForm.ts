// TODO: use react-query to handle the form submission
// use zod to validate the form data before submitting
import { useState } from "react";

export const useRegistrationForm = () => {

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    const form = new FormData(event.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    error,
    handleSubmit,
  };
};
