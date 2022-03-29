import React from "react";

interface HelloWorldProps {
  title?: string;
}
export function HelloWorld({ title = "Hello" }: HelloWorldProps) {
  return <div>{title}</div>;
}
