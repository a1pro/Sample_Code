import React, {} from 'react';



class ProductReminderModel{
    constructor(imagepath,itemname,itemnum, location,pickup ,quantity, reminderId)
    {
       this.Imagepath=  imagepath;
       this.Itemname= itemname;
       this.Itemnum = itemnum;
       this.Location = location;
       this.Pickup = pickup;
       this.Quantity = quantity;
       this.reminderId = reminderId;
    }

}


export default ProductReminderModel;