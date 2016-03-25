/// <reference path="receipt-type" />
/// <reference path="mockup-data" />

var global,
    receipt = receipt || {};
global = window;

global.onload = function () {
    var url = global.location.search;
    url = url.replace("?", ''); // remove the ?
    if (!url) {
        url = receipt;
        global.data = JSON.parse(global.stringData);
    } else {
        setData(parseInt(url));
    }

    addStyleSheet('../../style_sheets/city/styles.css'); addStyleSheet('file:///android_asset/city/styles.css');
    replaceToken(parseInt(url));
}


function setData(receipt) {
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
        case ReceiptTypeModule.Receipts.SAVINGS_ACCOUNT:
            global.data = MockupData.savingsAccount;
            break;
    }
}

var labelText = {

    accountNoLabelId: "accountNoLabel",
    accountNumberId: "accountNumber",
    accountTypeId: "accountType",
    customerAddressId: "customerAddress",
    linkAccountNumberColonId: "linkAccountNumberColon",
    linkAccountNumberLabelId: "linkAccountNumberLabel",
    linkAccountNumberId: "linkAccountNumber",

    titleId: "হিসাব নম্বর",
    accountNameText: "হিসাব নাম",
    accountBalanceText: "ব্যালেন্স",
    accountOpeningDateText: "হিসাব খোলার তারিখ",
    accountTypeText: "হিসাবের ধরন",
    accountStatement: "হিসাবের সার বিবরনী",
    addressLine1Text: "এজেন্ট ব্যাংকিং ডিভিশন",
    addressLine2Text: "সিটি ব্যাংক লিঃ",
    addressLine3Text: "সিটি ব্যাংক  সেন্টার ১৩৬",
    addressLine4Text: "গুলশান এভিনিউ, ঢাকা-১২১২",
    addressText: "ঠিকানা",
    agentNameText: "এজেন্টের নাম",
    atmDebitCardCancelText: "এটিএম / ডেবিট কার্ড বাতিলকরন",
    atmDebitCardDeliveryText: "এটিএম / ডেবিট কার্ড হস্তান্তর",
    atmDebitCardRequestText: "এটিএম / ডেবিটি কার্ডের অনুরোধ",
    balanceAmountText: "ব্যালেন্সের পরিমান",
    balanceDateText: "ব্যালেন্সের তারিখ",
    chargeText: "চার্জ",
    cashDepositText: "নগদ জমা",
    cashWithdrawText: "নগদ উত্তোলন",
    chequeBookDeliveryText: "চেক বই হস্তান্তর",
    chequeBookRequisitionText: "চেক বই প্রদানের অনুরোধ",
    chequeStopPaymentSingleCancelText: "চেক স্টপ পেমেন্ট - সিঙ্গেল নির্দেশনা বাতিলকরন",
    chequeStopPaymentRangeCancelText: "চেক স্টপ পেমেন্ট - রেঞ্জ নির্দেশনা বাতিলকরন",
    chequeStopPaymentRangeText: "চেক স্টপ পেমেন্ট নির্দেশনা - রেঞ্জ",
    chequeStopPaymentSingleText: "চেক স্টপ পেমেন্ট নির্দেশনা - সিঙ্গেল",
    cityAgentFixedDepositText: "সিটি এজেন্ট ফিক্সড ডিপোজিট",
    cityAgentSavingsAccountText: "সিটি এজেন্ট সঞ্চয়ী হিসাব",
    colonText: ":",
    customerIdText: "গ্রাহক আইডি",
    customerNameText: "গ্রাহকের নাম",
    depositAmountText: "জমার পরিমান",
    depositDateText: "জমার তারিখ",
    emptyText: "",
    fundTransferDateText: "ফান্ড ট্রান্সফারের তারিখ",
    fundTransferText: "ফান্ড ট্রান্সফার",
    generalDPSAccountText: "সাধারন ডিপিএস হিসাব",
    initialDepositText: "প্রারম্ভিক জমার পরিমান",
    inWordsText: "কথায়",
    linkAccountNumberText: "লিংক হিসাব নম্বর",
    maturityAmountText: "মেয়াদান্তে টাকার পরিমান",
    maturityDateText: "মেয়াদান্তের তারিখ",
    mobileNoText: "মোবাইল নং",
    monthlyDepositText: "মাসিক জমা",
    profitRateText: "মুনাফার হার",
    printDateText: "প্রিন্টের তারিখ",
    principalAmountText: "আসল টাকার পরিমান",
    productTenorText: "মেয়াদ",
    receiverAccountNoText: "প্রাপকের হিসাব নম্বর",
    receiverAccountNameText: "প্রাপকের হিসাব নাম",
    senderAccountNoText: "প্রেরকের হিসাব নম্বর",
    sendrAccountNameText: "প্রেরকের হিসাব নাম",
    transferAmountText: "ট্রান্সফারের পরিমান",
    transactionIdText: "লেনদেন আইডি",
    userText: "ইউজার",
    withdrawAmountText: "উত্তোলনের পরিমান",
    withdrawDateText: "উত্তোলনের তারিখ",

    cardTypeText: "কার্ডের ধরণ",
    requestReceiveTimeText: "অনুরোধ গ্রহনের সময়",
    requestIdText: "অনুরোধ আইডি",
    cardTitleText: "কার্ড টাইটেল",
    cardBrandText: "কার্ডের ব্রান্ড",
    cardNumberText: "কার্ড নম্বর",
    deliveryDateText: "হস্তান্তরের তারিখ",
    noOfLeaveText: "পাতার সংখ্যা",
    chequeLostReasonText: "চেকটি",
    chequeLeafNumberText: "চেক পাতার নম্বর",
    amountOfTkText: "টাকার পরিমান",
    receiverNameText: "প্রাপকের নাম",
    retrieveFromText: "পুনরুদ্ধার হয়েছে",

    addressTextEnglish: "Address",
    agentNameTextEnglish: "Agent Name",
    amountInWordsTextEnglish: "Amount in Words",
    approximateAmountTextEnglish: "Approximate  Amount",
    currencyTextEnglish: "Currency",
    exchangeRateTextEnglish: "Exchange Rate",
    fxAmountTextEnglish: "Fx Amount",
    iDTypeTextEnglish: "ID Type",
    iDNumberTextEnglish: "ID Number",
    inwardForeignRemittanceRequestTextEnglish: "Inward Foreign Remittance Request",
    inwardForeignRemittanceDisbursementTextEnglish: "Inward Foreign Remittance Disbursement",
    mobileNoTextEnglish: "Mobile No",
    exchangeHouseNameEnglish: "Exchange House",
    actualPayableAmountTextEnglish: "Actual Payable Amount",
    pinNoTextEnglish: "Pin No",
    printDateTextEnglish: "Print Date",
    recipientNameTextEnglish: "Recipient Name",
    senderCountryTextEnglish: "Sender Country",
    senderNameTextEnglish: "Sender Name",
    transactionIdTextEnglish: "Transaction Id",
    userTextEnglish: "User",
}
function replaceToken(receipt) {
    addImage("agent_banking_logo", "file:///android_asset/city/AGENT-BANKING-LOGO_Small.png", "../../images/city/AGENT-BANKING-LOGO_Small.png");
    addImage("logo", "file:///android_asset/city/logo.gif", "../../images/city/logo.png");
    addImage("qr", "qr.png", "../../images/qr.png");
    addImage("customerPhoto", "photo.png", "../../images/photo.png");

    addClassText("addressLine1Label", labelText.addressLine1Text);
    addClassText("addressLine2Label", labelText.addressLine2Text);
    addClassText("addressLine3Label", labelText.addressLine3Text);
    addClassText("addressLine4Label", labelText.addressLine4Text);



   

    switch (receipt) {
        case 1:
            setAccountBalance();
            break;
        case 2:
            setCashDeposit();
            break;
        case 3:
            setCashWithdraw();
            break;
        case 4:
            setDPSAccount();
            break;
        case 5:
            setFixedDeposit();
            break;
        case 6:
            setFundTransfer();
            break;
        case 7:
            setSavingsAccount();
            break;
        case 8:
            setATMDebitCardRequest();
            break;
        case 9:
            setATMDebitCardDelivery();
            break;
        case 10:
            setATMDebitCardCancel();
            break;
        case 11:
            setChequeBookRequisition();
            break;
        case 12:
            setChequeBookDelivery();
            break;
        case 13:
            setChequeStopPaymentSingle();
            break;
        case 14:
            setChequeStopPaymentRange();
            break;
        case 15:
            setChequeStopPaymentSingleCancel();
            break;
        case 16:
            setChequeStopPaymentRangeCancel();
            break;
        case 17:
            setMiniStatement();
            break;
        case 18:
            setRemittanceRequest();
            break;
        case 19:
            setRemittanceDisbursement();
            break;
        default:
            break;
    }
}
function setAccountBalance() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.accountBalanceText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.balanceDateText, global.data.transactionDate]],
        [[labelText.balanceAmountText, global.data.balanceAmount], [labelText.transactionIdText, global.data.transactionCode]],
        [[labelText.inWordsText, global.data.balanceAmountInWords], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setCashDeposit() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.cashDepositText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.depositDateText, global.data.transactionDate]],
        [[labelText.depositAmountText, global.data.depositAmount], [labelText.transactionIdText, global.data.transactionCode]],
        [[labelText.inWordsText, global.data.depositAmountInWords], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setCashWithdraw() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.cashWithdrawText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.withdrawDateText, global.data.transactionDate]],
        [[labelText.withdrawAmountText, global.data.withdrawAmount], [labelText.transactionIdText, global.data.transactionCode]],
        [[labelText.inWordsText, global.data.withdrawsAmountInWords], [labelText.printDateText, global.data.printDate]],
        [[labelText.chargeText, global.data.charge], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setDPSAccount() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.generalDPSAccountText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, labelText.emptyText);
    addClassText(labelText.accountTypeId, global.data.dpsAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, global.data.linkAccountNumber);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.productTenorText, global.data.productTenor]],
        [[labelText.accountOpeningDateText, global.data.transactionDate], [labelText.maturityDateText, global.data.maturityDate]],
        [[labelText.monthlyDepositText, global.data.depositAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.maturityAmountText, global.data.maturityAmount], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFixedDeposit() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.cityAgentFixedDepositText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, labelText.emptyText);
    addClassText(labelText.accountTypeId, global.data.termDepositAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, global.data.linkAccountNumber);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.productTenorText, global.data.productTenor]],
        [[labelText.accountOpeningDateText, global.data.transactionDate], [labelText.maturityDateText, global.data.maturityDate]],
        [[labelText.profitRateText, global.data.profitRate], [labelText.maturityAmountText, global.data.maturityAmount]],
        [[labelText.principalAmountText, global.data.principalAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFundTransfer() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.fundTransferText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.senderAccountNoText);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.sendrAccountNameText, global.data.accountName], [labelText.fundTransferDateText, global.data.transactionDate]],
        [[labelText.receiverAccountNameText, global.data.receiverAccountName], [labelText.receiverAccountNoText, global.data.linkAccountNumber]],
        [[labelText.transferAmountText, global.data.depositAmount], [labelText.transactionIdText, global.data.transactionCode]],
        [[labelText.inWordsText, global.data.depositAmountInWords], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setSavingsAccount() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.cityAgentSavingsAccountText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.initialDepositText, global.data.depositAmount]],
        [[labelText.accountOpeningDateText, global.data.transactionDate], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}

function setATMDebitCardRequest() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.atmDebitCardRequestText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.cardTypeText, global.data.cardType], [labelText.requestIdText, global.data.requestId]],
        [[labelText.cardBrandText, global.data.cardBrand], [labelText.printDateText, global.data.printDate]],
        [[labelText.cardTitleText, global.data.accountName], [labelText.chargeText, global.data.charge]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setATMDebitCardDelivery() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.atmDebitCardDeliveryText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.deliveryDateText, global.data.transactionDate]],
        [[labelText.cardTypeText, global.data.cardType], [labelText.requestIdText, global.data.requestId]],
        [[labelText.cardBrandText, global.data.cardBrand], [labelText.printDateText, global.data.printDate]],
        [[labelText.cardTitleText, global.data.accountName], [labelText.cardNumberText, global.data.cardNumber]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setATMDebitCardCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.atmDebitCardCancelText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.deliveryDateText, global.data.transactionDate]],
        [[labelText.cardTypeText, global.data.cardType], [labelText.requestIdText, global.data.requestId]],
        [[labelText.cardBrandText, global.data.cardBrand], [labelText.printDateText, global.data.printDate]],
        [[labelText.cardTitleText, global.data.accountName], [labelText.cardNumberText, global.data.cardNumber]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeBookRequisition() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeBookRequisitionText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.noOfLeaveText, global.data.noOfLeave], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeText, global.data.charge], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeBookDelivery() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeBookDeliveryText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.deliveryDateText, global.data.transactionDate]],
        [[labelText.noOfLeaveText, global.data.noOfLeave], [labelText.requestIdText, global.data.requestId]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentSingle() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentSingleText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.receiverNameText, global.data.receiverName]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.amountOfTkText, global.data.chequeAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.chargeText, global.data.charge], [labelText.chequeLostReasonText, global.data.chequeLostReason]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentRange() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentRangeText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeText, global.data.charge], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.chequeLostReasonText, global.data.chequeLostReason]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentSingleCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentSingleCancelText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.receiverNameText, global.data.receiverName]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.amountOfTkText, global.data.chequeAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.chargeText, global.data.charge], [labelText.retrieveFromText, global.data.retrieveFrom]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentRangeCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentRangeCancelText);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeText, global.data.charge], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.retrieveFromText, global.data.retrieveFrom]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}

function setMiniStatement() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("title", labelText.accountStatement);

    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", global.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, global.data.accountNumber);
    addClassText(labelText.accountTypeId, global.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.transactionIdText);
    addClassText(labelText.linkAccountNumberId, global.data.transactionCode);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);

    var tableData = global.data.statement;

    var fourthTable = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
    for (var r in tableData) {
        for (var c in tableData[r]) {
            fourthTable.rows[r].cells[c].innerHTML = tableData[r][c];
        }
    }
}
function setRemittanceRequest() {
    addClassText("title", labelText.inwardForeignRemittanceRequestTextEnglish);

    let data = <JsonContracts.REMITTANCE_REQUEST>global.data;
    //addClassText("userIdLabel", labelText.userTextEnglish);
    //addClassText("userId", data.user);
    //addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    //addClassText("agentName", data.agentName);
    //addClassText("boothAddressLabel", labelText.addressTextEnglish);
    //addClassText("boothAddress", data.boothAddress);
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("customerNameLabel", labelText.recipientNameTextEnglish);
    addClassText("customerName", data.recipientName);
    addClassText("customerAddressLabel", labelText.exchangeHouseNameEnglish);
    addClassText("pinLabel", labelText.pinNoTextEnglish);
    addClassText("pinColon", labelText.colonText);
    addClassText("pin", data.pin);

    addClassText("mobileNoLabel", labelText.mobileNoTextEnglish);
    addClassText("mobileNo", data.mobileNo);

    var tableData = [
        [[labelText.senderNameTextEnglish, data.senderName], [labelText.iDTypeTextEnglish, data.idType]],
        [[labelText.senderCountryTextEnglish, data.senderCountry], [labelText.iDNumberTextEnglish, data.idNumber]],
        [[labelText.approximateAmountTextEnglish, data.actualPayableAmount], [labelText.printDateTextEnglish, data.printDate]],
        [[labelText.amountInWordsTextEnglish, data.amountInWords], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setRemittanceDisbursement() {
    addClassText("title", labelText.inwardForeignRemittanceDisbursementTextEnglish);

    let data = <JsonContracts.REMITTANCE_DISBURSEMENT>global.data;
    //addClassText("userIdLabel", labelText.userTextEnglish);
    //addClassText("userId", data.user);
    //addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    //addClassText("agentName", data.agentName);
    //addClassText("boothAddressLabel", labelText.addressTextEnglish);
    //addClassText("boothAddress", data.boothAddress);
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", global.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", global.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", global.data.boothAddress);

    addClassText("customerNameLabel", labelText.recipientNameTextEnglish);
    addClassText("customerName", data.recipientName);
    addClassText("customerAddressLabel", labelText.exchangeHouseNameEnglish);
    addClassText(labelText.customerAddressId, data.exchangeHouse);
    addClassText("pinLabel", labelText.pinNoTextEnglish);
    addClassText("pinColon", labelText.colonText);
    addClassText("pin", data.pin);

    addClassText("mobileNoLabel", labelText.mobileNoTextEnglish);
    addClassText("mobileNo", data.mobileNo);

    var tableData = [
        [[labelText.senderNameTextEnglish, data.senderName], [labelText.iDTypeTextEnglish, data.idType]],
        [[labelText.senderCountryTextEnglish, data.senderCountry], [labelText.iDNumberTextEnglish, data.idNumber]],
        [[labelText.actualPayableAmountTextEnglish, data.actualPayableAmount], [labelText.printDateTextEnglish, data.printDate]],
        [[labelText.amountInWordsTextEnglish, data.amountInWords], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}

function replaceTableData(tableData) {
    var fourthTable = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
    for (var i = 0; i < fourthTable.rows.length; i++) {
        let row = <HTMLTableRowElement>fourthTable.rows[i];
        for (var j = 0; j < row.cells.length; j++) {
            var text = tableData[i][j / 3][0];
            var value = tableData[i][j / 3][1];
            if (text) {
                row.cells[j].innerHTML = text;
                row.cells[++j].innerHTML = labelText.colonText;
            } else {
                row.cells[j].innerHTML = labelText.emptyText;
                row.cells[++j].innerHTML = labelText.emptyText;
            }
            row.cells[++j].innerHTML = value;
        }
    }
}
function addImage(elementId, url, alternateUrl) {
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
function addClassText(elementId, innerHtml) {
    var elements = document.getElementsByClassName(elementId);

    if (elements != null) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = innerHtml;
        }
    }
}
function hideElementByClassName(elementId) {
    var elements = document.getElementsByClassName(elementId);

    if (elements != null) {
        for (var i = 0; i < elements.length; i++) {
            (<any>elements[i]).style.display = 'none';
        }
    }
}
function addText(elementId, innerHtml) {
    var id = document.getElementById(elementId);
    if (id != null) {
        id.innerHTML = innerHtml;
    }
}
function addStyleSheet(href) {
    var head = document.head
        , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link);
}