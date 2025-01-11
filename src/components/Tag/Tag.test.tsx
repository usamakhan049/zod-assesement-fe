import { render, screen } from "@testing-library/react";
import Tag from "./Tag.tsx";

describe("Tag Component", () => {
  it("renders tag with text correctly", () => {
    render(<Tag text="Test Tag" />);
    expect(screen.getByText("Test Tag")).toBeInTheDocument();
  });

  it("renders with extra attributes", () => {
    render(<Tag text="Test Tag" extraAttributes="bg-blue-500 text-white" />);
    expect(screen.getByText("Test Tag")).toHaveClass("bg-blue-500");
    expect(screen.getByText("Test Tag")).toHaveClass("text-white");
  });

  it("renders with default styles", () => {
    render(<Tag text="Test Tag" />);
    expect(screen.getByText("Test Tag")).toHaveClass("inline-block");
    expect(screen.getByText("Test Tag")).toHaveClass("max-h-6");
  });
});
