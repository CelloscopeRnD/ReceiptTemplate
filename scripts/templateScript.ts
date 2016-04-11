/// <reference path="receipt-helper.ts" />
/// <reference path="city/city-receipt-helper.ts" />
/// <reference path="agrani/agrani-receipt-helper.ts" />
/// <reference path="banks.ts" />
/// <reference path="bank-constants.ts" />


var global,
    receipt = receipt || {};
global = window;

global.onload = function () {
    let url = global.location.search;
    url = url.replace("?", ''); // remove the ?
    if (!url) {
        url = receipt;
        global.data = JSON.parse(global.stringData);
    } else {
        ReceiptHelper.setData(parseInt(url));
    }

    ReceiptHelper.addStyleSheet(`../../style_sheets/${BankConstants.sub_folder}/styles.css`); ReceiptHelper.addStyleSheet(`file:///android_asset/${BankConstants.sub_folder}/styles.css`);
    let receiptHelper: ReceiptHelper;
    if (BankConstants.bank == Banks.City) {
        receiptHelper = new CityReceiptHelper();
    } else {
        receiptHelper = new AgraniReceiptHelper();
    }
    receiptHelper.replaceToken(parseInt(url));
}
