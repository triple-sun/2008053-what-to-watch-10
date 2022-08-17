import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { GENRE_ELEMENT_ACTIVE_CLASS } from '../../../const/const';
import { ElementTestID, GenreName, Reducer } from '../../../const/enums';
import { createMockStore, makeFakeGenre } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import GenreElement from './genre-element';

const history = createMemoryHistory();

const store = createMockStore();

describe('Component: GenreElement', () => {
  it('should render correctly', () => {
    const mockGenre = makeFakeGenre();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <GenreElement genre={mockGenre} handleGenreClick={() => jest.fn()}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(GenreName[mockGenre])).toBeInTheDocument();
  });

  it('should have active class when genre is selectedGenre', () => {
    const {selectedGenre} = store.getState()[Reducer.MainPage];

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <GenreElement genre={selectedGenre} handleGenreClick={() => jest.fn()}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(ElementTestID.GenreElement)).toHaveClass(GENRE_ELEMENT_ACTIVE_CLASS);
  });
});
