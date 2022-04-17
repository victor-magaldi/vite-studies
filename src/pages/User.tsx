import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  let [searchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.getAll("brand"));

  return <div>User - id :{params?.id}</div>;
}
