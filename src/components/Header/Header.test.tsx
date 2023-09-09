import { expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import Header from "./Header";

describe("Header", () => {
  test("Header rendering without logging", async () => {
    render(<Header />);
    const textElement = screen.getByText(/yana/i);
    expect(textElement).toBeInTheDocument();

    const themeToggle = screen.getByRole("button");
    expect(themeToggle).toBeInTheDocument();
  });
  test("Render logout button", async () => {
    render(<Header />);
    const logoutButton = screen.queryByTestId("logout");
    expect(logoutButton).not.toBeInTheDocument();
  });
});
