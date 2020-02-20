
import React,{} from 'react';


class CateringListItemModel {


    constructor(id, select, ItemName, qty, Notes, edittable)
    {
        this.Id= id;
        this.Select= select;
        this.itemName = ItemName;
        this.quantity = qty;
        this.notes = Notes;
        this.Edittable = edittable;

    }
}


   



export default CateringListItemModel;