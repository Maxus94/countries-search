import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(region);
  }

  function onChangeRegion(e) {
    setRegion(e.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={onChangeRegion}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(reg => (
          <option key={reg.id} value={reg.value}>
            {reg.name}
          </option>
        ))}
      </select>
    </form>
  );
};
