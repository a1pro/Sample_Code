import React from "react";

import im1 from "../../../image/customer.png";
import im2 from "../../../image/negative.png";
import im3 from "../../../image/sellers.png";
import im4 from "../../../image/vendors.png";
import im5 from "../../../image/stockUpdate.png";
import im6 from "../../../image/storepickups.png";
import im7 from "../../../image/broadcast.png";
import im8 from "../../../image/caterings.png";
import im9 from "../../../image/report.png";


const ManagerList = [
  { name: "Customer View", im: im1, page:'CustomerView' },
  { name: "Negative Stocks", im: im2 , page:'Negative' },
  { name: "Top Movers", im: im3 , page:'TopMovers' },
  { name: "Food Logs", im: im4 , page:'Food' },
  { name: "Stock Updates", im: im5 , page:'Zello' },
  { name: "Store Pickups", im: im6, page:'StorePickup'  },
  { name: "Caterings", im: im8, page:'Catering'  },
];

export default ManagerList;
