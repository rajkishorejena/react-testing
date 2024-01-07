import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Validate the Login page", () => {
  test("Input validation", () => {
    render(<Login />);
    const userInput = screen.getByRole("textbox");
    fireEvent.change(userInput, { target: { value: "a" } });
    expect(userInput.value).toBe("a");
  });
});
