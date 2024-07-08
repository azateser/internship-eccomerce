import React from "react";
import s from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: any;
} 

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <div className={s.rememberMe} onClick={() => setIsChecked(!isChecked)}>
      <input type="checkbox" defaultChecked={isChecked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
