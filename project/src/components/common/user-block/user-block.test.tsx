import {render, screen} from '@testing-library/react';
import { AuthStatus, ElementTestID } from '../../../const/enums';
import { mockStoreDefaultProps } from '../../../utils/mocks/mocks';
import { testUtils } from '../../../utils/mocks/test-utils';
import UserBlock from './user-block';

const {wrapper} = testUtils();

describe('Component: UserBlock', () => {
  it('should render UserBlockNoAuth when user not authorized', () => {
    const noAuthWrapper = testUtils({...mockStoreDefaultProps, authStatus: AuthStatus.NoAuth}).wrapper;

    render(
      <UserBlock />,
      {wrapper: noAuthWrapper}
    );

    expect(screen.getByTestId(ElementTestID.UserBlockNoAuth)).toBeInTheDocument();
  });

  it('should render UserBlockAuth when user is authorized', () => {
    render(
      <UserBlock />,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.UserBlockAuth)).toBeInTheDocument();
  });
});
