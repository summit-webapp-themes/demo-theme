import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

function PeoductPageQuatityInput() {
  return (
    <div className="border rounded">
      <span>
        <FaMinus />
      </span>
      <span>1</span>
      <span>
        <FaPlus />
      </span>
    </div>
  );
}

export default PeoductPageQuatityInput;
