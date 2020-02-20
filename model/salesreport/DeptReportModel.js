import React, {} from 'react';


export default class DeptReportModel {
    constructor(cafe, freshsnacks, frozen, groceries,meat,produce ,saleperioddesc,totalsales, graphshow)
    {
        this.CAFE = cafe;
        this.FRESHSNACKS=freshsnacks;
        this.FROZEN= frozen;
        this.GROCERIES =groceries;
        this.MEAT=meat ;
        this.PRODUCE=produce;
        this.SALESPERIODDESC=saleperioddesc;
        this.TOTALSALES=totalsales;
       
        this.CASH_COLOR='#F44336';
        this.CREDIT_COLOR='#2196F3';
        this.GIFTCARD_COLOR='#FFEB3B';
        this.EDT_COLOR='#4CAF50';
        this.ACCOUNT_COLOR='#FF9800';
        this.ONLINE_COLOR='#9C27B0';
        this.GraphShow = graphshow;
    }
}