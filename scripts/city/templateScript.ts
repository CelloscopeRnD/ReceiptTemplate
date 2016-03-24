/// <reference path="receipt-type" />
/// <reference path="mockup-data" />

var golbal,
    receipt = receipt || {};
golbal = window;

golbal.onload = function () {
    var url = golbal.location.search;
    url = url.replace("?", ''); // remove the ?
    if (!url) {
        url = receipt;
        golbal.data = JSON.parse(golbal.stringData);
    } else {
        setData(parseInt(url));
    }

    addStyleSheet('../../style_sheets/city/styles.css'); addStyleSheet('file:///android_asset/city/styles.css');
    replaceToken(parseInt(url));
}


function setData(receipt) {
    switch (receipt) {

        case ReceiptTypeModule.Receipts.ACCOUNT_BALANCE:
            golbal.data = MockupData.accountBalance;
            break;
        case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_CANCEL:
            golbal.data = MockupData.atmDebitCardCancel;
            break;
        case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_DELIVERY:
            golbal.data = MockupData.atmDebitCardDelivery;
            break;
        case ReceiptTypeModule.Receipts.ATM_DEBIT_CARD_REQUEST:
            golbal.data = MockupData.atmDebitCardRequest;
            break;
        case ReceiptTypeModule.Receipts.CASH_DEPOSIT:
            golbal.data = MockupData.cashDeposit;
            break;
        case ReceiptTypeModule.Receipts.CASH_WITHDRAW:
            golbal.data = MockupData.cashWithdraw;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_BOOK_DELIVERY:
            golbal.data = MockupData.chequeBookDelivery;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_BOOK_REQUISITION:
            golbal.data = MockupData.chequeBookRequisition;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_RANGE:
            golbal.data = MockupData.chequeStopPaymentRange;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
            golbal.data = MockupData.chequeStopPaymentRangeCancel;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
            golbal.data = MockupData.chequeStopPaymentSingle;
            break;
        case ReceiptTypeModule.Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
            golbal.data = MockupData.chequeStopPaymentSingleCancel;
            break;
        case ReceiptTypeModule.Receipts.DPS_ACCOUNT:
            golbal.data = MockupData.dpsAccount;
            break;
        case ReceiptTypeModule.Receipts.FIXED_DEPOSIT:
            golbal.data = MockupData.fixedDeposit;
            break;
        case ReceiptTypeModule.Receipts.FUND_TRANSFER:
            golbal.data = MockupData.fundTransfer;
            break;
        case ReceiptTypeModule.Receipts.MINI_STATEMENT:
            golbal.data = {
                "accountName": "MD Arif Gazi", "accountNumber": "2001158500126", "agentName": "BADRUL ALOM", "balanceAmount": "BDT 80,550.00", "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY", "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI", "charge": "BDT 7.50", "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA", "customerId": "CB1158500", "customerName": "Md. Arif Gazi", "depositAmountInWords": "THREE THOUSAND ONLY", "depositAmount": "BDT 3,000.00", "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526", "maturityAmount": "BDT 2,26,047.00", "maturityDate": "19-JAN-2021", "mobileNo": "01617877595", "principalAmount": "BDT 1,00,000.00", "printDate": "19-JAN-2016 13:13:15 PM", "productTenor": "5 Years", "profitRate": "8.85% (Yearly)", "receiverAccountName": "SUJON PATWARY", "requestId": "12346", "termDepositAccountType": "TERM DEPOSIT", "transactionDate": "19-JAN-2016", "savingsAccountType": "Savings", "transactionCode": "TR222369", "userId": "615001001 (NAIM ISLAM)", "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)", "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY", "cardType": "ATM", "cardBrand": "VISA", "cardNumber": "1234 1234 1234 1234", "noOfLeave": "10", "chequeLeafNumber": "123 456 789 123", "chequeAmount": "BDT 10,000.00", "receiverName": "Asadul Haque", "chequeLostReason": "Lost", "retrieveFrom": "From Lost", "photo": "",
                "statement": [["", "Date", "Description", "Deposit", "Withdraw", "Balance", ""], ["", "", "", "", "", "5000.00", "Starting"], ["1", "15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00", ""], ["2", "14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00", ""], ["3", "14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00", ""], ["4", "13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00", ""], ["5", "12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00", ""], ["", "", "", "", "", "9000.00", "Ending"]]
            };
            break;
        case ReceiptTypeModule.Receipts.REMITTANCE_DISBURSEMENT:
            golbal.data = {
                "agentName": "BADRUL ALOM",
                "userId": "615001001 (NAIM ISLAM)",
                "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
                "customerName": "Md. Arif Gazi",
                "mobileNo": "01617877595",
                "exchangeHouse": "",
                "senderName": "Toufiq",
                "senderCountry": "Italy",
                "pinNo": "123456",
                "payableAmount": "1,000 BDT",
                "transactionCode": "123456",
                "currency": "Euro",
                "exchangeRate": "100",
                "fxAmount": "",
                "printDate": "19-JAN-2016 13:13:15 PM",
                "amountInWords": "ONE TOUSAND ONLY",
                "requestId": "123456",
                "photo": ""
            };
            break;
        case ReceiptTypeModule.Receipts.REMITTANCE_REQUEST:
            golbal.data = {
                "agentName": "BADRUL ALOM",
                "userId": "615001001 (NAIM ISLAM)",
                "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
                "customerName": "Md. Arif Gazi",
                "mobileNo": "01617877595",
                "exchangeHouse": "",
                "senderName": "Toufiq",
                "senderCountry": "Italy",
                "pinNo": "123456",
                "apprxAmount": "1,000 BDT",
                "iDType": "NID",
                "iDNumber": "123456789",
                "amountInWords": "ONE TOUSAND ONLY",
                "printDate": "19-JAN-2016 13:13:15 PM",
                "requestId": "123456",
                "photo": ""
            };
            break;
        case ReceiptTypeModule.Receipts.SAVINGS_ACCOUNT:
            golbal.data = ReceiptTypeModule.Receipts.SAVINGS_ACCOUNT;
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
    apprxAmountTextEnglish: "Apprx.  Amount",
    currencyTextEnglish: "Currency",
    exchangeRateTextEnglish: "Exchange Rate",
    fxAmountTextEnglish: "Fx Amount",
    iDTypeTextEnglish: "ID Type",
    iDNumberTextEnglish: "ID Number",
    inwardForeignRemittanceRequestTextEnglish: "Inward Foreign Remittance Request",
    inwardForeignRemittanceDisbursementTextEnglish: "Inward Foreign Remittance Disbursement",
    mobileNoTextEnglish: "Mobile No",
    exchangeHouseNameEnglish: "Exchange House Name",
    payableAmountTextEnglish: "Payable Amount",
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



    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", golbal.data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);

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
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.accountBalanceText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.balanceDateText, golbal.data.transactionDate]],
        [[labelText.balanceAmountText, golbal.data.balanceAmount], [labelText.transactionIdText, golbal.data.transactionCode]],
        [[labelText.inWordsText, golbal.data.balanceAmountInWords], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setCashDeposit() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.cashDepositText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.depositDateText, golbal.data.transactionDate]],
        [[labelText.depositAmountText, golbal.data.depositAmount], [labelText.transactionIdText, golbal.data.transactionCode]],
        [[labelText.inWordsText, golbal.data.depositAmountInWords], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setCashWithdraw() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.cashWithdrawText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.withdrawDateText, golbal.data.transactionDate]],
        [[labelText.withdrawAmountText, golbal.data.withdrawAmount], [labelText.transactionIdText, golbal.data.transactionCode]],
        [[labelText.inWordsText, golbal.data.withdrawsAmountInWords], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.chargeText, golbal.data.charge], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setDPSAccount() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.generalDPSAccountText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, labelText.emptyText);
    addClassText(labelText.accountTypeId, golbal.data.dpsAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, golbal.data.linkAccountNumber);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.productTenorText, golbal.data.productTenor]],
        [[labelText.accountOpeningDateText, golbal.data.transactionDate], [labelText.maturityDateText, golbal.data.maturityDate]],
        [[labelText.monthlyDepositText, golbal.data.depositAmount], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.maturityAmountText, golbal.data.maturityAmount], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFixedDeposit() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.cityAgentFixedDepositText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, labelText.emptyText);
    addClassText(labelText.accountTypeId, golbal.data.termDepositAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, golbal.data.linkAccountNumber);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.productTenorText, golbal.data.productTenor]],
        [[labelText.accountOpeningDateText, golbal.data.transactionDate], [labelText.maturityDateText, golbal.data.maturityDate]],
        [[labelText.profitRateText, golbal.data.profitRate], [labelText.maturityAmountText, golbal.data.maturityAmount]],
        [[labelText.principalAmountText, golbal.data.principalAmount], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFundTransfer() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.fundTransferText);

    addClassText(labelText.accountNoLabelId, labelText.senderAccountNoText);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.sendrAccountNameText, golbal.data.accountName], [labelText.fundTransferDateText, golbal.data.transactionDate]],
        [[labelText.receiverAccountNameText, golbal.data.receiverAccountName], [labelText.receiverAccountNoText, golbal.data.linkAccountNumber]],
        [[labelText.transferAmountText, golbal.data.depositAmount], [labelText.transactionIdText, golbal.data.transactionCode]],
        [[labelText.inWordsText, golbal.data.depositAmountInWords], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setSavingsAccount() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.cityAgentSavingsAccountText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.initialDepositText, golbal.data.depositAmount]],
        [[labelText.accountOpeningDateText, golbal.data.transactionDate], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}

function setATMDebitCardRequest() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.atmDebitCardRequestText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.requestReceiveTimeText, golbal.data.transactionDate]],
        [[labelText.cardTypeText, golbal.data.cardType], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.cardBrandText, golbal.data.cardBrand], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.cardTitleText, golbal.data.accountName], [labelText.chargeText, golbal.data.charge]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setATMDebitCardDelivery() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.atmDebitCardDeliveryText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.deliveryDateText, golbal.data.transactionDate]],
        [[labelText.cardTypeText, golbal.data.cardType], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.cardBrandText, golbal.data.cardBrand], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.cardTitleText, golbal.data.accountName], [labelText.cardNumberText, golbal.data.cardNumber]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setATMDebitCardCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.atmDebitCardCancelText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.deliveryDateText, golbal.data.transactionDate]],
        [[labelText.cardTypeText, golbal.data.cardType], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.cardBrandText, golbal.data.cardBrand], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.cardTitleText, golbal.data.accountName], [labelText.cardNumberText, golbal.data.cardNumber]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeBookRequisition() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeBookRequisitionText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.requestReceiveTimeText, golbal.data.transactionDate]],
        [[labelText.noOfLeaveText, golbal.data.noOfLeave], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.chargeText, golbal.data.charge], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeBookDelivery() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeBookDeliveryText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.deliveryDateText, golbal.data.transactionDate]],
        [[labelText.noOfLeaveText, golbal.data.noOfLeave], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentSingle() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentSingleText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.receiverNameText, golbal.data.receiverName]],
        [[labelText.chequeLeafNumberText, golbal.data.chequeLeafNumber], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.amountOfTkText, golbal.data.chequeAmount], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.chargeText, golbal.data.charge], [labelText.chequeLostReasonText, golbal.data.chequeLostReason]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentRange() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentRangeText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.requestReceiveTimeText, golbal.data.transactionDate]],
        [[labelText.chequeLeafNumberText, golbal.data.chequeLeafNumber], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.chargeText, golbal.data.charge], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.chequeLostReasonText, golbal.data.chequeLostReason]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentSingleCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentSingleCancelText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.receiverNameText, golbal.data.receiverName]],
        [[labelText.chequeLeafNumberText, golbal.data.chequeLeafNumber], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.amountOfTkText, golbal.data.chequeAmount], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.chargeText, golbal.data.charge], [labelText.retrieveFromText, golbal.data.retrieveFrom]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setChequeStopPaymentRangeCancel() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.chequeStopPaymentRangeCancelText);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.emptyText);
    addClassText(labelText.linkAccountNumberId, labelText.emptyText);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = [
        [[labelText.accountNameText, golbal.data.accountName], [labelText.requestReceiveTimeText, golbal.data.transactionDate]],
        [[labelText.chequeLeafNumberText, golbal.data.chequeLeafNumber], [labelText.requestIdText, golbal.data.requestId]],
        [[labelText.chargeText, golbal.data.charge], [labelText.printDateText, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.retrieveFromText, golbal.data.retrieveFrom]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}

function setMiniStatement() {
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.accountStatement);

    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, golbal.data.accountNumber);
    addClassText(labelText.accountTypeId, golbal.data.savingsAccountType);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberLabelId, labelText.transactionIdText);
    addClassText(labelText.linkAccountNumberId, golbal.data.transactionCode);

    addClassText("customerNameLabel", labelText.customerNameText);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, golbal.data.customerAddress);

    var tableData = golbal.data.statement;

    var fourthTable = <HTMLTableElement>document.getElementsByClassName('fourthTable')[0];
    for (var r in tableData) {
        for (var c in tableData[r]) {
            fourthTable.rows[r].cells[c].innerHTML = tableData[r][c];
        }
    }
}
function setRemittanceRequest() {
    addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userTextEnglish);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressTextEnglish);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.inwardForeignRemittanceRequestTextEnglish);

    hideElementByClassName('accountBasic');

    addClassText("customerNameLabel", labelText.recipientNameTextEnglish);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoTextEnglish);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.exchangeHouseNameEnglish);
    addClassText(labelText.customerAddressId, labelText.emptyText);
    addClassText(labelText.customerAddressId, golbal.data.exchangeHouse);


    var tableData = [
        [[labelText.senderNameTextEnglish, golbal.data.senderName], [labelText.senderCountryTextEnglish, golbal.data.senderCountry]],
        [[labelText.iDTypeTextEnglish, golbal.data.iDType], [labelText.apprxAmountTextEnglish, golbal.data.apprxAmount]],
        [[labelText.amountInWordsTextEnglish, golbal.data.amountInWords], [labelText.iDNumberTextEnglish, golbal.data.iDNumber]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateTextEnglish, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
    ];
    replaceTableData(tableData);
}
function setRemittanceDisbursement() {
    addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    addClassText("agentName", golbal.data.agentName);
    addClassText("userIdLabel", labelText.userTextEnglish);
    addClassText("userId", golbal.data.userId);
    addClassText("boothAddressLabel", labelText.addressTextEnglish);
    addClassText("boothAddress", golbal.data.boothAddress);

    addClassText("title", labelText.inwardForeignRemittanceDisbursementTextEnglish);

    hideElementByClassName('accountBasic');

    addClassText("customerNameLabel", labelText.recipientNameTextEnglish);
    addClassText("customerName", golbal.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoTextEnglish);
    addClassText("mobileNo", golbal.data.mobileNo);
    addClassText("customerAddressLabel", labelText.exchangeHouseNameEnglish);
    addClassText(labelText.customerAddressId, labelText.emptyText);


    var tableData = [
        [[labelText.senderNameTextEnglish, golbal.data.senderName], [labelText.senderCountryTextEnglish, golbal.data.senderCountry]],
        [[labelText.transactionIdTextEnglish, golbal.data.transactionCode], [labelText.payableAmountTextEnglish, golbal.data.payableAmount]],
        [[labelText.amountInWordsTextEnglish, golbal.data.amountInWords], [labelText.printDateTextEnglish, golbal.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
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