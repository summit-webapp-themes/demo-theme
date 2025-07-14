import React, { ReactNode } from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
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
  icon: ReactNode;
}

const SingleSelectWithIcon: React.FC<Props> = ({ options, value, placeholder, onChange, icon }) => (
  <div style={{ position: 'relative', width: 'fit-content', minWidth: '60px' }}>
    <div style={{
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      pointerEvents: 'none',
    }}>
      
      {icon}
    </div>
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
          border: '1px solid #E3E3E3 !important',
          backgroundColor: '#F2F5F6',
          height: '44px',
          paddingLeft: '26px',
          boxShadow: 'none',
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: '#2B2B2B !important',
          fontSize: '14px !important',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '12px',
          border: '1px solid #E3E3E3 !important',
          margin: '0px',
          overflow: 'hidden',
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
  </div>
);

export default SingleSelectWithIcon;
