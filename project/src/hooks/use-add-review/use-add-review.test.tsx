import {renderHook, act} from '@testing-library/react';
import { lorem } from 'faker';
import { datatype } from 'faker/locale/zh_TW';
import { testUtils } from '../../utils/mocks/test-utils';
import useAddReview from './use-add-review';

const FAKE_RATING = datatype.number(10).toString();

const FAKE_COMMENT = lorem.sentences(datatype.number(10));

const {wrapper} = testUtils();

describe('Hook: useAddReview', () => {
  it('should return handlers', () => {
    const {result} = renderHook(() => useAddReview(), {wrapper});

    const {
      handleReviewChange,
      handleReviewSubmit
    } = result.current;

    expect(handleReviewChange).toBeInstanceOf(Function);
    expect(handleReviewSubmit).toBeInstanceOf(Function);
  });

  it('should correctly update rating', () => {
    const {result} = renderHook(() => useAddReview(), {wrapper});

    act(() => result.current.handleReviewChange({name: 'rating', value: FAKE_RATING}));

    expect(result.current.review.rating).toBe(FAKE_RATING);
  });

  it('should correctly update comment', () => {
    const {result} = renderHook(() => useAddReview(), {wrapper});

    act(() => result.current.handleReviewChange({name: 'comment', value: FAKE_COMMENT}));

    expect(result.current.review.comment).toBe(FAKE_COMMENT);
  });
});
