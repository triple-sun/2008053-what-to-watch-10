import { useCallback, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const/const';
import { isDisabledInitialState, reviewInitialState } from '../../const/initial-states';
import { addReviewAction } from '../../store/current-movie/current-movie-api-actions';
import { getAddReviewState } from '../../store/current-movie/current-movie-selectors';
import { TReviewState } from '../../types/state';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useAddReview = () => {
  const id = Number(useParams().id);

  const [review, setReview] = useState<TReviewState>(reviewInitialState);
  const [isDisabled, setIsDisabled] = useState(isDisabledInitialState);

  const {rating, comment} = review;

  const isAddingReview = useAppSelector(getAddReviewState);

  const dispatch = useAppDispatch();

  const handleReviewChange = useCallback(
    ({name, value}: {name: string, value: string | number}) => setReview({...review, [name]: value}),
    [review]
  );

  const handleReviewSubmit = useCallback(() => {
    dispatch(addReviewAction({
      rating: rating,
      comment: comment,
      id: id,
    }));
  }, [comment, dispatch, id, rating]
  );

  useLayoutEffect(
    () => {
      if (comment && comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH && rating > 0 && isDisabled.button) {
        setIsDisabled({...isDisabled, button: false});
      }
      if (isAddingReview && !isDisabled.form) {
        setIsDisabled({form: true, button: true});
      }
      if (!isAddingReview && isDisabled.form) {
        setIsDisabled({form: false, button: false});
      }
    }, [comment, isAddingReview, isDisabled, rating]
  );

  return {
    review,
    isDisabled,
    setFormState: setIsDisabled,
    handleReviewChange,
    handleReviewSubmit
  };
};

export default useAddReview;
