import { Placeholder } from 'react-bootstrap';

export default function FilterLoadingSkeleton() {
  return (
    <div className="h-100 " id="sidebar">
      <div style={{ padding: '0 12px 6px'}}>
        <Placeholder as="h6" animation="glow" style={{ margin: '10px 0 4px' }}>
          <Placeholder style={{ width: '100%' }} />
        </Placeholder>
      </div>
      <hr className="my-1" />
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <div style={{ padding: '0 12px'}}>
            <Placeholder as="h6" animation="glow" style={{ margin: '10px 0 0' }}>
              <Placeholder style={{ width: '100%' }} />
            </Placeholder>

            <Placeholder as="p" animation="glow" style={{ margin: 0}}>
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>

            <Placeholder as="p" animation="glow" style={{ margin: 0}}>
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>

            <Placeholder as="p" animation="glow" style={{ margin: 0}}>
              <Placeholder style={{ width: '70%', minHeight: '10px' }} />
            </Placeholder>
          </div>
          {index < 4 && <hr className="my-1" />}
        </div>
      ))}
    </div>
  );
}
