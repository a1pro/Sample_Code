import React, {} from 'react';


export default class NewArrival
{
    constructor(itemnum, itemname,quantity, pickup,price,  cost, imagepath , location, addlist)
    {
        this.Itemnum = itemnum;
        this.Itemname = itemname;
        this.Quantity= quantity;
        this.Pickup = pickup;
        this.Price =price;
        this.Cost = cost;
        this.ImagePath= imagepath;
        this.Location= location;
        this.ADDLIST= addlist;
    }
}
