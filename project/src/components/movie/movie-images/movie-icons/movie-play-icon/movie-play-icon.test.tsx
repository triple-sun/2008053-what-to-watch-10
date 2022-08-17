import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../../const/enums';
import MoviePlayIcon from './movie-play-icon';

describe('Component: MoviePlayIcon', () => {
  it('should render correctly', () => {
    render(
      <MoviePlayIcon />
    );

    expect(screen.getByTestId(ElementTestID.IconPlay)).toBeInTheDocument();
  });
});
