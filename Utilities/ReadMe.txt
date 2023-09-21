npm run test (To Run All Test Script Files)
npx playwright test --debug (To run Tests in debug mode)
npm run test tests/TUIDemo.spec.js (To run specific test)
npm run test tests/TUIDemo.spec.js --debug (To run specific test in debug mode)
Alternative debug mode option:
Open Test case file:Keep break point at required line && Press: Ctrl+Shift+P ---->Select:Debug:debug npm script ---->Select: test playwright test
npx playwright show-report    ( Open HTML Report)
npx playwright test tests/TUIDemo.spec.js --reporter=line,allure-playwright
allure generate ./allure-results --clean
allure open ./allure-report
npx playwright test --project=chromium
test.describe.configute({mode:'parallel'});
test.describe.configute({mode:'serial'});
Ex:-   test.only('@Web Validate Login and Flight Search', async ({page}) => {})-- Grouping the test cases
npx playwright test --grep @Web
