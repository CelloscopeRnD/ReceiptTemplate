/// <reference path="../receipt-helper.ts" />
/// <reference path="agrani-mockup-data.ts" />
/// <reference path="agrani-json-contracts.ts" />

class AgraniReceiptHelper extends ReceiptHelper {
    setMockData(receipt) {
        switch (receipt) {
            case Receipts.ACCOUNT_BALANCE:
                global.data = AgrainMockupData.accountBalance;
                break;
            case Receipts.ATM_DEBIT_CARD_CANCEL:
                global.data = AgrainMockupData.atmDebitCardCancel;
                break;
            case Receipts.ATM_DEBIT_CARD_DELIVERY:
                global.data = AgrainMockupData.atmDebitCardDelivery;
                break;
            case Receipts.ATM_DEBIT_CARD_REQUEST:
                global.data = AgrainMockupData.atmDebitCardRequest;
                break;
            case Receipts.CASH_DEPOSIT:
                global.data = AgrainMockupData.cashDeposit;
                break;
            case Receipts.CASH_WITHDRAW:
                global.data = AgrainMockupData.cashWithdraw;
                break;
            case Receipts.CHEQUE_BOOK_DELIVERY:
                global.data = AgrainMockupData.chequeBookDelivery;
                break;
            case Receipts.CHEQUE_BOOK_REQUISITION:
                global.data = AgrainMockupData.chequeBookRequisition;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE:
                global.data = AgrainMockupData.chequeStopPaymentRange;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
                global.data = AgrainMockupData.chequeStopPaymentRangeCancel;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
                global.data = AgrainMockupData.chequeStopPaymentSingle;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
                global.data = AgrainMockupData.chequeStopPaymentSingleCancel;
                break;
            case Receipts.DPS_ACCOUNT:
                global.data = AgrainMockupData.dpsAccount;
                break;
            case Receipts.FIXED_DEPOSIT:
                global.data = AgrainMockupData.fixedDeposit;
                break;
            case Receipts.FUND_TRANSFER:
                global.data = AgrainMockupData.fundTransfer;
                break;
            case Receipts.REMITTANCE_DISBURSEMENT:
                global.data = AgrainMockupData.remittanceDisbursement;
                break;
            case Receipts.REMITTANCE_REQUEST:
                global.data = AgrainMockupData.remittanceRequest;
                break;
            case Receipts.ACCOUNT_OPENING:
                global.data = AgrainMockupData.accountOpeningRequest;
                break;
            case Receipts.MINI_STATEMENT:
                global.data = AgrainMockupData.miniStatement;
                break;
            case Receipts.ACCOUNT_ACTIVATION:
                global.data = AgrainMockupData.accountActivation;
        }
    }
    replaceToken(receipt) {
        ReceiptHelper.addImage("logo", `file:///android_asset/${BankConstants.sub_folder}/logo.png`, `../../images/${BankConstants.sub_folder}/logo.png`);
        //ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
        ReceiptHelper.addImage("agraniDoer", `file:///android_asset/${BankConstants.sub_folder}/agranidoer.png`, `../../images/${BankConstants.sub_folder}/agranidoer.png`);
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
            case 20:
                this.setAccountActivation();
                break;
            default:
                break;
        }

    }
    setAccountBalance() {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);

        let data = <AgraniJsonContracts.ACCOUNT_BALANCE>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.balanceDate],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.balanceAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);
        this.hideOthersCopy();
    }
    setCashDeposit() {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);

        const data = <AgraniJsonContracts.CASH_DEPOSIT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.depositDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);

        this.setTableBorder();
    }
    setCashWithdraw() {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);

        let data = <AgraniJsonContracts.CASH_WITHDRAW>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.withdrawDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.withdrawAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);

        this.setTableBorder();
    }
    setDPSAccount() {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);

        let data = <AgraniJsonContracts.DPS_ACCOUNT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            [LabelText.customerNameText, data.customerName],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
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

        let data = <AgraniJsonContracts.FIXED_DEPOSIT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.transactionDate],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            //[LabelText.customerIdText, data.customerId],
            [LabelText.customerNameText, data.customerName],
            //[LabelText.mobileNoText, data.mobileNo],
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

        let data = <AgraniJsonContracts.FUND_TRANSFER>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.fundTransferDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.senderAccountNoText, data.senderAccountNumber],
            [LabelText.receiverAccountNoText, data.receiverAccountNumber],
            [LabelText.amountText, data.transferAmount],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress]
        ];
        this.replaceTableData(tableData);

        this.setTableBorder();
    }
    setAccountOpening() {
        let data = <AgraniJsonContracts.ACCOUNT_OPENING>global.data;

        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],


            [LabelText.dateText, data.accountOpeningDate],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],



            [LabelText.customerMnemonicText, data.customerMnemonic],
            [LabelText.accountMnemonicText, data.accountMnemonic],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.depositAmountText, data.initialDeposit],
            [LabelText.inWordsText, data.inWords],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
        this.setTableBorder();
    }

    setATMDebitCardRequest() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardRequestText);

        let data = <AgraniJsonContracts.ATM_DEBIT_CARD_REQUEST>global.data;

        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardDelivery() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardDeliveryText);

        let data = <AgraniJsonContracts.ATM_DEBIT_CARD_DELIVERY>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardCancel() {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardCancelText);

        let data = <AgraniJsonContracts.ATM_DEBIT_CARD_CANCEL>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress],
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookRequisition() {
        ReceiptHelper.addClassText("title", LabelText.chequeBookRequisitionText);

        let data = <AgraniJsonContracts.CHEQUE_BOOK_REQUISITION>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookDelivery() {
        ReceiptHelper.addClassText("title", LabelText.chequeBookDeliveryText);

        let data = <AgraniJsonContracts.CHEQUE_BOOK_DELIVERY>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingle() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleText);

        let data = <AgraniJsonContracts.CHEQUE_STOP_PAYMENT_SINGLE>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRange() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);

        let data = <AgraniJsonContracts.CHEQUE_STOP_PAYMENT_RANGE>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingleCancel() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);

        let data = <AgraniJsonContracts.CHEQUE_STOP_PAYMENT_RANGE>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate],
            //[LabelText.addressText, data.customerAddress],
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRangeCancel() {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleCancelText);

        let data = <AgraniJsonContracts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL>global.data;
        const tableData = [
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    }

    setMiniStatement() {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);

        let data = <AgraniJsonContracts.MINI_STATEMENT>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText]
            //[LabelText.chargeAndVatText, data.chargeAndVat],
            //[LabelText.emptyText, LabelText.emptyText],
        ];
        this.replaceTableData(tableData);
        console.dir(tableData);
        this.replaceMinistatementTableData(data.statement);
        ReceiptHelper.addClassText("openingBalance", data.openingBalance);
        ReceiptHelper.addClassText("chargeAndVat", data.chargeAndVat);
        ReceiptHelper.addClassText("availableBalance", data.availableBalance);
    }
    setRemittanceRequest() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceRequestTextEnglish);

        let data = <AgraniJsonContracts.REMITTANCE_REQUEST>global.data;
        const tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            //[LabelText.mobileNoTextEnglish, data.mobileNo],
            [LabelText.traceIdText, data.traceId],
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

        let data = <AgraniJsonContracts.REMITTANCE_DISBURSEMENT>global.data;
        const tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentIdTextEnglish, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            [LabelText.transactionIdTextEnglish, data.transactionCode],
            [LabelText.traceIdTextEnglish, data.traceId],
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

    setAccountActivation() {
        ReceiptHelper.addClassText("title", LabelText.activationText);

        let data = <AgraniJsonContracts.ACCOUNT_ACTIVATION>global.data;
        const tableData = [
            [LabelText.userText, data.user],
            [LabelText.agentIdText, data.agentId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.dateText, data.activationDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.traceIdText, data.traceId],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.mobileNoText, data.mobileNo],
            [LabelText.amountText, data.initialDepositAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.emptyText, LabelText.emptyText],

            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);

        this.setTableBorder();
        ReceiptHelper.addClassText("cardReceive", LabelText.cardReceiveText);
    }

    replaceTableData(tableData) {
        const tables = document.getElementsByClassName('dataTabel');
        for (let i = 0; i < tables.length; i += 1) {
            const table = <HTMLTableElement>tables[i];
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

    setTableBorder() {
        const tables = document.getElementsByClassName('dataTabel');
        for (let i = 0; i < tables.length; i += 1) {
            const table = <HTMLTableElement>tables[i];

            const borderString = '3px solid black';

            const bottomRowIndex = 5;
            const bottomRow = <HTMLTableRowElement>table.rows[bottomRowIndex];
            for (let i = 0; i < 3; i += 1) {
                const cell = (<HTMLTableCellElement>bottomRow.cells[i]);
                cell.style.borderBottom = borderString;
                if (i == 0) {
                    cell.style.borderLeft = borderString;
                }
                else if (i === 2) {
                    cell.style.borderRight = borderString;
                }
            }

            const middleRowIndex = 4;
            const middleRow = <HTMLTableRowElement>table.rows[middleRowIndex];
            for (let i = 0; i < 3; i += 1) {
                const cell = (<HTMLTableCellElement>middleRow.cells[i]);
                if (i == 0) {
                    cell.style.borderLeft = borderString;
                }
                else if (i === 2) {
                    cell.style.borderRight = borderString;
                }
            }

            const topRowIndex = 3;
            const topRow = <HTMLTableRowElement>table.rows[topRowIndex];
            for (let i = 0; i < 3; i += 1) {
                const cell = (<HTMLTableCellElement>topRow.cells[i]);
                cell.style.borderTop = borderString;
                if (i == 0) {
                    cell.style.borderLeft = borderString;
                }
                else if (i === 2) {
                    cell.style.borderRight = borderString;
                }
            }
        }
    }

    hideOthersCopy() {
        const copies = document.getElementsByClassName('main');
        (<HTMLDivElement>copies[1]).style.display = 'none';
        (<HTMLDivElement>copies[2]).style.display = 'none';
    }

    replaceMinistatementTableData(tableData) {
        const tables = document.getElementsByClassName('miniStatementTabel');
        for (let i = 0; i < tables.length; i += 1) {
            const table = <HTMLTableElement>tables[i];
            var tableBody = document.createElement('tbody');

            for (const rowData of tableData) {
                let count = 0;
                let row: HTMLTableRowElement;
                let cell: HTMLTableCellElement;
                for (const cellData of rowData) {
                    count += 1;
                    if (count < 3) {
                        row = document.createElement('tr');
                        tableBody.appendChild(row);
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                        cell = document.createElement('td');
                        row.appendChild(cell);
                    }
                    else if (count == 3) {
                        row = document.createElement('tr');
                        tableBody.appendChild(row);
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                    } else {
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                    }
                }
            }

            table.appendChild(tableBody);
        }
    }
}