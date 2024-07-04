import React from "react";
import styles from "./Input.module.css";
import { IoMdEyeOff } from "react-icons/io";

interface InputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
        {type === "password" && (
          <IoMdEyeOff className={styles.passwordIcon} color="gray" size={24} onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
    </div>
  );
};

export default Input;
