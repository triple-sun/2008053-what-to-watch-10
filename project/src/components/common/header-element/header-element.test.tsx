import {render, screen} from '@testing-library/react';
import { random } from 'faker';
import { ElementTestID, HeaderStyle } from '../../../const/enums';
import HeaderElement from './header-element';

const fakeHeaderStyle = random.arrayElement(['', random.objectElement(HeaderStyle)]);

describe('Component: HeaderElement', () => {
  it('should render correctly', () => {
    render(
      <HeaderElement style={fakeHeaderStyle}/>
    );

    expect(screen.getByTestId(ElementTestID.Header)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Header)).toHaveClass(`page-header ${fakeHeaderStyle}`);
  });
});
