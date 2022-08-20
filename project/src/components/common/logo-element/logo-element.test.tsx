import {fireEvent, render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { LOGO_LINK_LIGHT_CLASS, MOCK_PAGE_LINK } from '../../../const/const';
import { AppRoute, ComponentTestID, PageTestID, } from '../../../const/enums';
import MainPage from '../../../pages/main-page/main-page';
import { testUtils } from '../../../utils/mocks';
import LogoElement from './logo-element';

const {wrapper, history} = testUtils();

describe('Component: LogoElement', () => {
  it('should render correctly', () => {
    render(
      <LogoElement />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.Logo)).toBeInTheDocument();
  });

  it('should have light class if isLight', () => {
    render(
      <LogoElement isLight/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.Logo)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.Logo)).toHaveClass(LOGO_LINK_LIGHT_CLASS);
  });

  it('should redirect to / when user clicks on logo', async () => {
    history.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<LogoElement />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MainPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ComponentTestID.Logo));

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();
  });
});
