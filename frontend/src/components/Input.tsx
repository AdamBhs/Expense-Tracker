import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './comp.module.css';

export default function Input({ type, isRequired, id, onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState('');

  const onChangeGlobal = (e) => {
    setData(e.target.value);
    if (onChange) {
      onChange(e.target.value); // Ensure onChange exists before calling it
    }
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.c_input}
        type={type === 'password' && showPassword ? 'text' : type}
        required={isRequired || undefined}
        id={id}
        value={data} // Controlled component
        onChange={onChangeGlobal} // Fix: Pass event object, not value
      />
      {type === 'password' && data && (
        <span className={styles.eyeIcon} onClick={toggleVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
}
