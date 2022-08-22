import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import NotFoundPage from './not-found-page';

const {wrapper} = testUtils();

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <NotFoundPage />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.NotFound)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.ToMainPage)).toBeInTheDocument();
  });
});
