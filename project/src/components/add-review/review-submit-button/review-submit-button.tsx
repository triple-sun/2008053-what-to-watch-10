import React from 'react';
import { ComponentText } from '../../../const/enums';

const ReviewSubmitButton = ({handleReviewSubmit}: {handleReviewSubmit: () => void;}) => {
  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleReviewSubmit();
  };

  return (
    <button className="add-review__btn" type="submit" onClick={onSubmitClick}>{ComponentText.Post}</button>
  );
};

export default React.memo(ReviewSubmitButton);
