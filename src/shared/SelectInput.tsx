import React, { FC } from "react";
import { MultiSelect } from "primereact/multiselect";

type SelectInputProps = {
  selectedValue: string;
  options: string[] | { title: string; id: string }[];
  setSelectedValue: (state: string) => void;
  searchable?: boolean;
  multiselect?: boolean;
  optionLabel?: string;
  placeholder?: string;
};

export const SelectInput: FC<SelectInputProps> = ({
  selectedValue = null,
  options = [],
  setSelectedValue,
  searchable = true,
  multiselect = true,
  optionLabel = "",
  placeholder = "",
}) => {
  return (
    <MultiSelect
      value={selectedValue}
      options={options}
      onChange={(e) =>
        setSelectedValue(
          multiselect ? e.value : e.value.length > 1 ? [e.value[1]] : e.value
        )
      }
      optionLabel={optionLabel}
      placeholder={placeholder}
      filter={searchable}
    />
  );
};
