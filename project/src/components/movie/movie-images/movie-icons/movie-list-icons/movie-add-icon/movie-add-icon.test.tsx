import { render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../../../const/enums';
import MovieAddIcon from './movie-add-icon';

describe('Component: MovieAddIcon', () => {
  it('should render correctly', () => {
    render(
      <MovieAddIcon />
    );

    expect(screen.getByText(ComponentText.Add)).toBeInTheDocument();
  });
});
