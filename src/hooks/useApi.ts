import { useEffect, useState } from "react";

interface Api<T> {
  error?: Error;
  isLoading: boolean;
  response?: T;
}

export const useApi = <T>(url: string) => {
  const [state, setState] = useState<Api<T>>({ isLoading: false });

  useEffect(() => {
    setState({ isLoading: true });

    // TODO Remove fake delay
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setState({
            isLoading: false,
            response,
          });
        })
        .catch((error) => {
          setState({
            error,
            isLoading: false,
          });
        });
    }, 800);
  }, [url]);

  return state;
};
