import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { ComponentText } from '../../const/enums';
import { makeFakeMovies } from '../../utils/mocks';
import ShowMoreButton from './show-more-button';

const mockMoviesCount = makeFakeMovies().length;

const mockRenderedMoviesCount = datatype.number(mockMoviesCount);

describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {
    render(
      <ShowMoreButton totalMovieCount={mockMoviesCount} renderedMoviesCount={mockRenderedMoviesCount} handleShowMoreButtonClick={() => jest.fn()}/>
    );

    expect(screen.getByText(ComponentText.ShowMore)).toBeInTheDocument();
  });
});
