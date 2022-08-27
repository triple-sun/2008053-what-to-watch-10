import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_COMMENT_LENTGTH, MIN_COMMENT_LENGTH } from '../../const/const';
import { isDisabledInitialState, reviewInitialState } from '../../const/initial-states';
import { addReviewAction } from '../../store/current-movie/current-movie-api-actions';
import { getAddReviewState } from '../../store/current-movie/current-movie-selectors';
import { TReviewState } from '../../types/state';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';
import useCurrentMovie from '../use-current-movie/use-current-movie';

const useAddReview = () => {
  const id = Number(useParams().id);

  const [review, setReview] = useState<TReviewState>(reviewInitialState);
  const [isDisabled, setIsDisabled] = useState(isDisabledInitialState);

  const {rating, comment} = review;

  const isAddingReview = useAppSelector(getAddReviewState);

  const {movie} = useCurrentMovie();

  const dispatch = useAppDispatch();

  const handleReviewChange = ({name, value}: {name: string, value: string | number}) => setReview({...review, [name]: value});

  const handleReviewSubmit = () => {
    dispatch(addReviewAction({
      rating: rating,
      comment: comment,
      id: id,
    }));
  };

  useEffect(
    () => {
      if (comment && comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENTGTH && rating > 0 && isDisabled.button) {
        setIsDisabled({...isDisabled, button: false});
      }
      if (isAddingReview && !isDisabled.form) {
        setIsDisabled({form: isAddingReview, button: isAddingReview});
      }
    }, [comment, isAddingReview, isDisabled, rating]
  );

  return {
    movie,
    review,
    isDisabled,
    setFormState: setIsDisabled,
    handleReviewChange,
    handleReviewSubmit
  };
};

export default useAddReview;
