import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks';
import PageFooter from './page-footer';

const {wrapper} = testUtils();

describe('Component: PageFooter', () => {
  it('should render correctly', () => {
    render(
      <PageFooter />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Footer)).toBeInTheDocument();
  });
});
