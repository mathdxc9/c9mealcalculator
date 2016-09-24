var diner = {
    Name: "Default",
    Dishes: [],
    Total: 0.00,
    Tax: 0.00,
    Tax: 0.00,
    Calc: function (){
        var sum=0;
        for(var a=0;a<this.Dishes.length;a++)
        {
            sum=sum+this.Dishes[a][1];
        }
        this.Total = sum;
        this.Tax = Math.ceil(this.Total*7.00)/100;    
        this.Tip = Math.ceil(this.Total*15.00)/100;
    }
};

var bill = {
    Diners: [],
    BillTotal: 0.00,
    BillTip: 0.00,

    Breakdown: "Details",
    Calc: function () {
        var btsum=0;
        for(var bta=0;bta<this.Diners.length;bta++)
        {
            btsum=btsum+this.Diners[bta].Total+this.Diners[bta].Tax+this.Diners[bta].Tip;
        }
        this.BillTotal = Math.ceil(btsum*100)/100;
        var btpsum=0;
        for(var btpa=0;btpa<this.Diners.length;btpa++)
        {
            btpsum=btpsum+this.Diners[btpa].Tip;
        }
        this.BillTip = Math.ceil(btpsum*100)/100;
        var message="";
        for(var btda=0;btda<this.Diners.length;btda++)
        {
            message+=this.Diners[btda].Name+"\n Total:"+this.Diners[btda].Total+" Tax:"+this.Diners[btda].Tax+" Tip:"+this.Diners[btda].Tip+"\n";
        }
        this.Breakdown=message;
    }
};

var diner1 = Object.create(diner);
diner1.Name = "Who (On First)";
diner1.Dishes = [["A 6-Dollar Hamburger",6.01],["Penny Thoughts",0.01]];

var diner2 = Object.create(diner);
diner2.Name = "What (On Second)";
diner2.Dishes = [["A Buck Meat",1.00],["High-Priced Thoughts",0.25]];


var diner3 = Object.create(diner);
diner3.Name = "I dunno";
diner3.Dishes = [["A Triple Washington SALMONument",3.00],["Expensive Thoughts",0.50]];

var endbill = Object.create(bill);
diner1.Calc();
diner2.Calc();
diner3.Calc();
endbill.Diners = [diner1,diner2,diner3];
endbill.Calc();

console.log("Total: "+endbill.BillTotal);
console.log("Total Tip: "+endbill.BillTip);
console.log(endbill.Breakdown);