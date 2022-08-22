import {render, screen} from '@testing-library/react';
import { ComponentTestID, ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import MyListPage from './my-list-page';

const {wrapper} = testUtils();

describe('Component: MyListPage', () => {
  it('should render correctly', () => {
    render(
      <MyListPage />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Catalog)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.FavoriteMovies)).toBeInTheDocument();
  });
});
