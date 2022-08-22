import React, { ChangeEvent } from 'react';
import { ComponentText, ElementTestID } from '../../../const/enums';
import { ReviewProps } from '../../../types/props';

const ReviewTextarea = ({handleReviewChange}: ReviewProps) => {
  const onCommentChange = ({target: {name, value}}: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({name, value});

  return (
    <textarea className="add-review__textarea" name="comment" id="comment" placeholder={ComponentText.ReviewPlaceholder} onChangeCapture={onCommentChange} data-testid={ElementTestID.ReviewTextArea}></textarea>
  );};

export default React.memo(ReviewTextarea);
