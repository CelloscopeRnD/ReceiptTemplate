enum Receipts {
    ACCOUNT_BALANCE = 1,
    CASH_DEPOSIT,
    CASH_WITHDRAW,
    DPS_ACCOUNT,
    FIXED_DEPOSIT,
    FUND_TRANSFER,
    SAVINGS_ACCOUNT,
    ATM_DEBIT_CARD_REQUEST,
    ATM_DEBIT_CARD_DELIVERY,
    ATM_DEBIT_CARD_CANCEL,
    CHEQUE_BOOK_REQUISITION,
    CHEQUE_BOOK_DELIVERY,
    CHEQUE_STOP_PAYMENT_SINGLE,
    CHEQUE_STOP_PAYMENT_RANGE,
    CHEQUE_STOP_PAYMENT_SINGLE_CANCEL,
    CHEQUE_STOP_PAYMENT_RANGE_CANCEL,
    MINI_STATEMENT,
    REMITTANCE_REQUEST,
    REMITTANCE_DISBURSEMENT
};

const general_template = "template.html";
const ministatement_template = "miniStatementTemplate.html";

window.onload = function myfunction() {
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
            window.location.href = `http://${window.location.host}/templates/city/${ministatement_template}?${formSelect.value}`;
        } else {
            window.location.href = `http://${window.location.host}/templates/city/${general_template}?${formSelect.value}`;
        }
    }

}