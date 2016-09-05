﻿class AgrainMockupData {
    static miniStatement: AgraniJsonContracts.MINI_STATEMENT = {
        "user": "26160101",
        "agentId": "123456",

        "accountName": "JAMAL UDDIN Agrani",
        "accountNumber": "2802183726001",
        "accountType": "SAVINGS ACCOUNT",
        "traceId": "123456",

        "chargeAndVat": "BDT 10.00 + 1.50",
        
        "statement": [
            ["22-AUG-2015", "6598792141508220823344", "Cash Deposit", "(+500.00)"],
            ["22-AUG-2015", "7373822120150822054523", "Cash Withdrawal", "(-1.50)"],
            ["22-AUG-2015", "9325469871321673165405", "Cash Withdrawal", "(-8.50)"],
            ["22-AUG-2015", "6714654658792141803315", "Cash Withdrawal", "(-250.00)"],
            ["22-AUG-2015", "2233468794150822082323", "Cash Withdrawal", "(-566.00)"]
        ],

        "availableBalance": "Tk 4704.00"

        //"boothAddress": "Outlet Name + District, Upzilla",
        //"customerId": "CB2183726",
        //"agentName": "NAME OF AGENT",
        //"customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        //"mobileNo": "01915067740",
        //"requestId": {
        //    "ac": "1234567890123",
        //    "trt": "IFR",
        //    "amt": "900",
        //    "tr": "CB1234567",
        //    "trace": "2132141234567123",
        //    "pin": "1234"
        //},
        //"photo": ""
    };
    static accountBalance: AgraniJsonContracts.ACCOUNT_BALANCE = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static atmDebitCardCancel: AgraniJsonContracts.ATM_DEBIT_CARD_CANCEL = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static atmDebitCardDelivery: AgraniJsonContracts.ATM_DEBIT_CARD_DELIVERY = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static atmDebitCardRequest: AgraniJsonContracts.ATM_DEBIT_CARD_REQUEST = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static cashDeposit: AgraniJsonContracts.CASH_DEPOSIT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static cashWithdraw: AgraniJsonContracts.CASH_WITHDRAW = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeBookDelivery: AgraniJsonContracts.CHEQUE_BOOK_DELIVERY = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeBookRequisition: AgraniJsonContracts.CHEQUE_BOOK_REQUISITION = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeStopPaymentRange: AgraniJsonContracts.CHEQUE_STOP_PAYMENT_RANGE = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeStopPaymentRangeCancel: AgraniJsonContracts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeStopPaymentSingle: AgraniJsonContracts.CHEQUE_STOP_PAYMENT_SINGLE = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static chequeStopPaymentSingleCancel: AgraniJsonContracts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "agentId": "123456",
        "traceId": "123456",
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
    static dpsAccount: AgraniJsonContracts.DPS_ACCOUNT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static fixedDeposit: AgraniJsonContracts.FIXED_DEPOSIT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static fundTransfer: AgraniJsonContracts.FUND_TRANSFER = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static remittanceDisbursement: AgraniJsonContracts.REMITTANCE_DISBURSEMENT = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "transactionCode": "73970008",
        "traceId": "123456",
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
    static remittanceRequest: AgraniJsonContracts.REMITTANCE_REQUEST = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
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
    static accountOpeningRequest: AgraniJsonContracts.ACCOUNT_OPENING = {
        "productName": "Savings",

        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "agentId": "123456",
        "traceId": "123456",
        "boothAddress": "Outlet Name + District, Upzilla",

        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",

        "disclaimer": "DISCLAIMER:",

        "accountName": "JAMAL UDDIN",
        "customerMnemonic": "D000000007",
        "accountMnemonic": "D0000007D",
        "mobileNo": "01915067740",

        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",

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
    static accountActivation: AgraniJsonContracts.ACCOUNT_ACTIVATION = {
        "user": "26160101",
        "agentId": "123456",

        "activationDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "traceId": "123456",

        "accountName": "JAMAL UDDIN",
        "accountNumber": "2802183726001",
        "accountType": "SAVINGS ACCOUNT",
        "mobileNo": "01915067740",
        "initialDepositAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",

        "printDate": "15-MAR-2016 01:00:57 PM"
    };
}