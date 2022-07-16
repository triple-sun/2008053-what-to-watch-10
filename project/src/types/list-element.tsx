import { ReactElement } from 'react';
import { Key } from 'react';

type TListElement<T = string> = {
  key: Key;
  value: T
  children?: ReactElement
}

export default TListElement;
