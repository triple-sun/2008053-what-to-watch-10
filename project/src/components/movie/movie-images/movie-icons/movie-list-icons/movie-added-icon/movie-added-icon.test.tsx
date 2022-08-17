import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../../../const/enums';
import MovieAddedIcon from './movie-added-icon';

describe('Component: MovieAddedIcon', () => {
  it('should render correctly', () => {
    render(
      <MovieAddedIcon />
    );

    expect(screen.getByTestId(ElementTestID.IconAdded)).toBeInTheDocument();
  });
});
