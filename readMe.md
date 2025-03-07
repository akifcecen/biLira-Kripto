# Project Name
BiLira Kripto 

## Introduction
This project includes two test cases first one checks for product title on search page and basket page second one checks price infos on product and basket page


### Prerequisites
- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Steps
1. Clone the repository:
    ```bash
    git clone hhttps://github.com/akifcecen/biLira-Kripto.git
    cd  biLira-Kripto
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Install Playwright:
    ```bash
    npx playwright install
    ```
4. Run Tests:
    ```bash
    npm run test
    ```
## Project Structure
```
biLira-Kripto/
├── tests/                       # Test files
│   ├── searchModule.spec.ts     # Tests 
├── helpers/                     # Helpers 
│   ├── randomUtils.ts           # Random Functions 
├── locators/                    # Locators 
│   ├── main.locators.ts         # Main Web Elements 
├── pages/                       # Page Methods 
│   ├── search.page.ts           # Search Page Methods
│   ├── basePage.page.ts         # Base Page Methods
├── package.json                 # Project metadata and dependencies
├── playwright.config.js         # Playwright configuration file
└── README.md                    # Project documentation
```

## Running Tests
To run the tests, use the following command:
```bash
npm run test
```

## Show Test Report
To run the tests, use the following command:
```bash
npm run test:report
```
