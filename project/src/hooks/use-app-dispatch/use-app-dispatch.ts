
import { useDispatch } from 'react-redux';
import TAppDispatch from '../../types/app-dispatch';

const useAppDispatch = () => useDispatch<TAppDispatch>();

export default useAppDispatch;
