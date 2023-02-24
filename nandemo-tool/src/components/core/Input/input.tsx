import { InputProps } from "./interface";
import './input.css';

export const Input: React.FC<InputProps> = ({
  id,
  className,
  testid,
  value,
  onChange,
  placeholder,
  disabled,
  label,
  unit
}) => (
  <div
    id={id}
    className={className}
    data-testid={testid}
  >
    <div className="input-label">{label}</div>
    <div className="input-wrapper">
      <input
        type="text"
        className={disabled ? 'input-default input-disabled' : 'input-default'}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      <span className="input-unit">{unit}</span>
    </div>
  </div>
);
