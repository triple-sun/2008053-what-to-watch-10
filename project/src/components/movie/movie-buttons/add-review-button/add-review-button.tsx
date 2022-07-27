import React from 'react';
import { useNavigate } from 'react-router-dom';
import TMovie from '../../../../types/movie';
import THandlePageChange from '../../../../types/page-change';

const AddReviewButton = ({id, handlePageChange}: TMovie & THandlePageChange) => {
  const navigate = useNavigate();

  const onAddReviewLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (handlePageChange) {
      handlePageChange();
    }
    navigate(`/films/${id}/review`);
  };

  return <a href={`/films/${id}/review`} className="btn film-card__button" onClick={onAddReviewLinkClick}>Add review</a>;
};

export default AddReviewButton;
