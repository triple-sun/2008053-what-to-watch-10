import { fireEvent, render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks';
import ReviewSubmitButton from './review-submit-button';

const {wrapper} = testUtils();

const handleReviewSubmit = jest.fn();

describe('Component: ReviewSubmitButton', () => {
  it('should render correctly', () => {
    render(
      <ReviewSubmitButton handleReviewSubmit={handleReviewSubmit}/>,
      {wrapper}
    );
    expect(screen.getByText(ComponentText.Post)).toBeInTheDocument();
  });

  it('should call handleReviewSubmit when user clicks ReviewSubmitButton', async () => {
    render(
      <ReviewSubmitButton handleReviewSubmit={handleReviewSubmit}/>,
      {wrapper}
    );

    const reviewSubmitButton = screen.getByText<HTMLButtonElement>(ComponentText.Post);

    fireEvent.click(reviewSubmitButton);

    expect(handleReviewSubmit).toBeCalled();
    expect(handleReviewSubmit).toBeCalledWith();
  });
});

