import React, { } from 'react';

class ActiveCateringModel {

    constructor(name, phone, date, fullDate, time, cost, shapper, deliver, address, paymentamount, paymenttype, email, notes,
         paymentDate, cateringid ,cateringcount) {

        this.Name = name;
        this.Phone = phone;
        this.Date = date;
        this.Time = time;
        this.Cost = cost;
        this.Shapper = shapper;
        this.Deliver = deliver;
        this.Address = address;
        this.Paymenttype = paymenttype;
        this.Paymentamount = paymentamount;
        this.FullDate = fullDate;
        this.Email = email;
        this.Notes = notes;
        this.PaymentDate = paymentDate;
        this.Cateringid = cateringid;
        this.Cateringcount =cateringcount;



    }
}

export default ActiveCateringModel;