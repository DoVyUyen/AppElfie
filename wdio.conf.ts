
export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        './test/**/*.ts' // Path to  test files
    ],

    exclude: [],

    maxInstances: 10,

    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '15.0', // Match your device/emulator version
            'appium:deviceName': 'Pixel_9_API_35', // Match emulator/device name
            'appium:automationName': 'UIAutomator2',
            'appium:browserName': 'Chrome',
            'appium:chromedriverExecutable': '/opt/homebrew/bin/chromedriver',

        }
    ],
    
    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [
        ['appium', { command: 'appium' }], // Use Appium service
    ],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
