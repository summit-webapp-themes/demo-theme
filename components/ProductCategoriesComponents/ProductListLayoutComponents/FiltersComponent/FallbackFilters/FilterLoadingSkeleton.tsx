import { Placeholder } from 'react-bootstrap';

export default function FilterLoadingSkeleton() {
  return (
    <div className="h-100 " id="sidebar">
      <div className="px-3 pb-2">
        <Placeholder as="h4" animation="glow" style={{ marginTop: '16px' }}>
          <Placeholder style={{ width: '100%' }} />
        </Placeholder>
      </div>
      <hr className="my-1" />
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <div className="px-3">
            <Placeholder as="h6" animation="glow" style={{ marginTop: '15px' }}>
              <Placeholder style={{ width: '100%' }} />
            </Placeholder>

            <Placeholder as="div" animation="glow">
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>

            <Placeholder as="div" animation="glow">
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>

            <Placeholder as="div" animation="glow">
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>
          </div>
          {index < 4 && <hr className="my-1" />}
        </div>
      ))}
    </div>
  );
}
