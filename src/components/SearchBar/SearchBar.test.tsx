import { render, screen } from "../../../utils/testUtils";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("search input renders correctly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toBeInTheDocument();
  });
});
