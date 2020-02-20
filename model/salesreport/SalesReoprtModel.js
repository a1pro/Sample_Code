import React, {  } from "react";

export default class SalesReportModel {


    constructor(Cash, Credit, Giftcard, Edt, Account, Oline, TotalSales, GraphShow)
    {
        this.CASH = Cash;
        this.CREDIT = Credit;
        this.GIFTCARD = Giftcard;
        this.EDT = Edt;
        this.ACCOUNT = Account;
        this.ONLINE = Oline;
        this.TOTALSALES = TotalSales;
       
        this.CASH_COLOR='#F44336';
        this.CREDIT_COLOR='#FF9800';
        this.GIFTCARD_COLOR='#FFEB3B';
        this.EDT_COLOR='#4CAF50';
        this.ACCOUNT_COLOR='#2196F3';
        this.ONLINE_COLOR='#9C27B0';
        this.GraphShow= GraphShow;

    }

}