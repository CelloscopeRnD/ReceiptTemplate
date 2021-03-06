﻿namespace CityJsonContracts {
    export interface MINI_STATEMENT {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        chargeAndVat: string,

        accountName: string,
        customerAddress: string,
        mobileNo: string,

        statement: [
            [string, string, string, string, string],
            [string, string, string, string, string],
            [string, string, string, string, string],
            [string, string, string, string, string],
            [string, string, string, string, string],
            [string, string, string, string, string],
            [string, string, string, string, string]
        ],

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface ACCOUNT_BALANCE {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        accountName: string,
        customerAddress: string,
        mobileNo: string,

        balanceAmount: string,
        inWords: string,
        chargeAndVat: string,
        balanceDate: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface ATM_DEBIT_CARD_CANCEL {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface ATM_DEBIT_CARD_DELIVERY {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface ATM_DEBIT_CARD_REQUEST {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CASH_DEPOSIT {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        accountName: string,
        customerAddress: string,
        mobileNo: string,

        depositAmount: string,
        inWords: string,
        chargeAndVat: string;
        depositDate: string,
        transactionCode: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface CASH_WITHDRAW {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        accountName: string,
        customerAddress: string,
        mobileNo: string,

        withdrawAmount: string,
        inWords: string,
        chargeAndVat: string,
        withdrawDate: string,
        transactionCode: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface CHEQUE_BOOK_DELIVERY {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CHEQUE_BOOK_REQUISITION {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CHEQUE_STOP_PAYMENT_RANGE {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CHEQUE_STOP_PAYMENT_RANGE_CANCEL {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CHEQUE_STOP_PAYMENT_SINGLE {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface CHEQUE_STOP_PAYMENT_SINGLE_CANCEL {
        accountName: string,
        accountNumber: string,
        agentName: string,
        balanceAmount: string,
        balanceAmountInWords: string,
        boothAddress: string,
        cardBrand: string,
        cardNumber: string,
        cardType: string,
        charge: string,
        chequeAmount: string,
        chequeLeafNumber: string,
        chequeLostReason: string,
        customerAddress: string,
        customerId: string,
        customerName: string,
        depositAmount: string,
        depositAmountInWords: string,
        dpsAccountType: string,
        linkAccountNumber: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        noOfLeave: string,
        photo: string,
        principalAmount: string,
        printDate: string,
        productTenor: string,
        profitRate: string,
        receiverAccountName: string,
        receiverName: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        retrieveFrom: string,
        savingsAccountType: string,
        statement: Array<Array<any>>
        termDepositAccountType: string,
        transactionCode: string,
        transactionDate: string,
        userId: string,
        withdrawAmount: string,
        withdrawsAmountInWords: string,
    };
    export interface DPS_ACCOUNT {
        user: string,
        agentName: string,
        boothAddress: string,

        customerId: string,
        accountType: string,
        linkAccountNumber: string,

        accountName: string,
        mobileNo: string,
        gender: string,

        schemeName: string,
        depositAmount: string,
        maturityAmount: string,
        productTenor: string,
        chargeAndVat: string,

        transactionDate: string,
        openingDate: string,
        maturityDate: string,
        printDate: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface FIXED_DEPOSIT {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,
        linkAccountNumber: string,
        disclaimer: string;

        accountName: string,
        gender: string,
        chargeAndVat: string,
        depositAmount: string,
        maturityAmount: string,
        maturityDate: string,
        mobileNo: string,
        printDate: string,
        principalAmount: string,
        profitRate: string,
        productTenor: string,
        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        transactionDate: string,
        photo: string
    };
    export interface FUND_TRANSFER {
        user: string,
        agentName: string,
        boothAddress: string,

        senderAccountNumber: string,
        customerId: string,
        accountType: string,

        senderAccountName: string,
        customerAddress: string,
        mobileNo: string,

        receiverAccountNumber: string,
        receiverAccountName: string,
        transferAmount: string,
        inWords: string,
        chargeAndVat: string,
        fundTransferDate: string,
        transactionCode: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface REMITTANCE_DISBURSEMENT {
        user: string,
        agentName: string,
        boothAddress: string,

        recipientName: string,
        exchangeHouse: string,
        pin: string,

        mobileNo: string,

        senderName: string,
        senderCountry: string,
        actualPayableAmount: string,
        amountInWords: string,

        idType: string,
        idNumber: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface REMITTANCE_REQUEST {
        user: string,
        agentName: string,
        boothAddress: string,

        recipientName: string,
        exchangeHouse: string,
        pin: string,

        mobileNo: string,

        senderName: string,
        senderCountry: string,
        actualPayableAmount: string,
        amountInWords: string,

        idType: string,
        idNumber: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface ACCOUNT_OPENING {
        productName: string,

        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        disclaimer: string,

        accountName: string,
        gender: string,
        mobileNo: string,

        initialDeposit: string,
        inWords: string,
        chargeAndVat: string,

        accountOpeningDate: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string
    };
    export interface CASH_DEPOSIT_BEARER {
        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        accountName: string,
        customerAddress: string,
        mobileNo: string,

        depositAmount: string,
        inWords: string,
        chargeAndVat: string;
        depositDate: string,
        transactionCode: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photo: string,
        bearerName: string,
        bearerMobileNo: string,
        bearerPhoto: string
    };
    export interface ACCOUNT_OPENING_JOINT_CUSTOMER {
        productName: string,

        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        disclaimer: string,

        accountNames: string[],
        gender: string,
        mobileNo: string,

        initialDeposit: string,
        inWords: string,
        chargeAndVat: string,

        accountOpeningDate: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photos: string[]
    };
    export interface ACCOUNT_OPENING_CORPORATE_CUSTOMER {
        productName: string,

        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        disclaimer: string,

        accountNames: string[],
        gender: string,
        mobileNo: string,

        initialDeposit: string,
        inWords: string,
        chargeAndVat: string,

        accountOpeningDate: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photos: string[]
    };
    export interface ACCOUNT_OPENING_MINOR_CUSTOMER {
        productName: string,

        user: string,
        agentName: string,
        boothAddress: string,

        accountNumber: string,
        customerId: string,
        accountType: string,

        disclaimer: string,

        accountNames: string[],
        gender: string,
        mobileNo: string,

        initialDeposit: string,
        inWords: string,
        chargeAndVat: string,

        accountOpeningDate: string,
        printDate: string,

        requestId: {
            ac: string,
            trt: string,
            amt: string,
            tr: string,
            trace: string,
            pin: string
        },
        photos: string[]
    };
}