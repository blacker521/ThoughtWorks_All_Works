const datbase = require("./datbase");


module.exports.Inputs = function Inputs(inputs,All_input){
    var i= 0;
    while (i < inputs.length){
        var temp = {};
        if(inputs[i].indexOf('-') >= 0){
            var Import=inputs[i].split('-');//分割
            temp["barcode"] = Import[0];
            temp["num"] = Import[1];
            All_input.push(temp);
            i ++;
            continue;
        }else {
            temp["barcode"] = inputs[i];
            temp["num"] = inputs.lastIndexOf(inputs[i]) - inputs.indexOf(inputs[i]) + 1;
            All_input.push(temp);
            i += temp["num"];
        }
    }
    return All_input;
};


module.exports.forFree = function forFree(allItems,Promotions,All_input,result,free){
    var ALL_Item = datbase.loadAllItems();
    var Promotions = datbase.loadPromotions();
      for (var i = 0; i < All_input.length; i ++) {
          var name, barcode, j;
          for (var j = 0; j < ALL_Item.length; j++) {
              if (ALL_Item[j].barcode == All_input[i].barcode) {
                  barcode = ALL_Item[j].barcode;
                  name = ALL_Item[j].name;
                  break;
              }
          }
          if (Promotions[0].barcodes.indexOf(barcode) >= 0 && All_input[i].num >= 2) {
              var temp = {};
              temp["name"] = name;
              temp["num"] = 1;
              temp["unit"] = ALL_Item[j].unit;
              temp["price"] = ALL_Item[j].price;
              free.push(temp);
          }
          var temp = {};
          temp["name"] = name;
          temp["unit"] = allItems[j].unit;
          temp["price"] = allItems[j].price;
          temp["num"] = All_input[i].num;
          temp["TotalPrice"] = (allItems[j].price * All_input[i].num);
          result.push(temp);
      }
    for(var i = 0; i < result.length; i ++){
        for(var j = 0; j < free.length; j ++){
            if(result[i].name === free[j].name){
                result[i].TotalPrice -= free[j].price;
            }
        }
    }
return free;
};


module.exports.print = function print(result,free){
   var expectText = '***<没钱赚商店>购物清单***\n',
        sum = 0,
        freeSum = 0;
   for(var i = 0; i < result.length; i ++){
        expectText += "名称：" + result[i].name + "，数量：" + result[i].num + result[i].unit +
            "，单价：" + result[i].price.toFixed(2) + "(元)，小计：" +
            result[i].TotalPrice.toFixed(2) + "(元)\n";
        sum += parseFloat(result[i].TotalPrice);
    }
    expectText += '----------------------\n' +
                  '挥泪赠送商品：\n';
    for(var i = 0; i < free.length; i ++){
        expectText += "名称：" + free[i].name + "，数量：" + free[i].num + free[i].unit + "\n";
        freeSum += parseFloat(free[i].price);
    }
    expectText += '----------------------\n' +
                  '总计：' + sum.toFixed(2) + '(元)\n' +
                  '节省：' + freeSum.toFixed(2) + '(元)\n' +
                  '**********************';
    console.log(expectText);
    // return expectText;
};

