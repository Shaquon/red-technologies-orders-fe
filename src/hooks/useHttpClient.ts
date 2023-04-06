import { useCallback, useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      url: string,
      method = "GET",
      body: string | null = null,
      headers = {}
    ) => {
      setIsLoading(true);
      
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        if (
          url ===
          "https://red-candidate-web.azurewebsites.net/api/Orders/Delete"
        ) {
          return;
        }

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setError(err.message || "Something went wrong, please try again.");
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};
