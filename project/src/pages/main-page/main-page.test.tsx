import {render, screen} from '@testing-library/react';
import { ComponentTestID, ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks';
import MainPage from './main-page';

const {wrapper} = testUtils();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <MainPage />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.PromoCard)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.MainMovies)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.GenresList)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Catalog)).toBeInTheDocument();
  });
});
