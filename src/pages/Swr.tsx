import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Swr = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log("data=>", data);

  if (error) return <div>falhou em carregar</div>;
  if (!data) return <div>carregando...</div>;
  return <div>Olá {data.name}!</div>;
};
