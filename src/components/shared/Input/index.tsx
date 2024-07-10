import React from "react";
import styles from "./Input.module.css";
import { IoMdEyeOff } from "react-icons/io";

interface InputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabel?: boolean;
  borderNone?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabel,
  borderNone,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} style={{ color: disabel ? "gray" : "black", userSelect: disabel || borderNone ? "none" : "auto" }}>
        {label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
          disabled={disabel || borderNone}
          style={{ border: borderNone ? "none" : "" }}
        />
        {type === "password" && (
          <IoMdEyeOff className={styles.passwordIcon} color="gray" size={24} onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
    </div>
  );
};

export default Input;
