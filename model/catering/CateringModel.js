import React, {} from 'react';


 class CateringModel {

    constructor(cateringcount, cateringsales, cash, check, credit,unpaid , graphShow)
    {

        this.CateringCount = cateringcount;
        this.CateringSales = cateringsales;
        this.Cash = cash;
        this.Credit = credit;
        this.Check = check;
        this.Unpaid = unpaid;
        this.GraphShow = graphShow;



        this.CASH_COLOR='#F44336';
        this.CREDIT_COLOR='#FF9800';
        this.CHECK_COLOR='#FFEB3B';
        this.UNPAID_COLOR='#4CAF50';
      
    }
   
 }

 export default CateringModel;