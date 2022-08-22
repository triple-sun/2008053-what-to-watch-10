import React from 'react';
import { Bars } from 'react-loader-spinner';
import { ComponentText } from '../../const/enums';
import './spinner.css';

const Spinner = () => <><Bars color="#C9B37E" height={100} width={100} />{ComponentText.Loading}</>;

export default Spinner;
