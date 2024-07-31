import { useEffect, useRef } from "react";

export default function Select({
  options,
  value,
  placeholder,
  onChange,
  ...rest
}) {
  const select = useRef();

  useEffect(() => {
    select.current.selectedIndex = options?.findIndex((x) => x.value === value);
  }, [value]);

  return (
    <select
      ref={select}
      onChange={(ev) => {
        const selectedIndex = ev.target.selectedIndex;
        const selectedOption = options[selectedIndex];
        if (selectedOption) {
          onChange(selectedOption.value);
        }
      }}
      {...rest}
    >
      {!value && placeholder ? <option>{placeholder}</option> : null}
      {options?.map((option, i) => (
        <option key={i} value={i}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
