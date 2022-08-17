import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ComponentText } from '../../../const/enums';
import { makeFakeMovie } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import Breadcrumbs from './breadcrumbs';

const mockMovie = makeFakeMovie();

const history = createMemoryHistory();

describe('Component: AddReviewBreadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Breadcrumbs {...mockMovie}/>
      </HistoryRouter>
    );

    expect(screen.getByText((mockMovie.name))).toBeInTheDocument();
    expect(screen.getByText(ComponentText.AddReview)).toBeInTheDocument();
  });

});
