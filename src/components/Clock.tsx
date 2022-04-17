import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter {
    characters {
      results {
        name
      }
    }
  }
`;

export default function Clock() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery<any, any>(GET_CHARACTER, {});

  const interval = setInterval(() => {
    setCount(count + 1);
    clearInterval(interval);
  }, 1000);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <div>
      Clock = {count}
      <div>{data.character}</div>
    </div>
  );
}
