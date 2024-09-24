import { Placeholder } from 'react-bootstrap';

const ListCardLoadingSkeleton = () => {
  return (
    <>
      <div className="border">
        <div className="row ">
          <div className="col-12 col-sm-4 col-lg-2 col-xl-2 p-4 text-center">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '100%', height: 150 }} />
            </Placeholder>
          </div>
          <div className="col-12 col-sm-8 col-lg-10 col-xl-10 p-4">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '100%', height: 150 }} />
            </Placeholder>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCardLoadingSkeleton;
