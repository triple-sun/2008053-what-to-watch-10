import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import WTWElement from './wtw-element';

describe('Component: WTW Element', () => {
  it('should render correctly', () => {
    render(
      <WTWElement />
    );

    expect(screen.getByText(ComponentText.WTW)).toBeInTheDocument();
  });
});
