// @ts-check
const { devices } = require('@playwright/test');


const config = {
  testDir: './tests',
  retries: 0,
  // testMatch:['tests/TUIDemo.spec.js'],
  workers: 1,
  timeout: 70 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  projects: [
    {
      //name: 'chromium',
      use: {  
        browserName: 'chromium',
       headless:false,
        screenshot:'on',
        video:'on',
        //video:'retain-on-failure',
       ignoreHttpErrors:true,
        //permissions:['geolocation'],
        ...devices['Desktop Chromium'],
        viewport: null,
        //viewport:{width:720,height:720},
        trace:'on',
        launchOptions: {
          args: ["--start-maximized"]
         // args: ["--start-maximized","--headed"]
      } 
      }
    }
     /*{
      name: 'firefox',
      use: {
        headless:false,
        screenshot:'on',
        video:'retain-on-failure',
        trace:'on',
        ...devices['Desktop Firefox'],
       // viewport: null,
        viewport: {width: 1440, height: 764},
        
      /*   launchOptions: {
          args: ["--kiosk"]
      }  
      },
     }, 
     */

    /*{
      name: 'webkit',
      use: { 
        headless:false,
        screenshot:'on',
        video:'retain-on-failure',
        ...devices['Desktop Safari'],
        viewport: {width: 1440, height: 764},
        trace:'on',
       /*  launchOptions: {
          args: ["--start-maximized"]
      } 
     },
    }, */
    
  ],

};
module.exports = config;

