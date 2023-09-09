import { screen, render } from "../../../utils/testUtils";
import ThemeToggle from "./ThemeToggle";

describe("Theme Toggle", () => {
  test("Theme toggle rendering", async () => {
    render(<ThemeToggle />);
    const themeToggle = screen.getByRole("button");
    expect(themeToggle).toBeInTheDocument();
  });
});
