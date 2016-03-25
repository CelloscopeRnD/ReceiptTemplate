var ReceiptTypeModule;
(function (ReceiptTypeModule) {
    (function (Receipts) {
        Receipts[Receipts["ACCOUNT_BALANCE"] = 1] = "ACCOUNT_BALANCE";
        Receipts[Receipts["CASH_DEPOSIT"] = 2] = "CASH_DEPOSIT";
        Receipts[Receipts["CASH_WITHDRAW"] = 3] = "CASH_WITHDRAW";
        Receipts[Receipts["DPS_ACCOUNT"] = 4] = "DPS_ACCOUNT";
        Receipts[Receipts["FIXED_DEPOSIT"] = 5] = "FIXED_DEPOSIT";
        Receipts[Receipts["FUND_TRANSFER"] = 6] = "FUND_TRANSFER";
        Receipts[Receipts["SAVINGS_ACCOUNT"] = 7] = "SAVINGS_ACCOUNT";
        Receipts[Receipts["ATM_DEBIT_CARD_REQUEST"] = 8] = "ATM_DEBIT_CARD_REQUEST";
        Receipts[Receipts["ATM_DEBIT_CARD_DELIVERY"] = 9] = "ATM_DEBIT_CARD_DELIVERY";
        Receipts[Receipts["ATM_DEBIT_CARD_CANCEL"] = 10] = "ATM_DEBIT_CARD_CANCEL";
        Receipts[Receipts["CHEQUE_BOOK_REQUISITION"] = 11] = "CHEQUE_BOOK_REQUISITION";
        Receipts[Receipts["CHEQUE_BOOK_DELIVERY"] = 12] = "CHEQUE_BOOK_DELIVERY";
        Receipts[Receipts["CHEQUE_STOP_PAYMENT_SINGLE"] = 13] = "CHEQUE_STOP_PAYMENT_SINGLE";
        Receipts[Receipts["CHEQUE_STOP_PAYMENT_RANGE"] = 14] = "CHEQUE_STOP_PAYMENT_RANGE";
        Receipts[Receipts["CHEQUE_STOP_PAYMENT_SINGLE_CANCEL"] = 15] = "CHEQUE_STOP_PAYMENT_SINGLE_CANCEL";
        Receipts[Receipts["CHEQUE_STOP_PAYMENT_RANGE_CANCEL"] = 16] = "CHEQUE_STOP_PAYMENT_RANGE_CANCEL";
        Receipts[Receipts["MINI_STATEMENT"] = 17] = "MINI_STATEMENT";
        Receipts[Receipts["REMITTANCE_REQUEST"] = 18] = "REMITTANCE_REQUEST";
        Receipts[Receipts["REMITTANCE_DISBURSEMENT"] = 19] = "REMITTANCE_DISBURSEMENT";
    })(ReceiptTypeModule.Receipts || (ReceiptTypeModule.Receipts = {}));
    var Receipts = ReceiptTypeModule.Receipts;
    ;
})(ReceiptTypeModule || (ReceiptTypeModule = {}));
var JsonContracts;
(function (JsonContracts) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(JsonContracts || (JsonContracts = {}));
/// <reference path="./json-contracts" />
var MockupData;
(function (MockupData) {
    MockupData.accountBalance = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "balanceAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "balanceDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": "123456",
        "photo": ""
    };
    MockupData.atmDebitCardCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.atmDebitCardDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.atmDebitCardRequest = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.cashDeposit = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "depositAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "depositDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": "123456",
        "photo": ""
    };
    MockupData.cashWithdraw = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "withdrawAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "withdrawDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": "123456",
        "photo": ""
    };
    MockupData.chequeBookDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.chequeBookRequisition = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.chequeStopPaymentRange = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.chequeStopPaymentRangeCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.chequeStopPaymentSingle = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.chequeStopPaymentSingleCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": "12346",
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    MockupData.dpsAccount = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "DPS",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "requestId": "123456",
        "transactionDate": "19-JAN-2016"
    };
    MockupData.fixedDeposit = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "TERM DEPOSIT",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "requestId": "123456",
        "transactionDate": "19-JAN-2016"
    };
    MockupData.fundTransfer = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "senderAccountNumber": "2001158500126",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "senderAccountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "receiverAccountNumber": "2801619598001",
        "receiverAccountName": "MD. ASHSAN HABIB ROCKY",
        "transferAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "fundTransferDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": "123456",
        "photo": ""
    };
    MockupData.miniStatement = {
        "user": "26160101 (NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "statement": [
            ["", "Date", "Description", "Withdraw", "Deposit", "Balance"],
            ["", "", "", "", "", "5000.00"],
            ["1", "15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["2", "14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["3", "14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["4", "13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["5", "12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"],
            ["", "", "", "", "", "9000.00"]
        ],
        "requestId": "123456",
        "photo": ""
    };
    MockupData.remittanceDisbursement = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "exchangeHouse": "XPRESS MONEY",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "photo": "",
        "requestId": "123456"
    };
    MockupData.remittanceRequest = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "photo": "",
        "requestId": "123456"
    };
    MockupData.savingsAccount = {
        "user": "26160101(NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "mobileNo": "01617877595",
        "photo": "",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "requestId": "123456",
        "transactionDate": "19-JAN-2016"
    };
})(MockupData || (MockupData = {}));
/// <reference path="receipt-type" />
/// <reference path="mockup-data" />
var global, receipt = receipt || {};
global = window;
global.onload = function () {
    var url = global.location.search;
    url = url.replace("?", ''); // remove the ?
    if (!url) {
        url = receipt;
        global.data = JSON.parse(global.stringData);
    }
    else {
        setData(parseInt(url));
    }
    addStyleSheet('../../style_sheets/city/styles.css');
    addStyleSheet('file:///android_asset/city/styles.css');
    replaceToken(parseInt(url));
};
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
    accountNameText: "হিসাবের নাম",
    accountBalanceText: "ব্যালেন্স",
    accountOpeningDateText: "হিসাব খোলার তারিখ",
    accountTypeText: "হিসাবের ধরন",
    accountStatement: "মিনিস্টেটমেন্ট",
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
    chargeAndVatText: "চার্জ+ভ্যাট",
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
    receiverAccountNameText: "প্রাপকের হিসাবের নাম",
    senderAccountNoText: "প্রেরকের হিসাব নম্বর",
    senderAccountNameText: "প্রেরকের হিসাবের নাম",
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
    userTextEnglish: "User"
};
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
    addClassText("title", labelText.accountBalanceText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, data.accountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerIdColon", ":");
    addClassText("customerId", data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.balanceAmountText, data.balanceAmount], [labelText.balanceDateText, data.balanceDate]],
        [[labelText.inWordsText, data.inWords], [labelText.transactionIdText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateText, data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.chargeAndVatText, data.chargeAndVat], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
    doRowSpan("fourthTable", 1, 2);
}
function setCashDeposit() {
    addClassText("title", labelText.cashDepositText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, data.accountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerIdColon", ":");
    addClassText("customerId", data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.depositAmountText, data.depositAmount], [labelText.depositDateText, data.depositDate]],
        [[labelText.inWordsText, data.inWords], [labelText.transactionIdText, data.transactionCode]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateText, data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.chargeAndVatText, data.chargeAndVat], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
    doRowSpan("fourthTable", 1, 2);
}
function setCashWithdraw() {
    addClassText("title", labelText.cashWithdrawText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, data.accountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", data.customerId);
    addClassText("customerIdColon", ":");
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.withdrawAmountText, data.withdrawAmount], [labelText.withdrawDateText, data.withdrawDate]],
        [[labelText.inWordsText, data.inWords], [labelText.transactionIdText, data.transactionCode]],
        [[labelText.emptyText, labelText.emptyText], [labelText.printDateText, data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.chargeAndVatText, data.chargeAndVat], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
    doRowSpan("fourthTable", 1, 2);
}
function setDPSAccount() {
    addClassText("title", labelText.generalDPSAccountText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", data.customerId);
    addClassText("customerIdColon", ":");
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, data.linkAccountNumber);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, data.accountName], [labelText.productTenorText, data.productTenor]],
        [[labelText.accountOpeningDateText, data.transactionDate], [labelText.maturityDateText, data.maturityDate]],
        [[labelText.monthlyDepositText, data.depositAmount], [labelText.printDateText, data.printDate]],
        [[labelText.maturityAmountText, data.maturityAmount], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFixedDeposit() {
    addClassText("title", labelText.cityAgentFixedDepositText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, labelText.emptyText);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", data.customerId);
    addClassText("customerIdColon", ":");
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.linkAccountNumberText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, data.linkAccountNumber);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, data.accountName], [labelText.productTenorText, data.productTenor]],
        [[labelText.accountOpeningDateText, data.transactionDate], [labelText.maturityDateText, data.maturityDate]],
        [[labelText.profitRateText, data.profitRate], [labelText.maturityAmountText, data.maturityAmount]],
        [[labelText.principalAmountText, data.principalAmount], [labelText.printDateText, data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setFundTransfer() {
    addClassText("title", labelText.fundTransferText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.senderAccountNoText);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, data.senderAccountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerIdColon", ":");
    addClassText("customerId", data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText("customerNameLabel", labelText.senderAccountNameText);
    addClassText("customerName", data.senderAccountName);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    var tableData = [
        [[labelText.receiverAccountNoText, data.receiverAccountNumber], [labelText.fundTransferDateText, data.fundTransferDate]],
        [[labelText.receiverAccountNameText, data.receiverAccountName], [labelText.transactionIdText, data.transactionCode]],
        [[labelText.transferAmountText, data.transferAmount], [labelText.printDateText, data.printDate]],
        [[labelText.inWordsText, data.inWords], [labelText.emptyText, labelText.emptyText]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]],
        [[labelText.chargeAndVatText, data.chargeAndVat], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
    doRowSpan("fourthTable", 3, 2);
}
function setSavingsAccount() {
    addClassText("title", labelText.cityAgentSavingsAccountText);
    var data = global.data;
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText("accountNumberColon", ":");
    addClassText(labelText.accountNumberId, data.accountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerIdColon", ":");
    addClassText("customerId", data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText("accountTypeColon", ":");
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, data.accountName], [labelText.initialDepositText, data.depositAmount]],
        [[labelText.accountOpeningDateText, data.transactionDate], [labelText.printDateText, data.printDate]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.cardTypeText, global.data.cardType], [labelText.requestIdText, global.data.requestId]],
        [[labelText.cardBrandText, global.data.cardBrand], [labelText.printDateText, global.data.printDate]],
        [[labelText.cardTitleText, global.data.accountName], [labelText.chargeAndVatText, global.data.charge]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
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
    addClassText("customerNameLabel", labelText.accountNameText);
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.noOfLeaveText, global.data.noOfLeave], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeAndVatText, global.data.charge], [labelText.printDateText, global.data.printDate]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.receiverNameText, global.data.receiverName]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.amountOfTkText, global.data.chequeAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.chargeAndVatText, global.data.charge], [labelText.chequeLostReasonText, global.data.chequeLostReason]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeAndVatText, global.data.charge], [labelText.printDateText, global.data.printDate]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.receiverNameText, global.data.receiverName]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.amountOfTkText, global.data.chequeAmount], [labelText.printDateText, global.data.printDate]],
        [[labelText.chargeAndVatText, global.data.charge], [labelText.retrieveFromText, global.data.retrieveFrom]],
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
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", global.data.customerName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", global.data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, global.data.customerAddress);
    var tableData = [
        [[labelText.accountNameText, global.data.accountName], [labelText.requestReceiveTimeText, global.data.transactionDate]],
        [[labelText.chequeLeafNumberText, global.data.chequeLeafNumber], [labelText.requestIdText, global.data.requestId]],
        [[labelText.chargeAndVatText, global.data.charge], [labelText.printDateText, global.data.printDate]],
        [[labelText.emptyText, labelText.emptyText], [labelText.retrieveFromText, global.data.retrieveFrom]],
        [[labelText.emptyText, labelText.emptyText], [labelText.emptyText, labelText.emptyText]]
    ];
    replaceTableData(tableData);
}
function setMiniStatement() {
    addClassText("title", labelText.accountStatement);
    var data = global.data;
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
    addClassText(labelText.accountNoLabelId, labelText.titleId);
    addClassText(labelText.accountNumberId, data.accountNumber);
    addClassText("customerIdLabel", labelText.customerIdText);
    addClassText("customerId", data.customerId);
    addClassText("accountTypeLabel", labelText.accountTypeText);
    addClassText(labelText.accountTypeId, data.accountType);
    addClassText(labelText.linkAccountNumberLabelId, labelText.chargeAndVatText);
    addClassText(labelText.linkAccountNumberColonId, labelText.colonText);
    addClassText(labelText.linkAccountNumberId, data.chargeAndVat);
    addClassText("customerNameLabel", labelText.accountNameText);
    addClassText("customerName", data.accountName);
    addClassText("mobileNoLabel", labelText.mobileNoText);
    addClassText("mobileNo", data.mobileNo);
    addClassText("customerAddressLabel", labelText.addressText);
    addClassText(labelText.customerAddressId, data.customerAddress);
    var tableData = data.statement;
    var fourthTable = document.getElementsByClassName('fourthTable')[0];
    for (var r in tableData) {
        for (var c in tableData[r]) {
            var row = fourthTable.rows[r];
            row.cells[c].innerHTML = tableData[r][c];
        }
    }
}
function setRemittanceRequest() {
    addClassText("title", labelText.inwardForeignRemittanceRequestTextEnglish);
    var data = global.data;
    //addClassText("userIdLabel", labelText.userTextEnglish);
    //addClassText("userId", data.user);
    //addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    //addClassText("agentName", data.agentName);
    //addClassText("boothAddressLabel", labelText.addressTextEnglish);
    //addClassText("boothAddress", data.boothAddress);
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
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
    var data = global.data;
    //addClassText("userIdLabel", labelText.userTextEnglish);
    //addClassText("userId", data.user);
    //addClassText("agentNameLabel", labelText.agentNameTextEnglish);
    //addClassText("agentName", data.agentName);
    //addClassText("boothAddressLabel", labelText.addressTextEnglish);
    //addClassText("boothAddress", data.boothAddress);
    addClassText("agentNameLabel", labelText.agentNameText);
    addClassText("agentName", data.agentName);
    addClassText("userIdLabel", labelText.userText);
    addClassText("userId", data.user);
    addClassText("boothAddressLabel", labelText.addressText);
    addClassText("boothAddress", data.boothAddress);
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
    var fourthTable = document.getElementsByClassName('fourthTable')[0];
    for (var i = 0; i < fourthTable.rows.length; i++) {
        var row = fourthTable.rows[i];
        for (var j = 0; j < row.cells.length; j++) {
            var text = tableData[i][j / 3][0];
            var value = tableData[i][j / 3][1];
            if (text) {
                row.cells[j].innerHTML = text;
                row.cells[++j].innerHTML = labelText.colonText;
            }
            else {
                row.cells[j].innerHTML = labelText.emptyText;
                row.cells[++j].innerHTML = labelText.emptyText;
            }
            row.cells[++j].innerHTML = value;
        }
    }
}
function doRowSpan(tableClassName, rowIndex, cellIndex, rowSpan) {
    if (rowSpan === void 0) { rowSpan = 2; }
    var table = document.getElementsByClassName(tableClassName)[0];
    var row = table.rows[rowIndex];
    var cell = row.cells[cellIndex];
    cell.rowSpan = 2;
    var nextrow = table.rows[++rowIndex];
    var bottomcell = nextrow.cells[cellIndex];
    bottomcell.remove();
}
function addImage(elementId, url, alternateUrl) {
    var elements = document.getElementsByClassName(elementId);
    if (elements != null) {
        for (var i = 0; i < elements.length; i++) {
            var imageElement = elements[i];
            if (imageElement.src != null) {
                imageElement.src = url;
                imageElement.onerror = function (ele) {
                    ele.srcElement.src = alternateUrl;
                };
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
            elements[i].style.display = 'none';
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
    var head = document.head, link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
}
