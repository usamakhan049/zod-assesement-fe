import { render, screen,  } from '@testing-library/react';
import RepoItem from './RepoItem';
import { getLanguageColor } from '../../utils/Utils';
import { mockRepository } from './MockData';

jest.mock('../../utils/Utils', () => ({
  getLanguageColor: jest.fn(),
  getHostnameFromUrl: jest.fn(),
}));



describe('RepoItem Component', () => {
  it('renders repository name correctly', () => {
    render(<RepoItem repository={mockRepository} />);

    const repoName = screen.getByText(/my-awesome-repo/i); // Case-insensitive match
    expect(repoName).toBeInTheDocument();
  });

  it('renders link to repository with correct target and rel attributes', () => {
    render(<RepoItem repository={mockRepository} />);

    const repoLink = screen.getByRole('link');
    expect(repoLink).toHaveAttribute('href', mockRepository.html_url);
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders star count and public/private status using Tags', () => {
    render(<RepoItem repository={mockRepository} />);

    const starTag = screen.getByText(/Star: 100/i);
    const privacyTag = screen.getByText(/Public/i);

    expect(starTag).toBeInTheDocument();
    expect(privacyTag).toBeInTheDocument();
  });

  it('calls getLanguageColor with correct argument', () => {
    render(<RepoItem repository={mockRepository} />);

    expect(getLanguageColor).toHaveBeenCalledWith(mockRepository.language);
  });

  it('handles missing language by displaying default', () => {
    mockRepository.language = undefined;
    render(<RepoItem repository={mockRepository} />);

    const languageText = screen.getByText(/TypeScript/i); // Default language
    expect(languageText).toBeInTheDocument();
  });
});