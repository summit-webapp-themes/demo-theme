import { useEffect, useState } from "react";
import useFetchCartItems from "../../hooks/CartPageHook/useFetchCartItems";
import { useSelector } from "react-redux";
import { SelectedFilterLangDataFromStore } from "../../store/slices/general_slices/selected-multilanguage-slice";
import ListViewCard from "./ListViewCard";

function CartListing() {
  const {
    cartListingItems,
    setCartListingItems,
    isLoading,
    errorMessage,
    cartCount
  } = useFetchCartItems()
  const data = {
    "party_name": "Smit B",
    "name": "SAL-QTN-2024-00444",
    "total_qty": 2,
    "transaction_date": "2024-09-09",
    "categories": [
      {
        "category": "Laptop",
        "parent_categories": [
          "Electronics",
          "Computer & Accessories",
          "Laptop"
        ],
        "orders": [
          {
            "brand_img": "/files/Hp-logo (2).png",
            "tax": 0,
            "details": [
              {
                "name": "Model No",
                "value": "ELECL003"
              },
              {
                "name": "Price",
                "value": 54000
              }
            ],
            "image_url": "/files/hp-omen.jpg",
            "total_qty": null,
            "qty": 1,
            "currency": "INR",
            "name": "8o12sv0iho",
            "in_stock_status": true,
            "item_code": "ELECL003",
            "currency_symbol": "₹",
            "weight_per_unit": 0,
            "total_weight": 0,
            "barcode": null,
            "brand": "HP",
            "party_name": null,
            "min_order_qty": 0,
            "item_name": "HP OMEN 10th Gen Intel Core i5 Processor 15.6\" (39.62cms) FHD Gaming Laptop (i5-10300H/8GB/512GB SSD/Windows 10/NVIDIA GTX 1650 4GB)",
            "amount": 54000,
            "product_url": "/product/laptop/hp-omen-10th-gen-intel-core-i5-processor-156-3962cms-fhd-gaming-laptop-i5-10300h-8gb-512gb-ssd-windows-10-nvidia-gtx-1650-4gb"
          }
        ]
      },
      {
        "category": "Coffee Maker",
        "parent_categories": [
          "Electronics",
          "Kitchen Appliances",
          "Coffee Maker"
        ],
        "orders": [
          {
            "brand_img": null,
            "tax": 0,
            "details": [
              {
                "name": "Model No",
                "value": "ELECL028"
              },
              {
                "name": "Price",
                "value": 4000
              }
            ],
            "image_url": "/files/Morphy-Richards-Europa-Drip1 (1).jpg",
            "total_qty": null,
            "qty": 1,
            "currency": "INR",
            "name": "8o12apld11",
            "in_stock_status": false,
            "item_code": "ELECL028",
            "currency_symbol": "₹",
            "weight_per_unit": 0,
            "total_weight": 0,
            "barcode": null,
            "brand": "Morphy Richards",
            "party_name": null,
            "min_order_qty": 0,
            "item_name": "Morphy Richards Europa Drip 600-Watt 6-cup Drip Coffee Maker Item",
            "amount": 4000,
            "product_url": "/product/coffee-maker/morphy-richards-europa-drip-600-watt-6-cup-drip-coffee-maker"
          }
        ]
      }
    ],
    "grand_total_including_tax": 58000,
    "grand_total_excluding_tax": 58000
  }
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <h2>Shopping Cart</h2>
        <button className="btn btn-link text-decoration-none">clear cart</button>
      </div>
      <ListViewCard data={data} />
    </div>
  )
}

export default CartListing;
