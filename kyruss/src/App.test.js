import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("To get started text", () => {
  render(<App />);
  const startedText = screen.getByText(/To get started/);
  expect(startedText).toBeInTheDocument;
});
