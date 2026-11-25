import type { RouletteCanvas } from "./types.ts";

export const Roulette = ({
  roulette,
}: {
  roulette: RouletteCanvas;
}) => {
  const { size } = roulette;
  return <canvas ref={roulette.canvasRef} width={size} height={size} />;
};
