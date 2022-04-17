import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  let [searchParams] = useSearchParams();

  const brand =
    searchParams.getAll("brand")?.[0] ||
    "não existe 'brand' no parametro de busca";
  return (
    <div>
      User <br />
      id : {params?.id} <br />
      Marca : {brand}
    </div>
  );
}
