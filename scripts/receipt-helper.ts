/// <reference path="receipt-type.ts" />
/// <reference path="mockup-data.ts" />
/// <reference path="label-text.ts" />
/// <reference path="bank-constants.ts" />

class ReceiptHelper {
    setData(receipt) {
        switch (receipt) {
            case ReceiptTypeModule.Receipts.ACCOUNT_BALANCE:
                global.data = MockupData.accountBalance;
                break;
            case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_CANCEL:
                global.data = MockupData.atmDebitCardCancel;
                break;
            case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_DELIVERY:
                global.data = MockupData.atmDebitCardDelivery;
                break;
            case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_REQUEST:
                global.data = MockupData.atmDebitCardRequest;
                break;
            case ReceiptTypeModule.Receipts.CASH_DEPOSIT:
                global.data = MockupData.cashDeposit;
                break;
            case ReceiptTypeModule.Receipts.CASH_WITHDRAW:
                global.data = MockupData.cashWithdraw;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_BOOK_DELIVERY:
                global.data = MockupData.chequeBookDelivery;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_BOOK_REQUISITION:
                global.data = MockupData.chequeBookRequisition;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_RANGE:
                global.data = MockupData.chequeStopPaymentRange;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
                global.data = MockupData.chequeStopPaymentRangeCancel;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
                global.data = MockupData.chequeStopPaymentSingle;
                break;
            case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
                global.data = MockupData.chequeStopPaymentSingleCancel;
                break;
            case ReceiptTypeModule.Receipts.DPS_ACCOUNT:
                global.data = MockupData.dpsAccount;
                break;
            case ReceiptTypeModule.Receipts.FIXED_DEPOSIT:
                global.data = MockupData.fixedDeposit;
                break;
            case ReceiptTypeModule.Receipts.FUND_TRANSFER:
                global.data = MockupData.fundTransfer;
                break;
            case ReceiptTypeModule.Receipts.MINI_STATEMENT:
                global.data = MockupData.miniStatement;
                break;
            case ReceiptTypeModule.Receipts.REMITTANCE_DISBURSEMENT:
                global.data = MockupData.remittanceDisbursement;
                break;
            case ReceiptTypeModule.Receipts.REMITTANCE_REQUEST:
                global.data = MockupData.remittanceRequest;
                break;
            case ReceiptTypeModule.Receipts.ACCOUNT_OPENING:
                global.data = MockupData.accountOpeningRequest;
                break;
        }
    }

    replaceToken(receipt) { }
    setAccountBalance() { }
    setCashDeposit() { }
    setCashWithdraw() { }
    setDPSAccount() { }
    setFixedDeposit() { }
    setFundTransfer() { }
    setAccountOpening() { }

    setATMDebitCardRequest() { }
    setATMDebitCardDelivery() { }
    setATMDebitCardCancel() { }
    setChequeBookRequisition() { }
    setChequeBookDelivery() { }
    setChequeStopPaymentSingle() { }
    setChequeStopPaymentRange() { }
    setChequeStopPaymentSingleCancel() { }
    setChequeStopPaymentRangeCancel() { }

    setMiniStatement() { }
    setRemittanceRequest() { }
    setRemittanceDisbursement() { }

    replaceTableData(tableData) { }
    static doRowSpan(tableClassName: string, rowIndex: number, cellIndex: number, rowSpan: number = 2) {
        var table = <HTMLTableElement>document.getElementsByClassName(tableClassName)[0];
        let row = <HTMLTableRowElement>table.rows[rowIndex];
        let cell = <HTMLTableCellElement>row.cells[cellIndex];
        cell.rowSpan = 2;

        let nextrow = <HTMLTableRowElement>table.rows[++rowIndex];
        let bottomcell = <HTMLTableCellElement>nextrow.cells[cellIndex];
        bottomcell.remove();

    }
    static addImage(elementId, url, alternateUrl) {
        var elements = document.getElementsByClassName(elementId);
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                var imageElement = <HTMLImageElement>elements[i];
                if (imageElement.src != null) {
                    imageElement.src = url;
                    imageElement.onerror = function (ele) {
                        (<HTMLImageElement>ele.srcElement).src = alternateUrl;
                    }
                }
            }
        }
    }
    static addClassText(elementId, innerHtml) {
        var elements = document.getElementsByClassName(elementId);

        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = innerHtml;
            }
        }
    }
    static hideElementByClassName(elementId) {
        var elements = document.getElementsByClassName(elementId);

        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                (<any>elements[i]).style.display = 'none';
            }
        }
    }
    static addText(elementId, innerHtml) {
        var id = document.getElementById(elementId);
        if (id != null) {
            id.innerHTML = innerHtml;
        }
    }
    static addStyleSheet(href) {
        var head = document.head
            , link = document.createElement('link');

        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = href;

        head.appendChild(link);
    }
}