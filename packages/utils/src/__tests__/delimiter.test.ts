/// <reference lib="deno.ns" />

import {
  ARRAY_DELIMITER,
  SLIDER_DELIMITER,
  SPACE_DELIMITER,
  RANGE_DELIMITER,
  SORT_DELIMITER,
} from "../delimiter.ts";

Deno.test("ARRAY_DELIMITER should be ','", () => {
  if (ARRAY_DELIMITER !== ",") {
    throw new Error(`Expected ',', got: ${ARRAY_DELIMITER}`);
  }
});

Deno.test("SLIDER_DELIMITER should be '-'", () => {
  if (SLIDER_DELIMITER !== "-") {
    throw new Error(`Expected '-', got: ${SLIDER_DELIMITER}`);
  }
});

Deno.test("SPACE_DELIMITER should be '_'", () => {
  if (SPACE_DELIMITER !== "_") {
    throw new Error(`Expected '_', got: ${SPACE_DELIMITER}`);
  }
});

Deno.test("RANGE_DELIMITER should be '-'", () => {
  if (RANGE_DELIMITER !== "-") {
    throw new Error(`Expected '-', got: ${RANGE_DELIMITER}`);
  }
});

Deno.test("SORT_DELIMITER should be '.'", () => {
  if (SORT_DELIMITER !== ".") {
    throw new Error(`Expected '.', got: ${SORT_DELIMITER}`);
  }
});