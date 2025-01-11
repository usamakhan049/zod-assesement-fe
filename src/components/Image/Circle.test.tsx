import { render, screen } from "@testing-library/react";
import Circle from "./Circle.tsx";

describe('CircleImage Component', () => {
  it('renders the ImageComponent within a rounded-full div', () => {
    render(<Circle src="test.jpg" alt="Test Image" />);
    const imageContainer = screen.getByRole('img', { name: /Test Image/i }); 
    expect(imageContainer.parentElement).toHaveClass('rounded-full'); 
    expect(imageContainer.parentElement).toHaveClass('overflow-hidden');
  });

  it('passes props to the ImageComponent', () => {
    render(<Circle src="test.jpg" alt="Test Image" extraAttributes="w-20 h-20" />);
    const image = screen.getByRole('img');
    expect(image).toHaveClass('w-20');
    expect(image).toHaveClass('h-20');
  });
});
