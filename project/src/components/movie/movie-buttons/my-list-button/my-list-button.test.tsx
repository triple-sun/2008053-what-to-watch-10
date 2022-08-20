import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentText, ElementTestID } from '../../../../const/enums';
import { makeFakeMovie, testUtils } from '../../../../utils/mocks';
import MyListButton from './my-list-button';

const mockMovie = makeFakeMovie();

const {wrapper, favorites} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

describe('Component: MyListButton', () => {
  const onFavoriteButtonClick = jest.fn();

  it('should render correctly', () => {
    render(
      <MyListButton favoritesCount={favorites.length} onFavoriteButtonClick={onFavoriteButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.MyListButton)).toBeInTheDocument();
  });

  it('should render MovieListAddIcon if not in favorites', () => {
    render(
      <MyListButton favoritesCount={favorites.length} onFavoriteButtonClick={onFavoriteButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Add)).toBeInTheDocument();
  });

  it('should render MovieListAddedIcon if not in favorites', () => {
    render(
      <MyListButton favoritesCount={favorites.length} onFavoriteButtonClick={onFavoriteButtonClick} isFavorite/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.IconAdded)).toBeInTheDocument();
  });

  it('should call onFavoriteButtonClick when user clicks MyListAddButton', async () => {
    render(
      <MyListButton favoritesCount={favorites.length} onFavoriteButtonClick={onFavoriteButtonClick} isFavorite/>,
    );

    fireEvent.click(screen.getByTestId(ElementTestID.MyListButton));

    expect(onFavoriteButtonClick).toBeCalled();
  });
});
