/// <reference path="receipts.ts" />
/// <reference path="label-text.ts" />
/// <reference path="bank-constants.ts" />

class ReceiptHelper {
    setMockData(receipt) { }
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