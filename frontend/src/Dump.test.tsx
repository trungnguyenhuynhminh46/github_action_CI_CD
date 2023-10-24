import { render, screen } from "@testing-library/react";
import Dump from "./Dump";

it("Should be a Dump div", () => {
  render(<Dump />);
  const message = screen.queryByText(/Dump/i);
  expect(message).toBeVisible();
});
