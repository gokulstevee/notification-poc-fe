import React from "react";
import Select, { ActionMeta, OnChangeValue } from "react-select";
import "./CustomSelect.css";
import { classNames } from "@utils/main";

export interface ReactSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  onChange: (
    newValue: OnChangeValue<ReactSelectOption, boolean>,
    actionMeta: ActionMeta<ReactSelectOption>
  ) => void;
  options: ReactSelectOption[];
  isMulti: boolean;
  isSearchable: boolean;
  required: boolean;
  className?: string;
  name: string;
  classNamePrefix?: string;
  isClearable?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  defaultValue?: ReactSelectOption | ReactSelectOption[];
  placeholder?: string;
  value?: ReactSelectOption | ReactSelectOption[] | null;
  isDisabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  className = "basic-multi-select",
  classNamePrefix = "select",
  isClearable = false,
  isSearchable = true,
  name,
  options,
  onChange,
  onBlur,
  isMulti = true,
  required = false,
  defaultValue = [],
  value = [],
  placeholder = "Select...",
  isDisabled = false,
}) => {
  return (
    <Select
      classNamePrefix={classNamePrefix}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name={name}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
      onBlur={onBlur}
      required={required}
      defaultValue={defaultValue}
      value={value}
      isDisabled={isDisabled}
      placeholder={placeholder}
      className={classNames(
        "text-[#000000] appearance-none block w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm",
        className
      )}
    />
  );
};

export default CustomSelect;
