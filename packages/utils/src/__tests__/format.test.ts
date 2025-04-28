/// <reference lib="deno.ns" />

import {
  formatAmount,
  formatLatency,
  formatMilliseconds,
  formatDate,
  formatCompactNumber,
  valueFormatter,
} from "../format.ts";

Deno.test("formatAmount returns formatted currency", () => {
  const result = formatAmount({
    currency: "USD",
    amount: 1234.56,
  });
  if (typeof result !== "string" || !result.includes("$")) {
    throw new Error(`Expected formatted currency, got: ${result}`);
  }
});

Deno.test("formatLatency formats ms and s correctly", () => {
  const ms = formatLatency(500);
  const s = formatLatency(1500);
  if (!ms.endsWith("ms")) throw new Error(`Expected ms, got: ${ms}`);
  if (!s.endsWith("s")) throw new Error(`Expected s, got: ${s}`);
});

Deno.test("formatMilliseconds returns formatted milliseconds", () => {
  const result = formatMilliseconds(1234.5678);
  if (!result.includes("1,234")) {
    throw new Error(`Expected formatted ms, got: ${result}`);
  }
});

Deno.test("formatDate returns formatted date string", () => {
  const result = formatDate(new Date("2024-01-01T12:34:56Z"));
  if (typeof result !== "string" || result.length === 0) {
    throw new Error(`Expected formatted date, got: ${result}`);
  }
});

Deno.test("formatCompactNumber returns correct compact representation", () => {
  if (formatCompactNumber(999) !== "999") throw new Error("Hundreds not as string");
  if (formatCompactNumber(1000) !== "1.0k") throw new Error("Thousands not as k");
  if (formatCompactNumber(1000000) !== "1.0M") throw new Error("Millions not as M");
});

Deno.test("valueFormatter returns formatted IDR currency", () => {
  const result = valueFormatter(1000000);
  if (typeof result !== "string" || !result.includes("Rp")) {
    throw new Error(`Expected IDR currency (Rp), got: ${result}`);
  }
});
