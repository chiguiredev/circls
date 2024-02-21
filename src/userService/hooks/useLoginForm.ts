// TODO: use react-query to handle the form submission
// use zod to validate the form data before submitting
import { useState } from "react";

export const useLoginForm = () => {

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    const form = new FormData(event.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    console.log("email", email);
    console.log("password", password);
  }

  return {
    error,
    handleSubmit,
  };
};
