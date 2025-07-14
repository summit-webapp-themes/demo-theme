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
    components={{ DropdownIndicator: () => null }}
    styles={{
      container: (baseStyles) => ({
        ...baseStyles,
        width: 'fit-content',
        minWidth: '60px',
      }),
      control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '12px !important',
        border: '1px solid #DADADA !important',
        backgroundColor: '#FFF8EB',
        height: '44px'
      }),
      singleValue: (baseStyles) => ({
        ...baseStyles,
        color: '#E69E17 !important',
        fontSize: '14px !important',
      }),
      menu: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '12px',
        border: '1px solid #DADADA !important',
        margin: '0px',
        overflow: 'hidden',
        minWidth: '70px',
        width: 'fit-content'
      }),
      menuList: (baseStyles) => ({
        ...baseStyles,
        borderRadius: '0px',
        fontSize: '14px !important',
      }),
    }} 
    options={options} 
    value={value} 
    placeholder={placeholder} 
    onChange={onChange} 
    isSearchable={false}
    isClearable={false}
  />
);

export default SingleSelectComponent;
