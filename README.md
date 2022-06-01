## Basic Drink Inventory Website
> A basic react Website that tracks the inventory of alcoholic drinks and their mixing materials

Here is a [Live Demo](https://drink.tales-from-a-sysadmin.com)
----

### How to Run with Docker (recommended):
- Clone the repository
- cd into the API directory
- on Windows run: `./dockerRun.bat`
- on Linux run : `./dockerRun.sh`
- in another terminal `cd` back to react app
- edit the .env file for your wanted ip-address:port (make sure the port matches the exposed port from the api dockerRun default :8080) 
- on Windows run: `./dockerRun.bat`
- on Linux run : `./dockerRun.sh`
----

### How to Run without Docker (not recommended):
- Clone the repository
- cd into the API directory
- run `npm install`
- inside AmazonPriceFetcher.js change `var browser = await puppeteer.launch({...})` to `var browser = await puppeteer.launch()`
- run `node .`
- in another terminal `cd` back to react app
- run `npm run build`
- run `serve -s build` or host the static version from the build directory with your Webserver of choice
----

**TODO**
- [x] Add Mockup Design
- [x] Add Basic Mobile Support
- [x] Add API
- [x] Add API calls to DB/Storage
- [x] Fetch Data from API on Load
- [x] cleanup Layouting 
- [x] Refractor URL to API
- [x] Add Amazon price scraper
- [x] Add search functionality
- [x] Add routing
- [x] Add a Add Drink Button (name, amount, image?)
- [x] Add a Default Page in case API is not available
- [x] Add Remove Drink Button
- [x] Add visual Form validation
- [x] Add PWA Support
- [x] Add basic Docker support
- [ ] Add SSL cert
