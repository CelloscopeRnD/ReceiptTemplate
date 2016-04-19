namespace AgraniJsonContracts {
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
            [string, string, string, string],
            [string, string, string, string],
            [string, string, string, string],
            [string, string, string, string],
            [string, string, string, string]
        ],

        availableBalance: string,

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
}