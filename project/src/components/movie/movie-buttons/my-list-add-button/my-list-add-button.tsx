import { useNavigate } from 'react-router-dom';

const MyListAddButton = ({count}: {count: number}) => {
  const navigate = useNavigate();
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => navigate('/mylist')}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="/my-list/"></use>
      </svg>
      <span>My list </span>
      <span className="film-card__count">{count}</span>
    </button>
  );
};


export default MyListAddButton;
