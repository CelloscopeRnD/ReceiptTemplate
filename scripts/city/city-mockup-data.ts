class CityMockupData extends MockupData {
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
}