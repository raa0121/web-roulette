/// <reference lib="deno.ns" />
import { assertEquals } from "@std/assert";
import { degreesToCanvasRadians, getResultName } from "./utils.ts";

Deno.test("degreesToCanvasRadians converts 90 to 1.5 * PI", () => {
  assertEquals(degreesToCanvasRadians(90), 1.5 * Math.PI);
});

Deno.test("degreesToCanvasRadians converts 180 to PI", () => {
  assertEquals(degreesToCanvasRadians(180), Math.PI);
});

Deno.test("degreesToCanvasRadians converts 270 to 0.5 * PI", () => {
  assertEquals(degreesToCanvasRadians(270), 0.5 * Math.PI);
});

Deno.test("degreesToCanvasRadians converts 360 to 0", () => {
  assertEquals(degreesToCanvasRadians(360), 0);
});

Deno.test("getResultName counts clockwise rotation from the last item", () => {
  const rouletteItemList = [{ name: "a" }, { name: "b" }, { name: "c" }];
  const result = (totalRotation: number) =>
    getResultName({
      rouletteItemList,
      totalRotation,
      rotationDirection: "clockwise",
    });

  assertEquals(result(-10), "c");
  assertEquals(result(-130), "b");
  assertEquals(result(-250), "a");
  assertEquals(result(-370), "c");
});

Deno.test("getResultName follows item weights", () => {
  const result = getResultName({
    rouletteItemList: [{ name: "a", weight: 3 }, { name: "b" }],
    totalRotation: 100,
    rotationDirection: "counterclockwise",
  });

  assertEquals(result, "a");
});
