import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterBar = (props) => {
  return (
    <div className="filterbar">
      <div className="filter-form">
        <form className="dates">
          <label>Check in:</label>
            <input
              type="date"
              value={props.start_date}
              onChange={handleChange('start_date', props.updateFilter)}
              placeholder="Check in"
            />

          <label>Check out:</label>
            <input
              type="date"
              value={props.end_date}
              onChange={handleChange('end_date', props.updateFilter)}
              placeholder="Check out"
            />
        </form>

      </div>
    </div>
  );
}
export default FilterBar;
