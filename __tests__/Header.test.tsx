// __tests__/Header.test.jsx

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { ThemeStyle } from "../util/useTheme";
describe("Header", () => {
  it("renders a header", () => {
    const result = render(<Header />);
    let themeButton = screen.getByRole("theme-button");
    expect(themeButton).toBeInTheDocument();
    //expect theme to be dark intially
    expect(document.body.classList.contains("dark")).toBe(true);
    //press the button
    themeButton.click();
    //expect theme to be light
    expect(document.body.style.backgroundColor).toBe(ThemeStyle["light"].bg);
  });
});
