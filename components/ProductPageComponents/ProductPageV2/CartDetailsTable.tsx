import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartDetailsTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Metal</th><th>Purity</th><th>Tone</th><th>Diamond</th><th>Size</th><th>Quantity</th><th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gold</td>
          <td>10k</td>
          <td>Yellow</td>
          <td>Sl</td>
          <td>4</td>
          <td>
            <div className="input-group my-3" style={{ width: 'fit-content', border: '1px solid #EBEBEB', borderRadius: '6px', color: 'black' }}>
              <button 
                className="btn d-flex justify-content-center align-items-center px-2" 
                style={{ backgroundColor: '#F5F5F5'}}
              >
                <FiMinus size={18} />
              </button>
              <div 
                className="form-control text-center border-0 text-black px-2" 
                style={{ width: '80px'}} 
              >
                0
              </div>
              <button 
                className="btn d-flex justify-content-center align-items-center px-2" 
                style={{ backgroundColor: '#F5F5F5'}}
              >
                <FiPlus size={18} />
              </button>
            </div>
          </td>
          <td>€211.22</td>
        </tr>
      </tbody>
    </table>
  )
}