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
    value[0] === 0 ? "" : value[0].toString(),
    value[1] === 0 ? "" : value[1].toString(),
  ]);
  
  const [isInternalUpdate, setIsInternalUpdate] = useState(false);
  
  const min = parseFloat(localValues[0]) || 0;
  const max = parseFloat(localValues[1]) || 0;
  
  
  if (!isInternalUpdate && (value[0] !== min || value[1] !== max)) {
    setLocalValues([
      value[0] === 0 ? "" : value[0].toString(),
      value[1] === 0 ? "" : value[1].toString(),
    ]);
  }

  const isCurrencyUnit = unit && ["₹", "$", "€", "£"].includes(unit);

  const handleChange = (index: 0 | 1, val: string) => {
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {
      setIsInternalUpdate(true);
      const updated = [...localValues] as [string, string];
      updated[index] = val;
      setLocalValues(updated);
      const newValues = [...value] as [number, number];
      newValues[index] = val === "" ? 0 : parseFloat(val) || 0;
      setValue(newValues);
      setTimeout(() => setIsInternalUpdate(false), 0);
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
                onChange={(e) =>
                  handleChange(0, e.target.value.replace(/[^0-9.]/g, ""))
                }
                placeholder="Min"
              />
              {!isCurrencyUnit && unit && (
                <span className={styles.unitSuffix}>{unit}</span>
              )}
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
                onChange={(e) =>
                  handleChange(1, e.target.value.replace(/[^0-9.]/g, ""))
                }
                placeholder="Max"
              />
              {!isCurrencyUnit && unit && (
                <span className={styles.unitSuffix}>{unit}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default InputRange;
