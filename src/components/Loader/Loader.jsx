import ClipLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <ClipLoader color="#36d7b7" />
    </div>
  );
};
