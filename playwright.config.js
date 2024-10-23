// playwright.config.js
const config = {
testDir: './tests'
use: {
screenshot: 'only-on-failure',
video: 'retain-on-failure',
},
reporter: [
['list'],
[
'playwright-qase-reporter',
{
mode: 'testops',
debug: false,
testops: {
api: {
token: '<playwright-app-token>',
},
project: 'PT', // Replace <DEMO> with your project code
uploadAttachments: true,
run: {
complete: true,
},
},
},
],
],
};

module.exports = config;
