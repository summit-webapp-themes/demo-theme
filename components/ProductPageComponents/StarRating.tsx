import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarPurple500 } from 'react-icons/md';
type Props = {};

const StarRating = (props: any) => {
  const { rating }: any = props;
  const fullStars: any = (rating * 10) / 2;
  const emptyStars: any = 5 - fullStars;
  const renderStar: any = (type: string) => {
    if (type === 'full') {
      return <MdOutlineStar style={{ color: '#FFBC0B', fontSize: '1.8rem' }} />;
    } else if (type === 'half') {
      return <MdOutlineStarHalf style={{ color: '#FFBC0B', fontSize: '1.8rem' }} />;
    } else {
      return <MdOutlineStarPurple500 style={{ color: '#CCCCCC', fontSize: '1.8rem' }} />;
    }
  };
  return (
    <div className="star-rating">
      {rating !== null && (
        <>
          {fullStars % 1 === 0 ? (
            <>
              {[...Array(fullStars)].map((e: any, i: any) => (
                <span key={i} className="me-1">
                  {renderStar('full')}
                </span>
              ))}
              {[...Array(emptyStars)].map((e: any, i: any) => (
                <span key={i} className="me-1">
                  {renderStar('empty')}
                </span>
              ))}
            </>
          ) : (
            <>
              {[...Array(Math.floor(fullStars))].map((e: any, i: any) => (
                <span key={i} className="me-1">
                  {renderStar('full')}
                </span>
              ))}
              {<span className="me-1">{renderStar('half')}</span>}
              {[...Array(Math.floor(emptyStars))].map((e: any, i: any) => (
                <span key={i} className="me-1 ">
                  {renderStar('empty')}
                </span>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StarRating;
