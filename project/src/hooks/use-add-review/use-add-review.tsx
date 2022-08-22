import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewInitialState } from '../../const/initial-states';
import { addReviewAction } from '../../store/review/review-api-actions';
import { TReviewState } from '../../types/state';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';

const useAddReview = () => {
  const id = Number(useParams().id);

  const [review, setReview] = useState<TReviewState>(reviewInitialState);
  const {rating, comment} = review;

  const dispatch = useAppDispatch();

  const handleReviewChange = ({name, value}: {name: string, value: string | number}) => setReview({...review, [name]: value});

  const handleReviewSubmit = () => {
    dispatch(addReviewAction(({
      rating: rating,
      comment: comment,
      id: id,
    })));
  };

  return {
    review,
    handleReviewChange,
    handleReviewSubmit
  };
};

export default useAddReview;
