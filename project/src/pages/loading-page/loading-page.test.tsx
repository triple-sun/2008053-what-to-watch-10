import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import LoadingPage from './loading-page';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    render(
      <LoadingPage />
    );

    expect(screen.getByText(ComponentText.Loading)).toBeInTheDocument();
  });
});
