import { render, screen } from '@testing-library/react';
import { random } from 'faker';
import { ComponentText } from '../../../../const/enums';
import TReview from '../../../../types/review';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MovieTabReviews from './movie-tab-reviews';

const {mockReviews, wrapper} = testUtils();

const mockNoReviews = [] as TReview[];

const randomReviewText = random.arrayElement(mockReviews).comment;

describe('Component: MovieTabReviews', () => {

  it('should render reviews if any', () => {
    render(
      <MovieTabReviews reviews={mockReviews}/>,
      {wrapper}
    );

    expect(screen.getByText(randomReviewText)).toBeInTheDocument();
  });

  it('should render no reviews if there are none', () => {
    render(
      <MovieTabReviews reviews={mockNoReviews}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.NoReviews)).toBeInTheDocument();
  });
});
