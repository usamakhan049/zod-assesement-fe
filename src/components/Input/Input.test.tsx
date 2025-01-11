import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input.tsx";

describe("Base Input Component", () => {

  test("renders input with placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input with initial value", () => {
    render(<Input value="John Doe" />);
    const inputElement = screen.getByDisplayValue("John Doe");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders disabled input", () => {
    render(<Input placeholder="Disabled input" isDisabled={true} />);
    const inputElement = screen.getByPlaceholderText("Disabled input");
    expect(inputElement).toBeDisabled();
  });

  test("renders input with custom styling", () => {
    render(
      <Input
        placeholder="Custom styling"
        backgroundColor="bg-blue-200"
        border="border-blue-500"
        textColor="text-red-700"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Custom styling");
    expect(inputElement).toHaveClass(
      "bg-blue-200 border-blue-500 text-red-700",
    );
  });
  it("renders label when label prop is provided", () => {
    render(<Input label="Label" />);
    const labelElement = screen.getByText("Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("applies hover effect on input", () => {
    render(<Input placeholder="Hover effect" onHover="hover:bg-yellow-200" />);
    const inputElement = screen.getByPlaceholderText("Hover effect");
    fireEvent.mouseEnter(inputElement);
    expect(inputElement).toHaveClass("hover:bg-yellow-200");
  });

  test("applies active effect on input", () => {
    render(
      <Input placeholder="Active effect" onActive="active:bg-green-200" />,
    );
    const inputElement = screen.getByPlaceholderText("Active effect");
    fireEvent.mouseDown(inputElement);
    expect(inputElement).toHaveClass("active:bg-green-200");
  });
 
});
