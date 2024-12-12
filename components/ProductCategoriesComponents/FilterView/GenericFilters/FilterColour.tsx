const FilterColour = ({ key, filter, handleFilterCheckFun, selectedFilters }: any) => {
  return (
    <div key={key} className="filter-color">
      {filter?.values?.map((colour: string, index: number) => (
        <div className="d-flex align-items-center py-3 colorContainer">
          <div
            key={index}
            className={`tabProductColor ${selectedFilters?.colour_attr_colour === colour ? 'borderActive' : 'borderInactive'}`}
            style={{ backgroundColor: colour }}
            onClick={handleFilterCheckFun}
          ></div>
          <span className="colorActive"> {colour} </span>
        </div>
      ))}
    </div>
  );
};

export default FilterColour;
