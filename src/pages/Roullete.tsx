import { Wheel } from "react-custom-roulette";

export const Roullete = () => {
  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];

  return (
    <>
      <h5>react-custom-roulette</h5>
      <Wheel
        mustStartSpinning={true}
        prizeNumber={0}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          console.log();
        }}
      />
    </>
  );
};
