import React from 'react';
import { FaSort } from 'react-icons/fa6';

function FloatingSortbyBtn({ handleShow }: any) {
  return (
    <button className="btn btn-primary rounded-0 w-100 text-uppercase" onClick={handleShow}>
      <div>
        <span className="px-2">
          <FaSort />
        </span>
        sort by
      </div>
    </button>
  );
}

export default FloatingSortbyBtn;
