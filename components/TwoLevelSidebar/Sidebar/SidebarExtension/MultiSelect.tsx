import Select, { MultiValue } from 'react-select';
import TagGrid from '../../../TagGrid';

type OptionType = {
  value: string | number;
  label: string;
};

interface Props {
  options: OptionType[];
  value: MultiValue<OptionType>;
  placeholder: string;
  onChange: (selected: MultiValue<OptionType>) => void;
}

const MultiSelectComponent: React.FC<Props> = ({ options, value, placeholder, onChange }) => {
  const handleRemoveTag = (label: string) => {
    const updated = value.filter((item) => item.label !== label);
    onChange(updated);
  };

  return (
    <div>
      <Select<OptionType, true>
        isMulti
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        classNamePrefix="an-simple-multiselect"
        controlShouldRenderValue={false}
        isClearable={false}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: '100%',
          }),
        }}
      />

      {/* Use TagGrid to show selected tags */}
      <TagGrid tags={value.map((option) => option.label)} onRemove={handleRemoveTag} />
    </div>
  );
};

export default MultiSelectComponent;
