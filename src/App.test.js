import { render, screen } from "@testing-library/react";
import App from "./App";

test("First React Test case", () => {
  render(<App />);
  const text = screen.getByText("Hello Rajkishore Jena");
  expect(text).toBeInTheDocument();

  const title = screen.getByTitle("App Icon");
  expect(title).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
