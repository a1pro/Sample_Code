import React, {} from 'react';
import {} from 'react-native';



class MyListModel 
{

    constructor(id, name, leftLabel , itemCount, date, time, notes)
    {
        this.Id= id;
        this.Name= name;
        this.LeftLabel= leftLabel;
        this.ItemCount = itemCount;
        this.Date   = date;
        this.Time = time;
        this.Notes = notes;
        
    }
}


export default MyListModel;