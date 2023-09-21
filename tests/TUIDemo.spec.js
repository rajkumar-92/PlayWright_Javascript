const { test, expect } = require('@playwright/test');
const { flightSearch } = require('../pages/TUISearch.page');
const { flightSearchResults } = require('../pages/TUISearchResult.page');
const { flightoptions } = require('../pages/TUIFlightOptions.page');
const { passengerInsurance } = require('../pages/TUIExtraOptions.page');
const { passengerInformation } = require('../pages/TUIPassengerDetails.page');
const { makePayment } = require('../pages/TUIPayment.page');
const { bookingConfirm } = require('../pages/TUIBookingConfirmation.page');
const TUIInputData = require('../Utilities/testData.json');

var TUISearchpage, TUISearchResultpage, TUIFlightOptionspage, TUIExtraOptionspage;
var TUIPassengerDetailspage, TUIPaymentpage, TUIBookingConfirmationpage;

test.describe('POC Demo on TUI B2B-BE FO Site: Two-way flight book flow', async () => {
  test.only('Demo.spec-Validate FO End to End Flight Booking Scenario', async ({page}) => {
    await page.goto('https://www.tuifly.be/flight');
    //await page.goto('https://www.tuifly.be/flight', {waitUntil: 'networkidle'});
    TUISearchpage = new flightSearch(page)
    await TUISearchpage.accept();
    //await TUISearchpage.selectPrefLanguage();
    //await expect(page).toHaveTitle('Flights now TUI | Thomson TUI Airways')
    await TUISearchpage.ClickOn_departPort();
    await TUISearchpage.selectDepartPort(TUIInputData.departPort);
    await TUISearchpage.ClickOn_destinationPort();
    await TUISearchpage.selectDestinationtPort(TUIInputData.arrivalPort);
    await TUISearchpage.selectFromDate(TUIInputData.departDate[0], TUIInputData.departDate[1]);
    await TUISearchpage.selectToDate(TUIInputData.arrivalDate[0], TUIInputData.arrivalDate[1]);
    await TUISearchpage.selectPassengers(TUIInputData.adults, TUIInputData.children);
    await TUISearchpage.selectchildAge(TUIInputData.adults, TUIInputData.childAge, TUIInputData.children);
    await TUISearchpage.clickOnSearchBtn();


    TUISearchResultpage = new flightSearchResults(page)
    await TUISearchResultpage.OutBound_ListOfFlights();
    await TUISearchResultpage.selectCheapestOutboundFlight();
    await TUISearchResultpage.Return_ListOfFlights();
    await TUISearchResultpage.selectCheapestReturnFlight();
    await TUISearchResultpage.clickContinueButton();


  //await page.waitForLoadState("networkidle");
    TUIFlightOptionspage = new flightoptions(page)
    //await TUIFlightOptionspage.selectOutBound_BaggageWeight(TUIInputData.OutboundBaggage)
    //await TUIFlightOptionspage.clickonCheckBox();
    //await TUIFlightOptionspage.selectReturn_BaggageWeight(TUIInputData.ReturnBaggage)
    await TUIFlightOptionspage.clickContinueButtonOnSeatBaggage();


   //await page.waitForLoadState("networkidle");
    TUIExtraOptionspage = new passengerInsurance(page)
    /*await TUIExtraOptionspage.selectInsurance(TUIInputData.insuranceOption1, TUIInputData.adultDOB[0], TUIInputData.adultDOB[1], TUIInputData.adultDOB[2],
      TUIInputData.childDOB[0], TUIInputData.childDOB[1], TUIInputData.childDOB[2],
      TUIInputData.infantDOB[0], TUIInputData.infantDOB[1], TUIInputData.infantDOB[2]);*/
    await TUIExtraOptionspage.clickContinueButtonOnInsurance();

   
    await page.waitForLoadState("networkidle");
    TUIPassengerDetailspage = new passengerInformation(page)
   //await page.pause()
    await TUIPassengerDetailspage.adult1_firstName(TUIInputData.adultFirstName);
    await TUIPassengerDetailspage.adult1_SurName(TUIInputData.adultSurName);
    await TUIPassengerDetailspage.selectGender(TUIInputData.adultGender);
    await TUIPassengerDetailspage.selectAdult1_DOB(TUIInputData.adultDOB[0],TUIInputData.adultDOB[1],TUIInputData.adultDOB[2]);
    await TUIPassengerDetailspage.adult1_nationality(TUIInputData.Nationality);
    await TUIPassengerDetailspage.adult1_Country(TUIInputData.Country);
    await TUIPassengerDetailspage.adult1_address(TUIInputData.address_Street);
    await TUIPassengerDetailspage.adult1_HouseNum(TUIInputData.houseNo);
    await TUIPassengerDetailspage.adult1_postalCode(TUIInputData.postalCode);
    await TUIPassengerDetailspage.adult1_Residency(TUIInputData.residency);
    await TUIPassengerDetailspage.inputMobileNum(TUIInputData.mobileNo[0], TUIInputData.mobileNo[1]);
    await TUIPassengerDetailspage.adult1_emailAddress(TUIInputData.email);
   // await page.pause();
    await TUIPassengerDetailspage.child1_FirstName(TUIInputData.childFirstName);
    await TUIPassengerDetailspage.child1_LastName(TUIInputData.childSurName);
    await TUIPassengerDetailspage.child1_Gender(TUIInputData.childGender);
    await TUIPassengerDetailspage.selectchild1_DOB(TUIInputData.childDOB[0],TUIInputData.childDOB[1],TUIInputData.childDOB[2]);
    await TUIPassengerDetailspage.infant_Notborn();
    await TUIPassengerDetailspage.homekeeper_LastName(TUIInputData.homekeeperLastName);
    await TUIPassengerDetailspage.input_HomeKeeperNum(TUIInputData.homekeeperNo[0], TUIInputData.homekeeperNo[1]); 
    await TUIPassengerDetailspage.agreeCheckbox();
   // await page.pause();
    await TUIPassengerDetailspage.furtherButton();

  },60000);

  /*test('Verify Payment and Booking Details', async () => {
    AllureReporter.startStep('Flight Payment Selection Page');
    TUIPaymentpage = new makePayment()
    await TUIPaymentpage.skip_payment();

    TUIBookingConfirmationpage = new bookingConfirm()
    AllureReporter.startStep('Flight Confirmation Page');
    let bookingref = await TUIBookingConfirmationpage.booking_referenceNum.textContent();
    console.log("Booking Reference is :" + bookingref);
    AllureReporter.addStep(`Booking Reference Number is ${bookingref}`);
    await page.pause(2000)
    await TUIBookingConfirmationpage.closingPopBtn();
  });*/

});


