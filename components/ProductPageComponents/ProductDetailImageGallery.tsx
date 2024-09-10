import React from 'react'
import ReactImageGallery from 'react-image-gallery'

const ProductDetailImageGallery = ({data}:any) => {
    const images = data?.map((img: any) => ({
        original: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
        thumbnail: `${process.env.NEXT_PUBLIC_API_URL}/${img}`
      }));
  return (
    <>
      <ReactImageGallery items={images} thumbnailPosition="left" showNav={false} />
    </>
  )
}

export default ProductDetailImageGallery