import { expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import Header from "./Header";

describe("Header", () => {
  test("header rendering", async () => {
    render(<Header />);
    const textElement = screen.getByText(/yana/i);
    expect(textElement).toBeInTheDocument();
  });
});
