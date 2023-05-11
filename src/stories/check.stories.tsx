import React, { useState } from 'react';

export default {
  title: 'Checkbox',
};

export const BasicCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        value="checkboxValue"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheckbox">My Checkbox </label><br></br>
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        value="checkboxValue"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheckbox">My Checkbox </label>
    </div>
  );
};
