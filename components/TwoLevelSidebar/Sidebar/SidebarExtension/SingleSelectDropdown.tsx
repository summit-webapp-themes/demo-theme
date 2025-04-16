import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  label: string;
  options: Option[];
  value: Option | null;
  placeholder: string;
  onChange: (value: Option | null) => void;
}

const SingleSelectDropdown: React.FC<Props> = ({ label, options, value, placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelect = (option: Option) => {
    onChange(option);
    setShowDropdown(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  const handleClear = () => {
    onChange(null);
    setSearchTerm('');
    setHighlightedIndex(-1);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredOptions[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  // Handle focus on text input if dropdown is closed by click
  useEffect(() => {
    if (!showDropdown) {
      setHighlightedIndex(-1);
    }
  }, [showDropdown]);

  return (
    <div className="mb-3 position-relative">
      <label className="form-label" style={{ fontSize: '14px' }}>
        {label}
      </label>
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          className={`form-control cursor-pointer ${styles?.dropdown_input}`}
          placeholder={placeholder}
          value={value ? value.label : searchTerm}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSearchTerm(inputValue);
            if (value) onChange(null); // clear selection if user starts typing
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {showDropdown && (
        <ul ref={listRef} className={`list-group position-absolute w-100 zindex-dropdown ${styles.dropdown_list}`}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={option.value}
                className={`list-group-item list-group-item-action border-0 py-0 py-1
                  ${index === highlightedIndex ? 'active' : ''}
                  ${value?.value === option.value ? 'selected-item' : ''}`}
                style={{ cursor: 'pointer' }}
                onMouseDown={() => handleSelect(option)} // prevents blur
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="list-group-item disabled">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
