import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../../../../utils/mocks';
import Review from './review';

const mockReview = makeFakeReview();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Review {...mockReview} />
    );

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(mockReview.rating)).toBeInTheDocument();
  });
});
