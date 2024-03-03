import { useEffect, useState } from "react";
type ArrOrNull = object[] | null;
type StrOrNull = String | null;
type BoolOrStr = String | Boolean;

function useFetch(url: string, method: string = "GET") {
  const [data, setData] = useState<ArrOrNull>(null);
  const [error, setError] = useState<StrOrNull>(null);
  const [isPending, setIsPending] = useState<BoolOrStr>(false);
  const [fetchOptions, setFetchOptions] = useState<object | null>(null);

  const addNewPost = (newPost: object) => {
    setFetchOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  };
  useEffect(() => {
    const fetchData = async (fetchOptons?: object) => {
      setIsPending(true);
      try {
        const req = await fetch(url, {
          ...fetchOptons,
        });
        if (!req.ok) {
          throw new Error("Something error");
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (error: any) {
        setError(error);
        setIsPending(false);
        console.log(error);
      }
    };
    if (fetchOptions && method == "POST") {
      fetchData(fetchOptions);
    }
    if (method == "GET") {
      fetchData();
    }
  }, [url, method, fetchOptions]);

  return { data, isPending, setIsPending, error, addNewPost };
}

export { useFetch };
