import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import handleOtherMethod from "./helper";

describe("Functional method testing", () => {
  test("method testing", () => {
    render(<Login />);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Update Button Clicked")).toBeInTheDocument();
  });

  test("method testing 2", () => {
    expect(handleOtherMethod()).toMatch("hii");
  });
});

// describe("Snapshot Testing", () => {
//   test("Snapshot testing for login Component", () => {
//     const LoginComponent = render(<Login />);
//     expect(LoginComponent).toMatchSnapshot();
//   });
// });

// import { fireEvent, render, screen } from "@testing-library/react";
// import Login from "./Login";

// describe("Validate the Login page", () => {
//   test("Input validation", () => {
//     render(<Login />);
//     const userInput = screen.getByRole("textbox");
//     fireEvent.change(userInput, { target: { value: "a" } });
//     expect(userInput.value).toBe("a");
//   });
// });

// describe("Click event testing with button", () => {
//   test("Button Onclick event test", () => {
//     render(<Login />);
//     const btn = screen.getByRole("button");
//     fireEvent.click(btn);
//     expect(screen.getByText("Update Button Clicked")).toBeInTheDocument();
//   });
// });
