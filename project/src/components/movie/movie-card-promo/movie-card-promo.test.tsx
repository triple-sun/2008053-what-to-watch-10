import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieCardPromo from './movie-card-promo';

const {mockPromo, wrapper} = testUtils();

const mockNoPromo = null;

describe('Component: MovieCardPromo', () => {
  it('should render if promo exists', () => {
    render(
      <MovieCardPromo promo={mockPromo}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.PromoCard)).toBeInTheDocument();
  });

  it('should not render if no promo', () => {
    render(
      <MovieCardPromo promo={mockNoPromo}/>,
      {wrapper}
    );

    expect(screen.queryByTestId(ComponentTestID.PromoCard)).not.toBeInTheDocument();
  });
});
