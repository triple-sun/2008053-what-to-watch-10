import {fireEvent, render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { makeFakeRating } from '../../../utils/mocks';
import RatingElement from './rating-element';

const mockRating = makeFakeRating();

const handleReviewChange = jest.fn();

describe('Component: RatingElement', () => {
  it('should render correctly', () => {
    render(
      <RatingElement rating={mockRating} handleReviewChange={handleReviewChange}/>
    );

    expect(screen.getByDisplayValue(mockRating)).toBeInTheDocument();
    expect(screen.getByText(`${ComponentText.Rating} ${mockRating}`)).toBeInTheDocument();
  });

  it('should call handleReviewChange when user clicks RatingElement', async () => {
    render(
      <RatingElement rating={mockRating} handleReviewChange={handleReviewChange}/>,
    );

    const ratingElement = screen.getByLabelText<HTMLInputElement>(`${ComponentText.Rating} ${mockRating}`);
    const {name, value} = ratingElement;

    fireEvent.click(ratingElement);

    expect(handleReviewChange).toBeCalled();
    expect(handleReviewChange).toBeCalledWith({name, value});
  });
});
