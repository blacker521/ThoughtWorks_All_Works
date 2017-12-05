module.exports.stopSpend_All = function stopSpend_All(Spend_Wait,s){
    var Spend_Wait,s;
    if(s > 0)
    {
        Spend_Wait = 0.25*s;
    }
    return Spend_Wait;
};
module.exports.Spend_All = function Spend_All(Spend_Wait,l){
    var l;
    var Spend_All;
    if(l <= 2){
        Spend_All = Math.round(6+Spend_Wait);
        return Spend_All;
    }
    if((l > 2)&&(l <= 8)){
       Spend_All = Math.round(6+(l-2)*0.8+Spend_Wait);
       return Spend_All;
    }
    if(l > 8){
        Spend_All = Math.round(6+6*0.8+1.5*0.8 *(l - 8)+Spend_Wait);
        return Spend_All;
    }

}
