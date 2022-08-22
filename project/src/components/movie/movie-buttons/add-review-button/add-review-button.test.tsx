import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, AuthStatus, ComponentText } from '../../../../const/enums';
import { makeFakeElement } from '../../../../utils/mocks/mocks';
import { testUtils } from '../../../../utils/mocks/test-utils';
import AddReviewButton from './add-review-button';

const {wrapper, mockHistory, mockCurrentMovie} = testUtils();

const mockAddReviewPage = makeFakeElement(ComponentText.Post);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

describe('Component: AddReviewButton', () => {
  it('should render button if user is auth', () => {
    render(
      <AddReviewButton {...mockCurrentMovie}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.AddReview)).toBeInTheDocument();
  });

  it('should not render button if user is not auth', () => {
    const noAuthWrapper = testUtils({storeProps: {authStatus: AuthStatus.NoAuth}}).wrapper;

    render(
      <AddReviewButton {...mockCurrentMovie}/>,
      {wrapper: noAuthWrapper}
    );

    expect(screen.queryByText(ComponentText.AddReview)).not.toBeInTheDocument();
  });

  it('should redirect to add review page when user clicks on addReview', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Movies}${mockCurrentMovie.id}/review`}
          element={mockAddReviewPage}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<AddReviewButton {...mockCurrentMovie}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByText(ComponentText.Post)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.AddReview));

    expect(screen.getByText(ComponentText.Post)).toBeInTheDocument();
  });
});
