import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { makeFakeRating } from '../../../utils/mocks';
import RatingElement from './rating-element';

const mockRating = makeFakeRating();

describe('Component: RatingElement', () => {
  it('should render correctly', () => {
    render(
      <RatingElement rating={mockRating} handleReviewChange={() => jest.fn()}/>
    );

    expect(screen.getByDisplayValue(mockRating)).toBeInTheDocument();
    expect(screen.getByText(`${ComponentText.Rating} ${mockRating}`)).toBeInTheDocument();
  });
});
