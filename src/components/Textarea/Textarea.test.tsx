import { ChangeEvent, KeyboardEvent } from "react";
import { expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import Textarea from "./Textarea";

describe("TextArea", () => {
  test("Render textarea with edit mode", async () => {
    render(
      <Textarea
        value="Text"
        editMode={true}
        changeFunc={(event: ChangeEvent<HTMLTextAreaElement>) => {
          return;
        }}
        keyDownFunc={(event: KeyboardEvent<HTMLTextAreaElement>) => {
          return;
        }}
      />,
    );
    const textareaElement = screen.getByRole("textbox");

    screen.debug();
    expect(textareaElement).toHaveClass();
  });
});
