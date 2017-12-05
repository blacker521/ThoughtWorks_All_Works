const main = require('../main/main');
describe('taxi Spend_All', function () {
    it("计算停车的花费",function(){
        var result = 1,s=4;
        var Spend_Wait = main.stopSpend_All(result,s);
        expect(Spend_Wait).toEqual(result);
    });

    
    it("计算花费",function(){
         var l = 1,Spend_Wait = 1,result = 7;
         var Spend_All = main.Spend_All(Spend_Wait,l);
        expect(Spend_All).toEqual(result);
    });

    
    it("计算花费",function(){
        var l = 5,Spend_Wait = 1,result = 9;
        var Spend_All = main.Spend_All(Spend_Wait,l);
        expect(Spend_All).toEqual(result);
    });

    
    it("计算花费",function(){
        var l = 10,Spend_Wait = 1,result = 14;
        var Spend_All = main.Spend_All(Spend_Wait,l);
        expect(Spend_All).toEqual(result);
    });
});
