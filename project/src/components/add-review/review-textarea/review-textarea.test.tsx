import {fireEvent, render, screen} from '@testing-library/react';
import { datatype, lorem } from 'faker';
import { ElementTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks';
import ReviewTextarea from './review-textarea';

const MOCK_COMMENT_TEXT = lorem.sentences(datatype.number(10));

const {wrapper} = testUtils();

const handleReviewChange = jest.fn();

describe('Component: ReviewTextarea', () => {
  it('should render correctly', () => {
    render(
      <ReviewTextarea handleReviewChange={handleReviewChange}/>,
      {wrapper}
    );
    expect(screen.getByTestId(ElementTestID.ReviewTextArea)).toBeInTheDocument();
  });

  it('should call handleReviewChange when user changes textarea', async () => {
    render(
      <ReviewTextarea handleReviewChange={handleReviewChange}/>,
      {wrapper}
    );

    const reviewTextArea = screen.getByTestId<HTMLTextAreaElement>(ElementTestID.ReviewTextArea);

    fireEvent.change(reviewTextArea, {target: {value: MOCK_COMMENT_TEXT}});

    const {name, value} = reviewTextArea;

    expect(handleReviewChange).toBeCalled();
    expect(handleReviewChange).toBeCalledWith({name, value});
  });
});

