'use client';
import React, { useState } from 'react';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

type InputRangeProps = {
  title?: string;
  unit?: string;
  value: [number, number];
  setValue: React.Dispatch<React.SetStateAction<[number, number]>>;
};

function InputRange({ title, unit, value, setValue }: InputRangeProps) {
  const [localValues, setLocalValues] = useState<[string, string]>([
    value[0] ? value[0].toString() : '',
    value[1] ? value[1].toString() : '',
  ]);

  const isCurrencyUnit = unit && ['₹', '$', '€', '£'].includes(unit);

  const handleChange = (index: 0 | 1, val: string) => {
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {
      const updated = [...localValues] as [string, string];
      updated[index] = val;
      setLocalValues(updated);
    }
  };

  const handleKeyDown = (index: 0 | 1, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const parsed = localValues.map((v) => parseFloat(v)) as [number, number];
      if (!isNaN(parsed[0]) && !isNaN(parsed[1])) {
        setValue(parsed);
        const stateName = title === 'Price Range' ? 'priceRange' : title === 'Diamond Cts' ? 'diamondCtsRange' : 'grossWtRange';
        console.log(`${stateName}:`, parsed);
      }
    }
  };

  return (
    <div>
      <div className={styles.slideWrapper}>
        {title && <div className={styles.slideTitle}>{title}</div>}

        <div className={styles.sliderContainer}>
          <div className={styles.rangeDisplay}>
            {/* Input 0 */}
            <div className={styles.inputWrapper}>
              {isCurrencyUnit && <span className={styles.unitPrefix}>{unit}</span>}
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                className={styles.rangeBox}
                value={localValues[0]}
                onChange={(e) => handleChange(0, e.target.value.replace(/[^0-9.]/g, ''))}
                onKeyDown={(e) => handleKeyDown(0, e)}
                placeholder="Min"
              />
              {!isCurrencyUnit && unit && <span className={styles.unitSuffix}>{unit}</span>}
            </div>

            <span className={styles.toText}>to</span>

            {/* Input 1 */}
            <div className={styles.inputWrapper}>
              {isCurrencyUnit && <span className={styles.unitPrefix}>{unit}</span>}
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                className={styles.rangeBox}
                value={localValues[1]}
                onChange={(e) => handleChange(1, e.target.value.replace(/[^0-9.]/g, ''))}
                onKeyDown={(e) => handleKeyDown(1, e)}
                placeholder="Max"
              />
              {!isCurrencyUnit && unit && <span className={styles.unitSuffix}>{unit}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputRange;
