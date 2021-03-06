﻿class CityMockupData {
    static miniStatement: CityJsonContracts.MINI_STATEMENT = {
        "user": "26160101 (NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "chargeAndVat": "BDT 10.00 + 1.50",

        "accountName": "JAMAL UDDIN City",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",

        "statement": [
            ["Date", "Description", "Withdraw", "Deposit", "Balance"],
            ["", "Opening Balance", "", "", "4,231,594.17"],
            ["24-FEB-2016", "DR.TRAN FOR FUNDING A/C ZZ1323537", "3,500,000.00", "-", "731,594.17"],
            ["18-FEB-2016", "SUMON", "100, 000.00", "-", "631,594.17"],
            ["01-MAR-2016", "2801633560001: WTAX PDF", "185.43", "-", "631,408.74"],
            ["01-MAR-2016", "2801633560001: INT.PD:01-02 - 2016", "-", "1,236.22", "632,644.96"],
            ["15-MAR-2016", "TRTR/000043011856/15- 02 - 2016 15: 18:56/CBL", "-", "500.00", "633,144.96"]
        ],

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static accountBalance: CityJsonContracts.ACCOUNT_BALANCE = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static atmDebitCardCancel: CityJsonContracts.ATM_DEBIT_CARD_CANCEL = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static atmDebitCardDelivery: CityJsonContracts.ATM_DEBIT_CARD_DELIVERY = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static atmDebitCardRequest: CityJsonContracts.ATM_DEBIT_CARD_REQUEST = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static cashDeposit: CityJsonContracts.CASH_DEPOSIT = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static cashWithdraw: CityJsonContracts.CASH_WITHDRAW = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static chequeBookDelivery: CityJsonContracts.CHEQUE_BOOK_DELIVERY = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static chequeBookRequisition: CityJsonContracts.CHEQUE_BOOK_REQUISITION = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static chequeStopPaymentRange: CityJsonContracts.CHEQUE_STOP_PAYMENT_RANGE = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static chequeStopPaymentRangeCancel: CityJsonContracts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static chequeStopPaymentSingle: CityJsonContracts.CHEQUE_STOP_PAYMENT_SINGLE = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static chequeStopPaymentSingleCancel: CityJsonContracts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL = {
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
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
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
    static dpsAccount: CityJsonContracts.DPS_ACCOUNT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "customerId": "CB2183726",
        "accountType": "DPS",
        "linkAccountNumber": "2005246987526",

        "accountName": "MD Arif Gazi",
        "mobileNo": "01617877595",
        "gender": "Male",

        "schemeName": "Deposit Scheme",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "productTenor": "5 Years",
        "chargeAndVat": "BDT 10.00 + 1.50",

        "transactionDate": "19-JAN-2016",
        "openingDate": "15-Mar-2016",
        "maturityDate": "19-JAN-2021",
        "photo": "",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        }
    };
    static fixedDeposit: CityJsonContracts.FIXED_DEPOSIT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001(accountID)",
        "customerId": "CB2183726",
        "accountType": "TERM DEPOSIT",
        "linkAccountNumber": "2005246987526",
        "disclaimer": "DISCLAIMER:",


        "accountName": "MD Arif Gazi",
        "gender": "Male",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "transactionDate": "19-JAN-2016"
    };
    static fundTransfer: CityJsonContracts.FUND_TRANSFER = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static remittanceDisbursement: CityJsonContracts.REMITTANCE_DISBURSEMENT = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static remittanceRequest: CityJsonContracts.REMITTANCE_REQUEST = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static accountOpeningRequest: CityJsonContracts.ACCOUNT_OPENING = {
        "productName": "সিটি এজেন্ট সঞ্চয়ী হিসাব",

        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "disclaimer": "DISCLAIMER:",

        "accountName": "JAMAL UDDIN",
        "gender": "Male",
        "mobileNo": "01915067740",

        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",

        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    static cashDepositBearer: CityJsonContracts.CASH_DEPOSIT_BEARER = {
        "user": "26160101",
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

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": "",
        "bearerMobileNo": "0191506774",
        "bearerName": "Md. Ahsan Habi Rocky",
        "bearerPhoto": ""
    };

    static accountOpeningJointCustomerRequest: CityJsonContracts.ACCOUNT_OPENING_JOINT_CUSTOMER = {
        "productName": "সিটি এজেন্ট জয়েন্ট কাস্টমার",

        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "disclaimer": "DISCLAIMER:",

        "accountNames": ["JAMAL UDDIN", "Anis Bulbul"],
        "gender": "Male",
        "mobileNo": "01915067740",

        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",

        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photos": ["", ""]
    };

    static accountOpeningCorporateRequest: CityJsonContracts.ACCOUNT_OPENING_CORPORATE_CUSTOMER = {
        "productName": "সিটি এজেন্ট কর্পোরেট কাস্টমার",

        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "disclaimer": "DISCLAIMER:",

        "accountNames": ["JAMAL UDDIN", "Anis Bulbul"],
        "gender": "Male",
        "mobileNo": "01915067740",

        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",

        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photos": ["", ""]
    };

    static accountOpeningMinorRequest: CityJsonContracts.ACCOUNT_OPENING_MINOR_CUSTOMER = {
        "productName": "সিটি এজেন্ট মাইনর কাস্টমার",

        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "disclaimer": "DISCLAIMER:",

        "accountNames": ["JAMAL UDDIN", "Anis Bulbul"],
        "gender": "Male",
        "mobileNo": "01915067740",

        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",

        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",

        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photos": ["", ""]
    };
}