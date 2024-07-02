import React from 'react';
import s from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked?: boolean;
}


const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <div className={s.rememberMe} onClick={() => setIsChecked(!isChecked)}>
      <input type="checkbox" defaultChecked={isChecked} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
