import Image from 'next/image'
import cartStyles from '../../styles/components/cartlist.module.scss'
import { CONSTANTS } from '../../services/config/app-config'
function ListViewCard({ data }: any) {
    console.log(data, 'data')
    const imageLoader = ({ src, width, quality }: any) => {
        return `${CONSTANTS?.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className='py-3'>
            {data?.categories?.length > 0 && data?.categories?.map((category: any, index: number) => (
                <div className="border p-4">

                    <h3>{category?.category}</h3>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={`row ${cartStyles.cart_header}`}>
                                <div className="col-2 m-0"> </div>
                                <div className="col-7"><h6>ITEM WITH DESCRIPTION</h6></div>
                                <div className="col-1"><h6>PRICE</h6></div>
                                <div className="col-1"><h6>QTY</h6></div>
                                <div className="col-1"><h6>TOTAL</h6></div>
                            </div>
                        </div>
                        {category?.orders?.length > 0 && category?.orders?.map((item: any) => (
                            <div className='row mt-3 ms-2'>
                                <div className="col-2">
                                    <Image src={''} alt='product image' width={100} height={100} />
                                </div>
                                <div className="col-7">{item?.item_name} <br /><b>item code : {item?.item_code}</b>
                                    <div>
                                        <button className='btn btn-link text-decoration-none p-0'>Delete</button></div>
                                </div>
                                <div className="col-1">{item?.currency_symbol}{item?.amount}</div>
                                <div className="col-1"><h6>{item?.qty}</h6></div>
                                <div className="col-1">{item?.currency_symbol}{item?.amount}</div>
                            </div>
                        ))}
                        <div className='col-12'>

                        </div>
                    </div>
                </div>
            ))}
            <div className='row'>
                <div className='col-lg-6'></div>
                <div className='col-lg-6 '>
                    <div className='row'></div>
                </div>
            </div>
        </div>
    )
}
export default ListViewCard