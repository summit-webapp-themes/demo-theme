import SingleSelectComponent from './SingleSelect';

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

const ReactSelectDropdown: React.FC<Props> = ({ label, options, value, placeholder, onChange }) => {
  return (
    <div className="mb-2 position-relative">
      <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
        {label}
      </label>

      <SingleSelectComponent options={options} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default ReactSelectDropdown;
