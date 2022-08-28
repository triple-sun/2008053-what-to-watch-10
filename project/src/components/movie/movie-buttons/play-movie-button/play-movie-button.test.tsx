import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, ComponentText } from '../../../../const/enums';
import { testUtils } from '../../../../utils/mocks/test-utils';
import PlayMovieButton from './play-movie-button';

const {wrapper, mockHistory, mockCurrentMovie, mockElementText, mockElement: mockMoviePlayerPage} = testUtils();

describe('Component: PlayMovieButton', () => {
  it('should render correctly', () => {
    render(
      <PlayMovieButton id={mockCurrentMovie.id}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Play)).toBeInTheDocument();
  });

  it('should redirect to movie player when user clicks on playButton', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Player}${mockCurrentMovie.id}`}
          element={mockMoviePlayerPage}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<PlayMovieButton {...mockCurrentMovie}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByText(mockElementText)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.Play));

    expect(screen.getByText(mockElementText)).toBeInTheDocument();
  });
});
