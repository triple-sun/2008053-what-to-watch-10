import { cleanup, fireEvent, render, screen} from '@testing-library/react';
import { GENRE_ELEMENT_ACTIVE_CLASS } from '../../../const/const';
import { ElementTestID, Genre } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import { humanizeGenreName } from '../../../utils/utils';
import GenreElement from './genre-element';

const {wrapper, mockSelectedGenre} = testUtils();

const mockGenre = Genre.Comedy;

const mockHandleGenreChange = jest.fn();

describe('Component: GenreElement', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    render(
      <GenreElement genre={mockGenre} handleGenreChange={mockHandleGenreChange}/>,
      {wrapper}
    );

    expect(screen.getByText(humanizeGenreName(mockGenre))).toBeInTheDocument();
  });

  it('should have active class when genre is selectedGenre', () => {
    render(
      <GenreElement genre={mockSelectedGenre} handleGenreChange={mockHandleGenreChange}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.GenreElement)).toHaveClass(GENRE_ELEMENT_ACTIVE_CLASS);
  });

  it('should get active class when user clicks on genre', async () => {
    const {rerender} = render(
      <GenreElement genre={mockGenre} handleGenreChange={mockHandleGenreChange}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.GenreElement)).not.toHaveClass(GENRE_ELEMENT_ACTIVE_CLASS);

    rerender(<GenreElement genre={mockSelectedGenre} handleGenreChange={mockHandleGenreChange}/>);

    expect(screen.getByTestId(ElementTestID.GenreElement)).toHaveClass(GENRE_ELEMENT_ACTIVE_CLASS);
  });

  it('should call handleGenreClick when user clicks on genre', async () => {

    render(
      <GenreElement genre={mockGenre} handleGenreChange={mockHandleGenreChange}/>,
      {wrapper}
    );

    fireEvent.click(screen.getByTestId(ElementTestID.GenreElement));

    expect(mockHandleGenreChange).toBeCalled();
    expect(mockHandleGenreChange).toBeCalledWith(mockGenre);
  });
});
