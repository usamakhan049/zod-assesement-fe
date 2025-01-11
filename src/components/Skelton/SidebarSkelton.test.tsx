
import { render, screen } from '@testing-library/react';
import SidebarSkelton from './SidebarSkelton';

describe('SidebarSkelton Component', () => {
  it('renders correctly', () => {
    render(<SidebarSkelton />);

    // Check for the presence of the main container
    const container = screen.getByRole('region'); 
    expect(container).toBeInTheDocument();

    // Check for the presence of the expected number of skeleton elements
    const skeletonElements = screen.getAllByRole('presentation'); 
    expect(skeletonElements).toHaveLength(6); 

    // Check for the presence of the expected class names on the first element
    expect(skeletonElements[0]).toHaveClass('rounded-full', 'bg-gray-300', 'h-48', 'w-48'); 
  });
});