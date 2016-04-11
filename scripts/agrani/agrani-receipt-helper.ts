﻿/// <reference path="../receipt-helper.ts" />

class AgraniReceiptHelper extends ReceiptHelper {
    replaceToken(receipt) {
        ReceiptHelper.addImage("logo", `file:///android_asset/${BankConstants.sub_folder}/logo.gif`, `../../images/${BankConstants.sub_folder}/logo.gif`);
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

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);

        var tableData = [
            [[LabelText.balanceAmountText, data.balanceAmount], [LabelText.balanceDateText, data.balanceDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
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
            //[LabelText.addressText, data.customerAddress],
        ];
        this.replaceTableData(tableData);
    }
    setCashWithdraw() {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);

        let data = <JsonContracts.CASH_WITHDRAW>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);

        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);

        var tableData = [
            [[LabelText.withdrawAmountText, data.withdrawAmount], [LabelText.withdrawDateText, data.withdrawDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    setDPSAccount() {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);

        let data = <JsonContracts.DPS_ACCOUNT>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.linkAccountNumberText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.linkAccountNumber);


        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, data.accountName], [LabelText.productTenorText, data.productTenor]],
            [[LabelText.accountOpeningDateText, data.transactionDate], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.monthlyDepositText, data.depositAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.maturityAmountText, data.maturityAmount], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setFixedDeposit() {
        ReceiptHelper.addClassText("title", LabelText.fixedDepositText);

        let data = <JsonContracts.FIXED_DEPOSIT>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.linkAccountNumberText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.linkAccountNumber);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, data.accountName], [LabelText.productTenorText, data.productTenor]],
            [[LabelText.accountOpeningDateText, data.transactionDate], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.profitRateText, data.profitRate], [LabelText.maturityAmountText, data.maturityAmount]],
            [[LabelText.principalAmountText, data.principalAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setFundTransfer() {
        ReceiptHelper.addClassText("title", LabelText.fundTransferText);

        let data = <JsonContracts.FUND_TRANSFER>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.senderAccountNoText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.senderAccountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.senderAccountNameText);
        ReceiptHelper.addClassText("customerName", data.senderAccountName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);

        var tableData = [
            [[LabelText.receiverAccountNoText, data.receiverAccountNumber], [LabelText.fundTransferDateText, data.fundTransferDate]],
            [[LabelText.receiverAccountNameText, data.receiverAccountName], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.transferAmountText, data.transferAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);

        ReceiptHelper.doRowSpan("fourthTable", 3, 2);
    }
    setAccountOpening() {
        let data = <JsonContracts.ACCOUNT_OPENING>global.data;

        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("linkAccountNumberLabel", '&nbsp');
        ReceiptHelper.addClassText("disclaimerLabel", data.disclaimer);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [
            [[LabelText.initialDepositText, data.initialDeposit], [LabelText.accountOpeningDateText, data.accountOpeningDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    setATMDebitCardRequest() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.atmDebitCardRequestText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.chargeAndVatText, global.data.charge]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardDelivery() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.atmDebitCardDeliveryText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.cardNumberText, global.data.cardNumber]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setATMDebitCardCancel() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.atmDebitCardCancelText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.cardNumberText, global.data.cardNumber]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookRequisition() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeBookRequisitionText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.noOfLeaveText, global.data.noOfLeave], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeBookDelivery() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeBookDeliveryText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.noOfLeaveText, global.data.noOfLeave], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingle() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.receiverNameText, global.data.receiverName]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.amountOfTkText, global.data.chequeAmount], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.chequeLostReasonText, global.data.chequeLostReason]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRange() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.chequeLostReasonText, global.data.chequeLostReason]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentSingleCancel() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleCancelText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.receiverNameText, global.data.receiverName]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.amountOfTkText, global.data.chequeAmount], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.retrieveFromText, global.data.retrieveFrom]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setChequeStopPaymentRangeCancel() {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);

        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeCancelText);

        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);

        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.retrieveFromText, global.data.retrieveFrom]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    setMiniStatement() {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);

        let data = <JsonContracts.MINI_STATEMENT>global.data;

        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);

        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.chargeAndVatText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.chargeAndVat);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);

        var tableData = data.statement;

        var fourthTable = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
        for (var r in tableData) {
            for (var c in tableData[r]) {
                let row = <HTMLTableRowElement>fourthTable.rows[r];
                row.cells[c].innerHTML = tableData[r][c];
            }
        }
    }
    setRemittanceRequest() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceRequestTextEnglish);

        let data = <JsonContracts.REMITTANCE_REQUEST>global.data;
        //ReceiptHelper.addClassText("userIdLabel", labelText.userTextEnglish);
        //ReceiptHelper.addClassText("userId", data.user);
        //ReceiptHelper.addClassText("agentNameLabel", labelText.agentNameTextEnglish);
        //ReceiptHelper.addClassText("agentName", data.agentName);
        //ReceiptHelper.addClassText("boothAddressLabel", labelText.addressTextEnglish);
        //ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.recipientNameTextEnglish);
        ReceiptHelper.addClassText("customerName", data.recipientName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.exchangeHouseNameEnglish);
        ReceiptHelper.addClassText("pinLabel", LabelText.pinNoTextEnglish);
        ReceiptHelper.addClassText("pinColon", LabelText.colonText);
        ReceiptHelper.addClassText("pin", data.pin);

        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoTextEnglish);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);

        var tableData = [
            [[LabelText.senderNameTextEnglish, data.senderName], [LabelText.iDTypeTextEnglish, data.idType]],
            [[LabelText.senderCountryTextEnglish, data.senderCountry], [LabelText.iDNumberTextEnglish, data.idNumber]],
            [[LabelText.approximateAmountTextEnglish, data.actualPayableAmount], [LabelText.printDateTextEnglish, data.printDate]],
            [[LabelText.amountInWordsTextEnglish, data.amountInWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setRemittanceDisbursement() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceDisbursementTextEnglish);

        let data = <JsonContracts.REMITTANCE_DISBURSEMENT>global.data;
        //ReceiptHelper.addClassText("userIdLabel", labelText.userTextEnglish);
        //ReceiptHelper.addClassText("userId", data.user);
        //ReceiptHelper.addClassText("agentNameLabel", labelText.agentNameTextEnglish);
        //ReceiptHelper.addClassText("agentName", data.agentName);
        //ReceiptHelper.addClassText("boothAddressLabel", labelText.addressTextEnglish);
        //ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.recipientNameTextEnglish);
        ReceiptHelper.addClassText("customerName", data.recipientName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.exchangeHouseNameEnglish);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.exchangeHouse);
        ReceiptHelper.addClassText("pinLabel", LabelText.pinNoTextEnglish);
        ReceiptHelper.addClassText("pinColon", LabelText.colonText);
        ReceiptHelper.addClassText("pin", data.pin);

        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoTextEnglish);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);

        var tableData = [
            [[LabelText.senderNameTextEnglish, data.senderName], [LabelText.iDTypeTextEnglish, data.idType]],
            [[LabelText.senderCountryTextEnglish, data.senderCountry], [LabelText.iDNumberTextEnglish, data.idNumber]],
            [[LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount], [LabelText.printDateTextEnglish, data.printDate]],
            [[LabelText.amountInWordsTextEnglish, data.amountInWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    replaceTableData(tableData) {
        const table = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
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