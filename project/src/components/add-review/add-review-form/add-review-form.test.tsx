import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks';
import AddReviewForm from './add-review-form';

const {wrapper} = testUtils();

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    render(
      <AddReviewForm />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Post)).toBeInTheDocument();
  });
});
