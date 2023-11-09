import React, { useState } from 'react';
import './Checkbox.css'; // Подключаем CSS файл для стилей чекбокса

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="Radiobatton_Text">
      <input
        type="checkbox"
        id="checkBox"
        className="styled-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkBox">
        {label} {/* Используем переданное значение вместо жёстко заданного текста */}
      </label>
    </div>
  );
}

export default Checkbox;
