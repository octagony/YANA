import { render, screen } from "../../../utils/testUtils";
import Footer from "./Footer";

describe("Footer", () => {
  test("footer rendering", async () => {
    render(<Footer />);
    const textElement = screen.getByText(/octagony/i);
    expect(textElement).toBeInTheDocument();
  });
});
