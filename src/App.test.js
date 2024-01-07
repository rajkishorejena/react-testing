import { render, screen } from "@testing-library/react";
import App from "./App";

// beforeAll(() => {
//   console.log("******Called Before All********");
// });
// beforeEach(() => {
//   console.log("******Called Before Each********");
// });

test("First React Test case", () => {
  render(<App />);
  const text = screen.getByText("Hello Rajkishore Jena");
  expect(text).toBeInTheDocument();

  const title = screen.getByTitle("App Icon");
  expect(title).toBeInTheDocument();
});

test("Input Test case in App components", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();

  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter your name");
  expect(checkInputPlaceHolder).toBeInTheDocument();

  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("placeholder", "Enter your name");
});

describe("UI test case", () => {
  test("UI test case one", () => {
    render(<App />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// afterAll(()=>{
//   console.log("......Called after all hook ");
// })

// afterEach(()=>{
//   console.log(".....after each hook getting called")
// })
