import OrderCardDetails from '../MyOrder/OrderCardDetails';

function OrderDeatil({ orderData, selectedMultiLangData }: any) {
  return (
    <>
      {orderData?.length > 0 &&
        orderData !== null &&
        orderData?.map((data: any) => (
          <div className="" key={data?.name}>
            <div className="col-md-6 my-4">
              <div className="text-uppercase">
                <h4 className="p-0 m-0">
                  <b>{selectedMultiLangData?.order_details}</b>
                </h4>
              </div>
            </div>
            <div className=" row  pb-2">
              <div className="col-12">
                <span>
                  {selectedMultiLangData?.orders} # {data?.name}
                </span>
              </div>
            </div>

            <div id="printableArea" className="row ">
              <div className="col-lg-12">
                <div className=" mb-3 card">
                  <div className="card-body">
                    <div className="row">
                      {data?.addresses?.map((addr: any, index: any) => (
                        <div className="mb-0 mb-sm-0 col-md-4" key={index}>
                          <div>
                            <h5 className="mb-1">
                              <b>{addr?.name}</b>
                            </h5>
                            {addr?.values &&
                              addr?.values.map((addrValue: any, i: any) => (
                                <div className="" key={i}>
                                  <p className="my-0 py-0 ">{addrValue?.address_title}</p>
                                  <p className="my-0 py-0 line-height">{addrValue?.address_1}</p>
                                  <p className="mb-0 my-0 py-0 line-height">{addrValue?.postal_code}</p>
                                  <p className="mb-0">
                                    {addrValue?.city}, {addrValue?.state}
                                  </p>
                                  <p className="mb-0">{addrValue?.country}</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}

                      {/* <div className="col-md-2">
                        {data.shipping_method.transporter === null ||
                        data?.shipping_method?.door_delivery === null ||
                        data?.shipping_method?.godown_delivery === null ||
                        data?.shipping_method?.location === null ||
                        data?.shipping_method?.remarks === null ||
                        data?.shipping_method?.transport_charges === null ? (
                          ''
                        ) : (
                          <h5 className=" mb-1">{selectedMultiLangData?.shipping_method}</h5>
                        )}

                        <div>
                          {data.shipping_method.transporter === null ? (
                            ' '
                          ) : (
                            <p className="mb-0">
                              {selectedMultiLangData?.transporter} : {data.shipping_method.transporter}
                            </p>
                          )}

                          {data?.shipping_method?.door_delivery === 0 && data?.shipping_method?.godown_delivery === 0 ? (
                            <p className="mb-0">
                              <b>{selectedMultiLangData?.door_delivery_yes}</b>{' '}
                            </p>
                          ) : (
                            ''
                          )}
                          {data?.shipping_method?.door_delivery === 0 && data?.shipping_method?.godown_delivery !== 0 ? (
                            <>
                              <p className="mb-0"> {selectedMultiLangData?.godown_delivery}</p>
                              {data?.shipping_method.location === null ? (
                                ''
                              ) : (
                                <p className="mb-0">
                                  {selectedMultiLangData?.location} : {data?.shipping_method?.location}
                                </p>
                              )}
                            </>
                          ) : (
                            ''
                          )}

                          {data?.shipping_method?.remarks === null ? (
                            ''
                          ) : (
                            <p className="mb-0">
                              {selectedMultiLangData?.remark} : {data?.shipping_method?.remarks}
                            </p>
                          )}
                        </div>
                      </div> */}

                      <div className="col-md-4 ">
                        <h5 className=" mb-1">
                          {' '}
                          <b>{selectedMultiLangData?.order_summary}</b>
                        </h5>
                        <div className="mb-1 row">
                          <div className="col-6">
                            <p className="mb-0 ">{selectedMultiLangData?.sub_total_excl_tax}</p>
                          </div>
                          <div className="text-end col-6">
                            <p className="mb-0 ">
                              {data?.currency_symbol} {data?.subtotal_exclude_tax}
                            </p>
                          </div>
                        </div>
                        <div className="mb-1 row">
                          <div className="col-6">
                            <p className="mb-0 "> {selectedMultiLangData?.tax}</p>
                          </div>
                          <div className="text-end col-6">
                            <p className="mb-0  ">
                              {data?.currency_symbol} {data?.tax}
                            </p>
                          </div>
                        </div>
                        <div className="mb-0 row">
                          {data?.coupon_code !== null ? (
                            <>
                              <div className="col-6">
                                <p className="mb-0 ">{selectedMultiLangData?.coupon_code}</p>
                              </div>
                              <div className="text-end col-6">
                                <p className="mb-0 ">
                                  <span>{data?.coupon_code}</span>
                                </p>
                              </div>
                            </>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="mb-0 row">
                          {data?.coupon_amount !== 0 ? (
                            <>
                              <div className="col-6">
                                <p className="mb-0 ">{selectedMultiLangData?.coupon_amount}</p>
                              </div>
                              <div className="text-end col-6">
                                <p className="mb-0 ">
                                  <i className="fa fa-inr pe-1" aria-hidden="true"></i>
                                  <span>{data?.coupon_amount}</span>
                                </p>
                              </div>
                            </>
                          ) : (
                            ''
                          )}
                        </div>

                        <div className="mb-1 row">
                          <div className="col-6">
                            <p className="mb-0 ">{selectedMultiLangData?.sub_total_incl_tax}</p>
                          </div>
                          <div className="text-end col-6">
                            <p className="mb-0  ">
                              {data?.currency_symbol} {data?.subtotal_include_tax}
                            </p>
                          </div>
                        </div>
                        <div className="mb-1 row">
                          <div className="col-6">
                            <p className="mb-0 bold ">
                              <b>{selectedMultiLangData?.order_total}</b>
                            </p>
                          </div>
                          <div className="text-end col-6">
                            <p className="mb-0 bold  ">
                              {data?.currency_symbol} {data?.total}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0 bold ">
                              {' '}
                              <b>{selectedMultiLangData?.total}</b>
                            </p>
                          </div>
                          <div className="text-end col-6">
                            <p className="mb-0 bold  ">
                              {data?.currency_symbol} {data?.total}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order_card cart_table mb-0 card">
                  <OrderCardDetails data={data} selectedMultiLangData={selectedMultiLangData} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default OrderDeatil;
