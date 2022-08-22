import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    render(
      <Spinner />
    );

    expect(screen.getByText(ComponentText.Loading)).toBeInTheDocument();
  });
});
