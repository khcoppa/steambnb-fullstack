import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterBar = (props) => {
  return (
    <div className="filterbar">
      <div className="filter-form">
        <input
          type="date"
          value={props.start_date}
          onChange={handleChange('start_date', props.updateFilter)}
          placeholder="Check in"
        />
        <input
          type="date"
          value={props.end_date}
          onChange={handleChange('end_date', props.updateFilter)}
          placeholder="Check out"
        />
        <input
          type="location"
          value={props.location}
          onChange={handleChange('location', props.updateFilter)}
          placeholder="location"
        />
      </div>
    </div>
  );
}
export default FilterBar;
