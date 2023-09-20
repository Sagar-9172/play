// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
timeout:50*1000,
  
expect:{
  timeout:5000
},
reporter: 'html',
  
use:{
  baseURL:'https://www.demoblaze.com/',
browserName:"chromium",
headless:false,
// trace:"on"
},

});

