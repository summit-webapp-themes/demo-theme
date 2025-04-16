import React from 'react';

import { MultiValue } from 'react-select'; // ✅ this fixes the error
import MultiSelectComponent from './MultiSelect';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  label: string;
  options: Option[];
  value: MultiValue<Option>;
  placeholder: string;
  onChange: (value: MultiValue<Option>) => void;
}

const ReactMultiselectDropdown: React.FC<Props> = ({ label, options, value, placeholder, onChange }) => {
  return (
    <div className="mb-2 position-relative">
      <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
        {label}
      </label>

      <MultiSelectComponent options={options} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default ReactMultiselectDropdown;
