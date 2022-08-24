import React, { ChangeEvent } from 'react';
import { MAX_COMMENT_LENTGTH, MIN_COMMENT_LENGTH } from '../../../const/const';
import { ComponentText, ElementTestID } from '../../../const/enums';
import { ReviewProps } from '../../../types/props';

const ReviewTextarea = ({handleReviewChange}: ReviewProps) => {
  const onCommentChange = ({target: {name, value}}: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({name, value});

  return (
    <textarea
      className="add-review__textarea"
      name="comment"
      id="comment"
      minLength={MIN_COMMENT_LENGTH}
      maxLength={MAX_COMMENT_LENTGTH}
      placeholder={ComponentText.ReviewPlaceholder}
      onChangeCapture={onCommentChange}
      data-testid={ElementTestID.ReviewTextArea}
    >
    </textarea>
  );};

export default React.memo(ReviewTextarea);
