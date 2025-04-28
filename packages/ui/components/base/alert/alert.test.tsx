/// <reference lib="deno.ns" />
import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from "./index.tsx";

Deno.test("renders alert with default variant", () => {
  render(<Alert>Test alert</Alert>);
  const alert = screen.getByRole("alert");
  if (!alert) throw new Error("Alert not found");
  if (!alert.className.includes("bg-background")) throw new Error("Missing bg-background class");
  if (!alert.textContent?.includes("Test alert")) throw new Error("Missing alert text");
});

Deno.test("renders alert with destructive variant", () => {
  render(<Alert variant="destructive">Destructive alert</Alert>);
  const alert = screen.getByRole("alert");
  if (!alert) throw new Error("Alert not found");
  if (!alert.className.includes("border-destructive/50")) throw new Error("Missing border-destructive/50 class");
  if (!alert.textContent?.includes("Destructive alert")) throw new Error("Missing alert text");
});

Deno.test("renders alert with custom className", () => {
  render(<Alert className="custom-class">Custom alert</Alert>);
  const alert = screen.getByRole("alert");
  if (!alert) throw new Error("Alert not found");
  if (!alert.className.includes("custom-class")) throw new Error("Missing custom-class");
});

Deno.test("renders alert with title and description", () => {
  render(
    <Alert>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>This is an alert description</AlertDescription>
    </Alert>
  );
  const alert = screen.getByRole("alert");
  if (!alert) throw new Error("Alert not found");
  if (!alert.textContent?.includes("Alert Title")) throw new Error("Missing alert title");
  if (!alert.textContent?.includes("This is an alert description")) throw new Error("Missing alert description");
});