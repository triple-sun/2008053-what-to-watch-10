import {fireEvent, render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../const/const';
import { AppRoute, ComponentText, PageTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import MainPage from '../main-page/main-page';
import NotFoundPage from './not-found-page';

const {wrapper, mockHistory} = testUtils();

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <NotFoundPage />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.NotFound)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.ToMainPage)).toBeInTheDocument();
  });

  it('should redirect to / when user clicks on signOut', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<NotFoundPage />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MainPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.ToMainPage));

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();
  });
});
