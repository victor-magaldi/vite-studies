import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function ReactCopyToClipboard() {
  const [text, setText] = useState("teste");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        placeholder="Insira seu texto"
      />
      <CopyToClipboard
        text={text}
        onCopy={() => {
          console.log("copy");
        }}
      >
        <span>clique aqui para copiar : {text}</span>
      </CopyToClipboard>
    </>
  );
}
