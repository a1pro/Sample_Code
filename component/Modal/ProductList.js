import React from "react";

import im1 from "../../../image/product.png";
import im2 from "../../../image/rewards.png";
import im3 from "../../../image/new.png";
import im4 from "../../../image/mylist.png";
import im5 from "../../../image/purchases.png";
import im6 from "../../../image/messages.png";
import im7 from "../../../image/cupons.png";
import im8 from "../../../image/specials.png";
import im9 from "../../../image/organic.png";

const ProductList = [
  { name: "Products", im: im1 ,page:'Products'},
  { name: "Organic", im: im9 ,page:'OrganicCategory'},
  { name: "New Arrivals", im: im3 , page:'NewArrivals'},
  { name: "Coupons", im: im7 ,page:'Coupons'},
  { name: "Specials", im: im8 , page:'Specials'},
  { name: "My Messages", im: im6 , page:'Notification'},
  { name: "My Lists", im: im4 , page:'MyList'},
  { name: "My Purchases", im: im5 , page:'MyPurchase'},
  { name: "My Rewards", im: im2 , page:'MyRewards'},
 
];

export default ProductList;
