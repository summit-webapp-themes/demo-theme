import { useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import { IoRefresh } from 'react-icons/io5';
import { resetStore } from '../../../store/slices/auth/logout-slice';
import styles from '../../../styles/components/twoLevelSidebarComponents.module.scss';
import { useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

type TopFilterComponentTypes = {
  actionBtnLoader: boolean;
  moveToActionHandler: (action: string) => Promise<void>;
};

type FiltersType = {
  id: string;
  label: string;
  type: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type OptionType = {
  label: string;
  value: string | number;
};

export default function KCTopFilterSection({ actionBtnLoader, moveToActionHandler }: TopFilterComponentTypes) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [goldRate, setGoldRate] = useState<string>('');
  const [kt, setKt] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [diaGrade, setDiaGrade] = useState<string>('');
  const [moveTo, setMoveTo] = useState<OptionType>({
    label: '',
    value: '',
  });

  const filters: FiltersType[] = [
    {
      id: 'goldRate',
      label: 'Gold Rate',
      type: 'text',
      value: goldRate,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => setGoldRate(e.target.value),
    },
    {
      id: 'kt',
      label: 'Kt',
      type: 'text',
      value: kt,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => setKt(e.target.value),
    },
    {
      id: 'color',
      label: 'Color',
      type: 'text',
      value: color,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value),
    },
    {
      id: 'diaGrade',
      label: 'Dia Grade',
      type: 'text',
      value: diaGrade,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => setDiaGrade(e.target.value),
    },
  ];
  const options = [
    { label: 'Quotation', value: 'quotation' },
    { label: 'Cart', value: 'cart' },
  ];

  const handleFilterReset = () => {
    setGoldRate('');
    setKt('');
    setColor('');
    setDiaGrade('');
  };

  return (
    <div className="d-flex flex-wrap justify-content-between align-middle ps-5 pe-3 py-2 gap-2" style={{ borderTop: '1px solid #EAE5DF', borderBottom: '1px solid #EAE5DF'}}>
      <div className="d-flex flex-wrap gap-2 align-middle">
        {filters.map((filter: FiltersType, index: number) => (
          <div key={`top-filter-${filter.id}-${index}`} className="d-flex gap-2 align-items-center ms-1">
            <label htmlFor={filter.id} className="fs-14 fw-medium">
              {filter.label}
            </label>
            <input
              name={filter.id}
              id={filter.id}
              type={filter.type}
              value={filter.value}
              onChange={filter.onchange}
              className={styles.kcFilterInputBox}
            />
          </div>
        ))}
        <Button type="button" title="reset" variant="outline-light" className={styles.kcFilterButton} onClick={handleFilterReset}>
          <IoRefresh size={16} />
        </Button>
      </div>
      <div className="d-flex flex-wrap gap-2 align-items-center" style={{ paddingRight: '20px'}}>
        <div className="d-flex gap-2 align-items-center ms-1">
          <label className="fs-14 fw-medium">Move To</label>
          <Select
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                height: '28px',
                width: '140px',
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'white',
                padding: '0px',
                margin: '0px',
                height: '28px',
                borderColor: state.isFocused ? '#A69476' : '#DADADA',
                borderRadius: '4px',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: state.isFocused ? '#A69476' : '#DADADA',
                },
                minHeight: '28px',
              }),
              indicatorsContainer: (baseStyles) => ({
                ...baseStyles,
                height: '28px',
                width: '20px',
                padding: '0px px',
                margin: '0px',
                marginRight: '8px',
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                padding: '0px',
                margin: '0px',
              }),
              input: (baseStyles) => ({
                ...baseStyles,
                padding: '0px 6px',
                width: '100%',
                margin: '0px',
                fontSize: '12px',
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                padding: '0px',
                margin: '0px',
                height: '16px',
                width: '16px',
                marginBottom: '4px',
                color: '#DADADA',
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                padding: '0px 6px',
                margin: '0px',
                fontSize: '12px',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                borderRadius: '4px',
                border: '1px solid #A69476',
                margin: '0px',
                overflow: 'hidden',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                padding: '2px 6px',
                margin: '0px',
                fontSize: '12px',
                backgroundColor: 'white',
                color: state.isFocused ? 'black' : 'black',
                '&:focus': {
                  backgroundColor: 'white',
                },
                '&:active': {
                  backgroundColor: 'white',
                  color: '#A69476',
                },
              }),
            }}
            options={options}
            value={moveTo}
            onChange={(val) => val && setMoveTo(val)}
          />
        </div>
        <Button
          className={styles.kcFilterActionButton}
          onClick={() => moveToActionHandler(moveTo.value as string)}
          disabled={actionBtnLoader}
        >
          {actionBtnLoader ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <p className="m-0 lh-sm">Go</p>
          )}
        </Button>
        <Button
          variant="outline-light"
          className={styles.kcLogoutButton}
          style={{ width: 'fit-content', padding: '0 12px' }}
          onClick={() => {
            dispatch(resetStore());
            localStorage.clear();
            router.push('/login');
          }}
        >
          Logout
          <FiLogOut size={14} />
        </Button>
      </div>
    </div>
  );
}
