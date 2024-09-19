const CreateCatalog = ({ handleChange, handleSubmitCatalogName, selectedMultiLangData }: any) => {
  return (
    <>
      <div className="offset-lg-2 col-lg-8 text-center">
        <div className="row mx-auto">
          <div className=" text-center py-3">
            <h4 className="  my-0">
              <b>{selectedMultiLangData?.create_catalog}</b>
            </h4>
          </div>
          <div className="col-lg-8 col-12 px-0  d-flex justify-content-center">
            <input
              type="text"
              className="form-control bg-warning bg-opacity-10 px-3"
              id="catalog-name"
              onChange={handleChange}
              placeholder="Enter Catalog Name"
            />
          </div>
          <div className="col-lg-4 col-12 mt-lg-0 mt-3 text-lg-end p-0 ">
            <button type="submit" className="btn btn-primary" onClick={handleSubmitCatalogName}>
              {selectedMultiLangData?.create_catalog}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCatalog;
