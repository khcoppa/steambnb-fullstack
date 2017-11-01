import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = (props) => {
  return (
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
    </div>
  );
}
export default FilterForm;
