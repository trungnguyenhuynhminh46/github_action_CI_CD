import { render, screen } from "@testing-library/react";
import App from "./App";
import { test } from "vitest";

it("Should have hello world", () => {
  render(<App></App>);
  const message = screen.queryByText(/Hello from my app/i);
  expect(message).toBeVisible();
});

test("adds 1 + 2 to equal 3", () => {
  expect(3).toBe(3);
});
