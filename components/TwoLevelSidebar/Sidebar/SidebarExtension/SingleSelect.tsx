import React from 'react';
import Select from 'react-select';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  value: Option | null;
  placeholder: string;
  onChange: (value: Option | null) => void;
}

const SingleSelectComponent: React.FC<Props> = ({ options, value, placeholder, onChange }) => (
  <Select 
    classNamePrefix="an-simple-select" 
    styles={{
      container: (baseStyles) => ({
        ...baseStyles,
        width: '100%',
      }),
    }} 
    options={options} 
    value={value} 
    placeholder={placeholder} 
    onChange={onChange} isClearable />
);

export default SingleSelectComponent;
