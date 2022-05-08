import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function ReactSelect() {
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  return <Select   options={options} components={makeAnimated()} />;
}
