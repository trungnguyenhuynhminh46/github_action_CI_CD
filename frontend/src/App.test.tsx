import { render, screen } from "@testing-library/react";
import App from "./App";

it("Should have hello world", ()=>{
    render(<App></App>);
    const message = screen.queryByText(/Hello from my app/i);
    expect(message).toBeVisible();
});

