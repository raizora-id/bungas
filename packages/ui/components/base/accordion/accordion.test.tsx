import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { Accordion } from "./index.tsx";

Deno.test("Accordion renders correctly", () => {
  render(<Accordion>Test</Accordion>);
  const element = screen.getByText("Test");
  if (!element) throw new Error("Element not found");
});
