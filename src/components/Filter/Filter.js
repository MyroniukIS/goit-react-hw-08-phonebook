import styles from './Filter.module.css';
import { PropTypes } from 'prop-types';

function Filter({ value, onFilterChange }) {
  return (
    <label className={styles.filter_label}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
