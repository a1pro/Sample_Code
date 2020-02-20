import React, {} from 'react';

class ListDetailModel{

    
    constructor(itemnum , itemname,quantity,pickup,location, imagepath, instock, deleteshow, check, listid )
    {

        this.Itemnum = itemnum;
        this.Itemname = itemname;
        this.Quantity = quantity;
        this.Pickup = pickup;
        this.Location = location;
        this.Imagepath = imagepath;
        this.Instock = instock;
        this.ShowDelete= deleteshow;
        this.Check = check;
       this.ListitemId=listid;

    }
}

export default ListDetailModel;
