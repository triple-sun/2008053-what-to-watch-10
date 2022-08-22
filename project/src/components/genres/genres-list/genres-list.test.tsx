import {render, screen} from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import GenresList from './genres-list';

const {wrapper} = testUtils();

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    render(
      <GenresList />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.GenresList)).toBeInTheDocument();
  });
});
