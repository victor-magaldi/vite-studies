import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "primeiro" },
  { option: "segundo" },
  { option: "terceiro" },
];

export const Roullete = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    console.log("teste", newPrizeNumber);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        fontSize={22}
        textColors={["white", "black"]}
        innerBorderColor={"red"}
        outerBorderColor="green"
        backgroundColors={["red", "green", "orange"]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};
