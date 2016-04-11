/// <reference path="receipt-type.ts" />
/// <reference path="mockup-data.ts" />
/// <reference path="label-text.ts" />
/// <reference path="bank-constants.ts" />

class ReceiptHelper {
    static setData(receipt) {
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

    static replaceToken(receipt) {
        ReceiptHelper.addImage("agent_banking_logo", `file:///android_asset/${BankConstants.sub_folder}/AGENT-BANKING-LOGO_Small.png`, `../../images/${BankConstants.sub_folder}/AGENT-BANKING-LOGO_Small.png`);
        ReceiptHelper.addImage("logo", `file:///android_asset/${BankConstants.sub_folder}/logo.gif`, `../../images/${BankConstants.sub_folder}/logo.png`);
        ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
        ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");

        ReceiptHelper.addClassText("addressLine1Label", LabelText.addressLine1Text);
        ReceiptHelper.addClassText("addressLine2Label", LabelText.addressLine2Text);
        ReceiptHelper.addClassText("addressLine3Label", LabelText.addressLine3Text);
        ReceiptHelper.addClassText("addressLine4Label", LabelText.addressLine4Text);

        switch (receipt) {
            case 1:
                ReceiptHelper.setAccountBalance();
                break;
            case 2:
                ReceiptHelper.setCashDeposit();
                break;
            case 3:
                ReceiptHelper.setCashWithdraw();
                break;
            case 4:
                ReceiptHelper.setDPSAccount();
                break;
            case 5:
                ReceiptHelper.setFixedDeposit();
                break;
            case 6:
                ReceiptHelper.setFundTransfer();
                break;
            case 7:
                ReceiptHelper.setAccountOpening();
                break;
            case 8:
                ReceiptHelper.setATMDebitCardRequest();
                break;
            case 9:
                ReceiptHelper.setATMDebitCardDelivery();
                break;
            case 10:
                ReceiptHelper.setATMDebitCardCancel();
                break;
            case 11:
                ReceiptHelper.setChequeBookRequisition();
                break;
            case 12:
                ReceiptHelper.setChequeBookDelivery();
                break;
            case 13:
                ReceiptHelper.setChequeStopPaymentSingle();
                break;
            case 14:
                ReceiptHelper.setChequeStopPaymentRange();
                break;
            case 15:
                ReceiptHelper.setChequeStopPaymentSingleCancel();
                break;
            case 16:
                ReceiptHelper.setChequeStopPaymentRangeCancel();
                break;
            case 17:
                ReceiptHelper.setMiniStatement();
                break;
            case 18:
                ReceiptHelper.setRemittanceRequest();
                break;
            case 19:
                ReceiptHelper.setRemittanceDisbursement();
                break;
            default:
                break;
        }
    }
    static setAccountBalance() {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);

        let data = <JsonContracts.ACCOUNT_BALANCE>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    static setCashDeposit() {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);

        let data = <JsonContracts.CASH_DEPOSIT>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
            [[LabelText.depositAmountText, data.depositAmount], [LabelText.depositDateText, data.depositDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        ReceiptHelper.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    static setCashWithdraw() {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);

        let data = <JsonContracts.CASH_WITHDRAW>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);

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
        ReceiptHelper.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    static setDPSAccount() {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);

        let data = <JsonContracts.DPS_ACCOUNT>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setFixedDeposit() {
        ReceiptHelper.addClassText("title", LabelText.fixedDepositText);

        let data = <JsonContracts.FIXED_DEPOSIT>global.data;

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setFundTransfer() {
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
        ReceiptHelper.replaceTableData(tableData);

        ReceiptHelper.doRowSpan("fourthTable", 3, 2);
    }
    static setAccountOpening() {
        let data = <JsonContracts.ACCOUNT_OPENING>global.data;

        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);

        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }

    static setATMDebitCardRequest() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setATMDebitCardDelivery() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setATMDebitCardCancel() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeBookRequisition() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeBookDelivery() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeStopPaymentSingle() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeStopPaymentRange() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeStopPaymentSingleCancel() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setChequeStopPaymentRangeCancel() {
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

        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
        ReceiptHelper.replaceTableData(tableData);
    }

    static setMiniStatement() {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);

        let data = <JsonContracts.MINI_STATEMENT>global.data;

        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);


        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.titleId);
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
    static setRemittanceRequest() {
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
        ReceiptHelper.replaceTableData(tableData);
    }
    static setRemittanceDisbursement() {
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
        ReceiptHelper.replaceTableData(tableData);
    }

    static replaceTableData(tableData) {
        var fourthTable = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
        for (var i = 0; i < fourthTable.rows.length; i++) {
            let row = <HTMLTableRowElement>fourthTable.rows[i];
            for (var j = 0; j < row.cells.length; j++) {
                var text = tableData[i][j / 3][0];
                var value = tableData[i][j / 3][1];
                if (text) {
                    row.cells[j].innerHTML = text;
                    row.cells[++j].innerHTML = LabelText.colonText;
                } else {
                    row.cells[j].innerHTML = LabelText.emptyText;
                    row.cells[++j].innerHTML = LabelText.emptyText;
                }
                row.cells[++j].innerHTML = value;
            }
        }
    }
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