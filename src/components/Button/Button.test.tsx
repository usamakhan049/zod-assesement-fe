import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button.tsx";

describe("Base Button Component", () => {
  test("renders Button component", () => {
    render(<Button label="" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClickCallback when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button label="Click Me" onClickCallback={onClickMock} />);
    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("renders disabled button", () => {
    render(<Button label="Disabled" isDisabled={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  test("applies custom styles", () => {
    render(
      <Button
        label="Styled Button"
        color="bg-blue-500"
        borderRadius="rounded-lg"
        textColor="text-white"
        textSize="text-lg"
      />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(
      "bg-blue-500 text-white rounded-lg text-lg"
    );
  });
  
  test("applies hover styles", () => {
    render(
      <Button
        label="Hover Button"
        color="bg-blue-500"
        onHover="hover:bg-blue-600"
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveClass("hover:bg-blue-600");
  });
});
