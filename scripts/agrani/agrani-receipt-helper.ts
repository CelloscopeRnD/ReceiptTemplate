/// <reference path="../receipt-helper.ts" />

class AgraniReceiptHelper extends ReceiptHelper {
    replaceToken(receipt) {
        ReceiptHelper.addImage("logo", `file:///android_asset/${BankConstants.sub_folder}/logo.gif`, `../../images/${BankConstants.sub_folder}/logo.gif`);
        ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
        ReceiptHelper.addImage("poweredbycelloscope", `file:///android_asset/${BankConstants.sub_folder}/poweredbycelloscope.png`, `../../images/${BankConstants.sub_folder}/poweredbycelloscope.png`);

        switch (receipt) {
            case 1:
                this.setAccountBalance();
                break;
            case 2:
                this.setCashDeposit();
                break;
            case 3:
                this.setCashWithdraw();
                break;
            case 4:
                this.setDPSAccount();
                break;
            case 5:
                this.setFixedDeposit();
                break;
            case 6:
                this.setFundTransfer();
                break;
            case 7:
                this.setAccountOpening();
                break;
            case 8:
                this.setATMDebitCardRequest();
                break;
            case 9:
                this.setATMDebitCardDelivery();
                break;
            case 10:
                this.setATMDebitCardCancel();
                break;
            case 11:
                this.setChequeBookRequisition();
                break;
            case 12:
                this.setChequeBookDelivery();
                break;
            case 13:
                this.setChequeStopPaymentSingle();
                break;
            case 14:
                this.setChequeStopPaymentRange();
                break;
            case 15:
                this.setChequeStopPaymentSingleCancel();
                break;
            case 16:
                this.setChequeStopPaymentRangeCancel();
                break;
            case 17:
                this.setMiniStatement();
                break;
            case 18:
                this.setRemittanceRequest();
                break;
            case 19:
                this.setRemittanceDisbursement();
                break;
            default:
                break;
        }
    }
    setAccountBalance() {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);

        let data = <JsonContracts.ACCOUNT_BALANCE>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.balanceDateText, data.balanceDate],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.balanceAmountText, data.balanceAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setCashDeposit() {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);

        const data = <JsonContracts.CASH_DEPOSIT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositDateText, data.depositDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setCashWithdraw() {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);

        let data = <JsonContracts.CASH_WITHDRAW>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.withdrawDateText, data.withdrawDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.withdrawAmountText, data.withdrawAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setDPSAccount() {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);

        let data = <JsonContracts.DPS_ACCOUNT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            [LabelText.customerNameText, data.customerName],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.maturityAmountText, data.maturityAmount],
            [LabelText.productTenorText, data.productTenor],
            [LabelText.maturityDateText, data.maturityDate],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setFixedDeposit() {
        ReceiptHelper.addClassText("title", LabelText.fixedDepositText);

        let data = <JsonContracts.FIXED_DEPOSIT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountOpeningDateText, data.transactionDate],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.customerNameText, data.customerName],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.maturityAmountText, data.maturityAmount],
            [LabelText.maturityDateText, data.maturityDate],
            [LabelText.principalAmountText, data.principalAmount],
            [LabelText.profitRateText, data.profitRate],
            [LabelText.productTenorText, data.productTenor],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setFundTransfer() {
        ReceiptHelper.addClassText("title", LabelText.fundTransferText);

        let data = <JsonContracts.FUND_TRANSFER>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.fundTransferDateText, data.fundTransferDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.senderAccountNoText, data.senderAccountNumber],
            [LabelText.receiverAccountNoText, data.receiverAccountNumber],
            [LabelText.transferAmountText, data.transferAmount],
            [LabelText.customerIdText, data.customerId],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
    }
    setAccountOpening() {
        let data = <JsonContracts.ACCOUNT_OPENING>global.data;

        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            //[LabelText.emptyText, data.disclaimer],
            [LabelText.accountOpeningDateText, data.accountOpeningDate],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.gendertText, data.gender],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.initialDepositText, data.initialDeposit],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }

    setATMDebitCardRequest() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardRequestText);

        let data = <JsonContracts.ATM_DEBIT_CARD_REQUEST>global.data;

        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardDelivery() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardDeliveryText);

        let data = <JsonContracts.ATM_DEBIT_CARD_DELIVERY>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardCancel() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardCancelText);

        let data = <JsonContracts.ATM_DEBIT_CARD_CANCEL>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress],
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookRequisition() {
        ReceiptHelper.addClassText("title", LabelText.chequeBookRequisitionText);

        let data = <JsonContracts.CHEQUE_BOOK_REQUISITION>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookDelivery() {
        ReceiptHelper.addClassText("title", LabelText.chequeBookDeliveryText);

        let data = <JsonContracts.CHEQUE_BOOK_DELIVERY>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingle() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleText);

        let data = <JsonContracts.CHEQUE_STOP_PAYMENT_SINGLE>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRange() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);

        let data = <JsonContracts.CHEQUE_STOP_PAYMENT_RANGE>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingleCancel() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);

        let data = <JsonContracts.CHEQUE_STOP_PAYMENT_RANGE>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress],
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRangeCancel() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleCancelText);

        let data = <JsonContracts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL>global.data;
        const tableData = [
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }

    setMiniStatement() {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);

        let data = <JsonContracts.MINI_STATEMENT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentNameText, data.agentName],
            [LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.customerIdText, data.customerId],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

        ];
        this.replaceTableData(tableData);
    }
    setRemittanceRequest() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceRequestTextEnglish);

        let data = <JsonContracts.REMITTANCE_REQUEST>global.data;
        const tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentNameTextEnglish, data.agentName],
            [LabelText.addressTextEnglish, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            [LabelText.mobileNoTextEnglish, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.senderNameTextEnglish, data.senderName],
            [LabelText.senderCountryTextEnglish, data.senderCountry],
            [LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount],
            [LabelText.amountInWordsTextEnglish, data.amountInWords],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.iDTypeTextEnglish, data.idType],
            [LabelText.iDNumberTextEnglish, data.idNumber],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateTextEnglish, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setRemittanceDisbursement() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceDisbursementTextEnglish);

        let data = <JsonContracts.REMITTANCE_DISBURSEMENT>global.data;
        const tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentNameTextEnglish, data.agentName],
            [LabelText.addressTextEnglish, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            [LabelText.mobileNoTextEnglish, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.senderNameTextEnglish, data.senderName],
            [LabelText.senderCountryTextEnglish, data.senderCountry],
            [LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount],
            [LabelText.amountInWordsTextEnglish, data.amountInWords],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.iDTypeTextEnglish, data.idType],
            [LabelText.iDNumberTextEnglish, data.idNumber],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateTextEnglish, data.printDate]
        ];
        this.replaceTableData(tableData);
    }

    replaceTableData(tableData) {
        const table = <HTMLTableElement>document.getElementsByClassName('dataTabel')[0];
        var tableBody = document.createElement('tbody');

        for (const rowData of tableData) {
            const row = document.createElement('tr');

            var firstCell = true;

            for (const cellData of rowData) {
                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
                if (firstCell) {
                    cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(cellData ? ':' : '\xa0'));
                    row.appendChild(cell);
                    firstCell = false;
                }
            }
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
    }
}