import { expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import Button from "./Button";

describe("Button", () => {
  test("Render Button component with children", () => {
    render(
      <Button ariaLabel="Save note" disabled={false}>
        Save Note
      </Button>
    );

    const textElement = screen.getByRole("button");
    expect(textElement).toBeInTheDocument();
  });

  test("Render disabled button", () => {
    render(
      <Button ariaLabel="Save note" disabled={true}>
        Save Note
      </Button>
    );

    const textElement = screen.getByRole("button");
    expect(textElement).toBeDisabled();
  });
});
