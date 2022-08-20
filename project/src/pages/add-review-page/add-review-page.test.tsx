import {render, screen} from '@testing-library/react';
import { ComponentTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks';
import AddReviewPage from './add-review-page';

const {currentMovie: mockMovie, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

describe('Component: AddReviewPage', () => {
  it('should render correctly', async () => {
    render(
      <AddReviewPage />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.AddReviewForm)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.AddReviewHeader)).toBeInTheDocument();
  });
});
