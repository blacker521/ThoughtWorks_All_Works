const datbase = require("./datbase");

module.exports = function main() {
    var input = arguments[0],
        infoInput = [],
        result = [],
        free = [],
        i = 0;

    // 格式化inputs
    while (i < input.length){
        let info = {};
        if(input[i].indexOf('-') >= 0){
            let arr = input[i].split('-');
            info["barcode"] = arr[0];
            info["num"] = arr[1];
            infoInput.push(info);
            i ++;
            continue;
        }else {
            info["barcode"] = input[i];
            info["num"] = input.lastIndexOf(input[i]) - input.indexOf(input[i]) + 1;
            infoInput.push(info);
            i += info["num"];
        }
    }

    var allItems = datbase.loadAllItems(),
        promotions = datbase.loadPromotions();
    for (i = 0; i < infoInput.length; i ++){
        let name, barcode, j;

        // 在 allItems 中找到与之对应的 item
        for(j = 0; j < allItems.length; j ++){
            if(allItems[j].barcode == infoInput[i].barcode){
                barcode = allItems[j].barcode;
                name = allItems[j].name;
                break;
            }
        }

        // 填写 free json
        if(promotions[0].barcodes.indexOf(barcode) >= 0 && infoInput[i].num >= 2){
            let info = {};
            info["name"] = name;
            info["num"] = 1;
            info["unit"] = allItems[j].unit;
            info["price"] = allItems[j].price;
            free.push(info);
        }

        // 填写 result json
        let info = {};
        info["name"] = name;
        info["unit"] = allItems[j].unit;
        info["price"] = allItems[j].price;
        info["num"] = infoInput[i].num;
        info["sumPrice"] = (allItems[j].price * infoInput[i].num);
        result.push(info);
    }

    // 计算小计
    for(let i = 0; i < result.length; i ++){
        for(let j = 0; j < free.length; j ++){
            if(result[i].name === free[j].name){
                result[i].sumPrice -= free[j].price;
            }
        }
    }

    // 拼接字符串
    var expectText = '***<没钱赚商店>购物清单***\n',
        sum = 0,
        freeSum = 0;
    for(let i = 0; i < result.length; i ++){
        expectText += "名称：" + result[i].name + "，数量：" + result[i].num + result[i].unit +
            "，单价：" + result[i].price.toFixed(2) + "(元)，小计：" +
            result[i].sumPrice.toFixed(2) + "(元)\n";
        sum += parseFloat(result[i].sumPrice);
    }
    expectText += '----------------------\n' +
                  '挥泪赠送商品：\n';
    for(let i = 0; i < free.length; i ++){
        expectText += "名称：" + free[i].name + "，数量：" + free[i].num + free[i].unit + "\n";
        freeSum += parseFloat(free[i].price);
    }
    expectText += '----------------------\n' +
                  '总计：' + sum.toFixed(2) + '(元)\n' +
                  '节省：' + freeSum.toFixed(2) + '(元)\n' +
                  '**********************';
    console.log(expectText);
};