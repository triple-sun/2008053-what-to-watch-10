import { useNavigate } from 'react-router-dom';
import THandlePageChange from '../../../../types/page-change';

const MyListAddButton = ({count, handlePageChange}: {count: number} & THandlePageChange) => {
  const navigate = useNavigate();

  const onMyListButtonClick = () => {
    if (handlePageChange) {
      handlePageChange();
    }
    navigate('/mylist');
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onMyListButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="/my-list/"></use>
      </svg>
      <span>My list </span>
      <span className="film-card__count">{count}</span>
    </button>
  );
};


export default MyListAddButton;
