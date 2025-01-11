import { render, screen } from '@testing-library/react';
import MainSkelton from './MainSkelton'; 

describe('MainSkelton Component', () => {
  it('renders the correct number of skeleton cards', () => {
    render(<MainSkelton />);
    const skeletonCards = screen.getAllByRole('group'); 
    expect(skeletonCards).toHaveLength(8); 
  });

  it('renders skeleton cards with expected structure', () => {
    render(<MainSkelton />);

    const skeletonCards = screen.getAllByRole('group'); 
    skeletonCards.forEach((card) => {
      expect(card).toHaveClass('animate-pulse');
      expect(card).toHaveClass('flex');
      expect(card).toHaveClass('flex-col');
      expect(card).toHaveClass('justify-between');
      expect(card).toHaveClass('p-4');
      expect(card).toHaveClass('border');
      expect(card).toHaveClass('border-border');
      expect(card).toHaveClass('rounded-md');
      expect(card).toHaveClass('shadow');
      expect(card).toHaveClass('min-h-36'); 
    });
  });

  it('renders skeleton cards with expected child elements', () => {
    render(<MainSkelton />);

    const skeletonCards = screen.getAllByRole('group'); 
    skeletonCards.forEach((card) => {
      expect(card.querySelectorAll('.bg-gray-300')).toHaveLength(6); // Check for the presence of expected placeholder elements
    });
  });
});