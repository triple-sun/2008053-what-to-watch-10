import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentText } from '../../../../../const/enums';

const ExitPlayerButton = ({id}: {id: number}) => <Link to={`${AppRoute.Movies}${id}`} type="button" className="player__exit" >{ComponentText.Exit}</Link>;

export default React.memo(ExitPlayerButton);
