import { CopyToClipboard } from "react-copy-to-clipboard";

export function ReactCopyToClipboard() {
  return (
    <CopyToClipboard
      text={"Meu texto copiado"}
      onCopy={() => {
        console.log("copy");
      }}
    >
      <span>clique aqui para copiar : Meu texto copiado</span>
    </CopyToClipboard>
  );
}
