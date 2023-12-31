import React from "react";
import useSWR from "swr";

type TypePost = {
  title: string;
  id: number;
  userId: number;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Swr = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log("data=>", data);

  if (error) return <div>falhou em carregar</div>;
  if (!data) return <div>carregando...</div>;
  return (
    <div>
      <h3>Buscando dados com swr</h3>
      {data.map((post: TypePost) => {
        return (
          <>
            <div>
              <p>{post?.title}</p>
              <span>userId: {post.userId}</span>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};
