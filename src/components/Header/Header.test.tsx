import React from "react";
import { render, screen, userEvent } from "../../../utils/testUtils";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("header rendering", async () => {
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByText(/yana/i)).toBeInTheDocument();
});
