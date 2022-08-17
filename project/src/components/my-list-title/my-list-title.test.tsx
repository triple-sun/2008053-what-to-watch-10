import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import MyListTitle from './my-list-title';

describe('Component: MyListTitle', () => {
  it('should render correctly', () => {
    const count = datatype.number(10);

    render(
      <MyListTitle count={count}/>
    );

    expect(screen.getByText(count)).toBeInTheDocument();
  });
});
