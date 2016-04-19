/// <reference path="bank-constants.ts" />
/// <reference path="receipts.ts" />

//tsc -out index.js index.js

window.onload = function myfunction() {
    document.getElementsByTagName("h1")[0].innerHTML = BankConstants.bank_name;
    var formSelect = <HTMLSelectElement>document.getElementById('receiptSelectForm');
    Object.keys(Receipts)
        .slice(0, Object.keys(Receipts).length / 2)
        .forEach(function (prop) {
            var option = document.createElement('option');
            option.value = prop;
            option.innerHTML = Receipts[prop];
            formSelect.appendChild(option);
        });
    var submitButton = <HTMLButtonElement>document.querySelectorAll("button[type='submit']")[0];
    submitButton.onclick = function () {
        if (<any>formSelect.value == Receipts.MINI_STATEMENT) {
            window.location.href = `http://${window.location.host}/templates/${BankConstants.sub_folder}/${BankConstants.ministatement_template}?${formSelect.value}`;
        } else {
            window.location.href = `http://${window.location.host}/templates/${BankConstants.sub_folder}/${BankConstants.general_template}?${formSelect.value}`;
        }
    }
}