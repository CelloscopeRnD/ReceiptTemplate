/// <reference path="../receipt-helper.ts" />
/// <reference path="city-mockup-data.ts" />
/// <reference path="city-json-contracts.ts" />

class CityReceiptHelper extends ReceiptHelper {
    setMockData(receipt) {
        switch (receipt) {
            case Receipts.ACCOUNT_BALANCE:
                global.data = CityMockupData.accountBalance;
                break;
            case Receipts.ATM_DEBIT_CARD_CANCEL:
                global.data = CityMockupData.atmDebitCardCancel;
                break;
            case Receipts.ATM_DEBIT_CARD_DELIVERY:
                global.data = CityMockupData.atmDebitCardDelivery;
                break;
            case Receipts.ATM_DEBIT_CARD_REQUEST:
                global.data = CityMockupData.atmDebitCardRequest;
                break;
            case Receipts.CASH_DEPOSIT:
                global.data = CityMockupData.cashDeposit;
                break;
            case Receipts.CASH_WITHDRAW:
                global.data = CityMockupData.cashWithdraw;
                break;
            case Receipts.CHEQUE_BOOK_DELIVERY:
                global.data = CityMockupData.chequeBookDelivery;
                break;
            case Receipts.CHEQUE_BOOK_REQUISITION:
                global.data = CityMockupData.chequeBookRequisition;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE:
                global.data = CityMockupData.chequeStopPaymentRange;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
                global.data = CityMockupData.chequeStopPaymentRangeCancel;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
                global.data = CityMockupData.chequeStopPaymentSingle;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
                global.data = CityMockupData.chequeStopPaymentSingleCancel;
                break;
            case Receipts.DPS_ACCOUNT:
                global.data = CityMockupData.dpsAccount;
                break;
            case Receipts.FIXED_DEPOSIT:
                global.data = CityMockupData.fixedDeposit;
                break;
            case Receipts.FUND_TRANSFER:
                global.data = CityMockupData.fundTransfer;
                break;
            case Receipts.REMITTANCE_DISBURSEMENT:
                global.data = CityMockupData.remittanceDisbursement;
                break;
            case Receipts.REMITTANCE_REQUEST:
                global.data = CityMockupData.remittanceRequest;
                break;
            case Receipts.ACCOUNT_OPENING:
                global.data = CityMockupData.accountOpeningRequest;
                break;
            case Receipts.MINI_STATEMENT:
                global.data = CityMockupData.miniStatement;
                break;
            case Receipts.CASH_DEPOSIT_BEARER:
                global.data = CityMockupData.cashDepositBearer;
                break;
            case Receipts.ACCOUNT_OPENING_JOINT_CUSTOMER:
                global.data = CityMockupData.accountOpeningJointCustomerRequest;
                break;
            case Receipts.ACCOUNT_OPENING_CORPORATE_CUSTOMER:
                global.data = CityMockupData.accountOpeningCorporateRequest;
                break;
            case Receipts.ACCOUNT_OPENING_MINOR_CUSTOMER:
                global.data = CityMockupData.accountOpeningMinorRequest;
                break;
        }
    }
    replaceToken(receipt) {
        switch (receipt) {
            case 1:
                this.setAccountBalance();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 2:
                this.setCashDeposit();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 3:
                this.setCashWithdraw();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 4:
                this.setDPSAccount();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 5:
                this.setFixedDeposit();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 6:
                this.setFundTransfer();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 7:
                this.setAccountOpening();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 8:
                this.setATMDebitCardRequest();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 9:
                this.setATMDebitCardDelivery();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 10:
                this.setATMDebitCardCancel();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 11:
                this.setChequeBookRequisition();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 12:
                this.setChequeBookDelivery();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 13:
                this.setChequeStopPaymentSingle();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 14:
                this.setChequeStopPaymentRange();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 15:
                this.setChequeStopPaymentSingleCancel();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 16:
                this.setChequeStopPaymentRangeCancel();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 17:
                this.setMiniStatement();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 18:
                this.setRemittanceRequest();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 19:
                this.setRemittanceDisbursement();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 21:
                this.setCashDepositBearer();
                ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
                break;
            case 22:
                this.setAccountOpeningJointCustomer();
                break;
            case 23:
                this.setAccountOpeningCorporateCustomer();
                break;
            case 24:
                this.setAccountOpeningMinorCustomer();
                break;
            default:
                break;
        }
        ReceiptHelper.addImage("agent_banking_logo", `file:///android_asset/${BankConstants.sub_folder}/AGENT-BANKING-LOGO_Small.png`, `../../images/${BankConstants.sub_folder}/AGENT-BANKING-LOGO_Small.png`);
        ReceiptHelper.addImage("logo", `file:///android_asset/${BankConstants.sub_folder}/logo.gif`, `../../images/${BankConstants.sub_folder}/logo.gif`);
        ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
       

        ReceiptHelper.addClassText("addressLine1Label", LabelText.addressLine1Text);
        ReceiptHelper.addClassText("addressLine2Label", LabelText.addressLine2Text);
        ReceiptHelper.addClassText("addressLine3Label", LabelText.addressLine3Text);
        ReceiptHelper.addClassText("addressLine4Label", LabelText.addressLine4Text);
    }
    setAccountBalance() {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);

        let data = <CityJsonContracts.ACCOUNT_BALANCE>global.data;

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
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    setCashDeposit() {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);

        let data = <CityJsonContracts.CASH_DEPOSIT>global.data;

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
            [[LabelText.depositAmountText, data.depositAmount], [LabelText.depositDateText, data.depositDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    setCashWithdraw() {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);

        let data = <CityJsonContracts.CASH_WITHDRAW>global.data;

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
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    setDPSAccount() {
        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + LabelText.cityAgentDPSAccountText);

        let data = <CityJsonContracts.DPS_ACCOUNT>global.data;

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
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [
            [[LabelText.schemeNameText, data.schemeName], [LabelText.accountOpeningDateText, data.transactionDate]],
            [[LabelText.monthlyDepositAmountText, data.depositAmount], [LabelText.openingDateText, data.openingDate]],
            [[LabelText.maturityAmountText, data.maturityAmount], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.productTenorText, data.productTenor], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setFixedDeposit() {
        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + LabelText.fixedDepositText);

        let data = <CityJsonContracts.FIXED_DEPOSIT>global.data;

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
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.linkAccountNumberText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.linkAccountNumber);
        ReceiptHelper.addClassText("disclaimerLabel", data.disclaimer);

        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [

            [[LabelText.principalAmountText, data.principalAmount], [LabelText.accountOpeningDateText, data.transactionDate]],
            [[LabelText.profitRateText, data.profitRate], [LabelText.maturityAmountText, data.maturityAmount]],
            [[LabelText.productTenorText, data.productTenor], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setFundTransfer() {
        ReceiptHelper.addClassText("title", LabelText.fundTransferText);

        let data = <CityJsonContracts.FUND_TRANSFER>global.data;

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
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);

        ReceiptHelper.doRowSpan("fourthTable", 3, 2);
    }
    setAccountOpening() {
        let data = <CityJsonContracts.ACCOUNT_OPENING>global.data;

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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    setMiniStatement() {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);

        let data = <CityJsonContracts.MINI_STATEMENT>global.data;

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

        let data = <CityJsonContracts.REMITTANCE_REQUEST>global.data;
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
            [[LabelText.approximateAmountTextEnglish, data.actualPayableAmount], [LabelText.printDateTextEnglish, data.printDate]],
            [[LabelText.amountInWordsTextEnglish, data.amountInWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setRemittanceDisbursement() {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceDisbursementTextEnglish);

        let data = <CityJsonContracts.REMITTANCE_DISBURSEMENT>global.data;
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
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    setCashDepositBearer() {
        ReceiptHelper.addImage("bearerPhoto", "photo.png", "../../images/photo.png");
        ReceiptHelper.addClassText("title", LabelText.cashDepositBearerText);

        let data = <CityJsonContracts.CASH_DEPOSIT_BEARER>global.data;

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
            [[LabelText.depositAmountText, data.depositAmount], [LabelText.depositDateText, data.depositDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.bearerNameText, data.bearerName]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.bearerMobileNoText, data.bearerMobileNo]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    }
    setAccountOpeningJointCustomer() {
        const data = <CityJsonContracts.ACCOUNT_OPENING_JOINT_CUSTOMER>global.data;
        const main = document.getElementsByClassName('main')[0];
        const body = document.getElementsByTagName('body')[0];

        for (let i = 0; i < data.accountNames.length - 1; i++) {
            const div = document.createElement('div');
            div.className += ' main';
            div.innerHTML = main.innerHTML;
            body.appendChild(div);
        }

        var elements = document.getElementsByClassName('customerName');
        var photos = document.getElementsByClassName('customerPhoto');
        for (let i = 0; i < data.accountNames.length; i++) {
            elements[i].innerHTML = data.accountNames[i];
            var imageElement = <HTMLImageElement>photos[i];
            if (imageElement.src != null) {
                imageElement.src = `photo${i+1}.png`;
                imageElement.onerror = function (ele) {
                    (<HTMLImageElement>ele.srcElement).src = `../../images/photo${i+1}.png`;
                }
            }
        }

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
        //ReceiptHelper.addClassText("customerName", data.accountNames[i]);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [
            [[LabelText.initialDepositText, data.initialDeposit], [LabelText.accountOpeningDateText, data.accountOpeningDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);

    }
    setAccountOpeningCorporateCustomer() {
        let data = <CityJsonContracts.ACCOUNT_OPENING_CORPORATE_CUSTOMER>global.data;
        //const main = document.getElementsByClassName('main')[0];
        //const body = document.getElementsByTagName('body')[0];

        //for (let i = 0; i < data.accountNames.length - 1; i++) {
        //    const div = document.createElement('div');
        //    div.className += ' main';
        //    div.innerHTML = main.innerHTML;
        //    body.appendChild(div);
        //}

        //var elements = document.getElementsByClassName('customerName');
        //for (let i = 0; i < data.accountNames.length; i++) {
        //    elements[i].innerHTML = data.accountNames[i];
        //}

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
        //ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [
            [[LabelText.initialDepositText, data.initialDeposit], [LabelText.accountOpeningDateText, data.accountOpeningDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }
    setAccountOpeningMinorCustomer() {
        let data = <CityJsonContracts.ACCOUNT_OPENING_MINOR_CUSTOMER>global.data;
        //const main = document.getElementsByClassName('main')[0];
        //const body = document.getElementsByTagName('body')[0];

        //for (let i = 0; i < data.accountNames.length - 1; i++) {
        //    const div = document.createElement('div');
        //    div.className += ' main';
        //    div.innerHTML = main.innerHTML;
        //    body.appendChild(div);
        //}

        //var elements = document.getElementsByClassName('customerName');
        //for (let i = 0; i < data.accountNames.length; i++) {
        //    elements[i].innerHTML = data.accountNames[i];
        //}

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
        //ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);

        var tableData = [
            [[LabelText.initialDepositText, data.initialDeposit], [LabelText.accountOpeningDateText, data.accountOpeningDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    }

    replaceTableData(tableData) {
        var fourthTables = document.getElementsByClassName('fourthTable');
        for (let index = 0; index < fourthTables.length; index++) {
            var fourthTable = <HTMLTableElement>fourthTables[index];
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
    }
}