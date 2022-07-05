import QRCode from "react-qr-code";

export const ReactQRCode = () => {
  return (
    <div>
      <h5>React qr code</h5>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://github.com/rosskhanas/react-qr-code#readme"}
      />
    </div>
  );
}
