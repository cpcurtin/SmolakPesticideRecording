/*****************************************************************************
 Smolak Farms Spray Note Record Generation

 This script's purpose is to automate recording pesticide records a Smolak Farms. This script works in conjunction with the Pesticide Record Keeping Form Template spreadsheet & the Smolak Farms Pesticide Record Keeping Form.

Last updated: 3/8/25 by Conor Curtin - Integration with Clasp
*****************************************************************************/

// License # for authorized applicators
const michaelLicNo = 'PC-0019073';
const jasonLicNo = 'AL-0037420';

// Class to store data about application conditions
class Application{ 
  constructor(email, date, start, end, weather, applicator, property, crop, field1, field2, area){
    this.applicatorEmail = email
    this.dateofApplication = date;
    this.startTime = start;
    this.endTime = end;
    this.weatherConditions = weather;
    this.applicatorName = applicator;
    this.property = property;
    this.crop = crop;
    this.NAfield = field1;
    this.BoxField = field2;
    this.areaTreated = area;
    this.licNo = "";
  };
  getLicNo(){ // Method to fetch license # based on applicator name
    if (this.applicatorName == "Jason Girard"){
      this.licNo = jasonLicNo;
    }
    else if (this.applicatorName == 'H. Michael Smolak Jr.'){
      this.licNo = michaelLicNo;
    };
  };
}

// Class to store data about chemicals applied
class Chemical{ 
  constructor(name, EPAreg, ingredient, RoA, amtUsed, targetPest, applicationMethod, REI, unit, notes, next, calculatedUse){
    this.name = name;
    this.epaRegNo = EPAreg;
    this.activeIngredient = ingredient;
    this.rateOfApplication = RoA;
    this.totalAmtUsed = amtUsed;
    this.targetPest = targetPest;
    this.applicationMethod = applicationMethod;
    this.REI = REI;
    this.measurementUnit = unit;
    this.notes = notes;
    this.next = next;
    this.calculatedUse = calculatedUse;
  };
};

const todaysApplication = new Application("", "", "", "", "", "", "", "", "", "", "");
const Chemical1 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemical2 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemical3 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemical4 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemical5 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemical6 = new Chemical("", "", "", "", "", "", "", "", "", "", "", "");
const Chemicals = [Chemical1, Chemical2, Chemical3, Chemical4, Chemical5, Chemical6];

function generateSprayNotes(submission) {
  //console.log("%s", JSON.stringify(submission))
  let noteValues = submission.namedValues; // Grab submission data

  for (Key in noteValues){
    // Convert value at index & data at index to string for strcmp
    var key = Key.toString(); // This is the question name
    var data = noteValues[Key].toString(); // This is the response
    //console.log(key);

    // Compare to questions. If match, store response for that question in variable
    if (key == 'Select Your Email Address'){
      todaysApplication.applicatorEmail = data;
    }
    if (key == 'Date of Application'){
      todaysApplication.dateofApplication = data;
    };
    if (key == 'Start Time'){
      todaysApplication.startTime = data;
    };
    if (key == 'End Time'){
      todaysApplication.endTime = data;
    };
    if (key == 'Weather Conditions'){
      todaysApplication.weatherConditions = data;
    };
    if (key == 'Applicator\'s Name'){
      todaysApplication.applicatorName = data;
      todaysApplication.getLicNo();
    };
    if (key == 'Property'){
      todaysApplication.property = data;
      //console.log('Property: ' + property);
    };
    if (key == 'NA Field # (Select all that apply)'){
      todaysApplication.NAField = data;
      //console.log('Key: ' + key);
      //console.log('NA Field: ' + NAField);
    };
    if (key == 'Boxford Field # (Select all that apply)'){
      todaysApplication.BoxField = data;
      //console.log('Key: ' + key);
      //console.log('Box Field: ' + BoxField);
    };
    if (key == 'What crop had pesticides applied? (Select all that apply)'){
      todaysApplication.crop = data;
      //console.log('Crop planted: ' + crop);
    };
    if (key == 'How many acres were treated? (Number only, no units)'){
      todaysApplication.areaTreated = data;
    };

    // Chemical 1 Information
    if (key == 'Was chemical 1 an insecticide?'){ // Format: If the user said they used this type of chemical, 
      var chemical1insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 1? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported
                                                                                             // in this field. Otherwise, ignore this question.
        Chemicals[0].name = data;
        //console.log('Chem: ' + chemicals[0]);
    };

    if (key == 'Was chemical 1 a bacterial pesticide?'){
      var chemical1bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 1? (Select only one)' && data != ""){
      Chemicals[0].name = data;
    };

    if (key == 'Was chemical 1 a fungicide?'){
      var chemical1fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 1? (Select only one)' && data != ""){
      Chemicals[0].name = data;
    };

    if (key == 'Was chemical 1 an herbicide?'){
      var chemical1herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 1? (Select only one)' && data != ""){
      Chemicals[0].name = data;
    };

    if (key == 'Was chemical 1 a fertilizer?'){
      var chemical1fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 1? (Select only one)' && data != ""){
      Chemicals[0].name = data;
    };

    if (key == 'Was chemical 1 a pesticide that does not fall into the aforementioned categories?'){
      chemical1Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 1? (Select only one)' && data != ""){
      Chemicals[0].name = data;
    };

    if (key == 'What is the EPA Registration Number for chemical 1?'){
      Chemicals[0].epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 1?'){
      Chemicals[0].activeTingredient = data;
    };
    if (key == 'At what rate per acre was chemical 1 applied? (Number only, no units)'){
      Chemicals[0].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 1 that was applied? (Number only, no units)'){
      Chemicals[0].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 1 measured in?'){
      Chemicals[0].measurementUnit = data;
    };
    if (key == "What was chemical 1's target pest?"){
      Chemicals[0].targetPest = data;
    };
    if (key == 'What was the application method for chemical 1?'){
      Chemicals[0].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 1, if any?'){
      Chemicals[0].REI = data;
    };
    if (key == 'Enter other notes for chemical 1 here.'){
      Chemicals[0].notes = data;
    };
    if (key == 'Was a second pesticide applied at this time?'){
      Chemicals[0].next = data;
    };

    // Chemical 2 Information
    if (key == 'Was chemical 2 an insecticide?'){ // Format: If the user said they used this type of chemical, 
      var chemical2insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 2? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                             // in this field. Otherwise, ignore this question.
        Chemicals[1].name = data;
    };

    if (key == 'Was chemical 2 a bacterial pesticide?'){
      var chemical2bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 2? (Select only one)' && data != ""){
      Chemicals[1].name = data;
    };

    if (key == 'Was chemical 2 a fungicide?'){
      var chemical2fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 2? (Select only one)' && data != ""){
      Chemicals[1].name = data;
    };

    if (key == 'Was chemical 2 an herbicide?'){
      var chemical2herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 2? (Select only one)' && data != ""){
      Chemicals[1].name = data;
    };

    if (key == 'Was chemical 2 a fertilizer?'){
      var chemical2fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 2? (Select only one)' && data != ""){
      Chemicals[1].name = data;
    };

    if (key == 'Was chemical 2 a pesticide that does not fall into the aforementioned categories?'){
      var chemical2Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 2? (Select only one)' && data != ""){
      Chemicals[1].name = data;
    };
    
    if (key == 'What is the EPA Registration Number for chemical 2?'){
      Chemicals[1].epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 2?'){
      Chemicals[1].activeIngredient = data;
    };
    if (key == 'At what rate per acre was chemical 2 applied? (Number only, no units)'){
      Chemicals[1].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 2 that was applied? (Number only, no units)'){
      Chemicals[1].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 2 measured in?'){
      Chemicals[1].measurementUnit = data;
    };
    if (key == "What was chemical 2's target pest?"){
      Chemicals[1].targetPest = data;
    };
    if (key == 'What was the application method for chemical 2?'){
      Chemicals[1].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 2, if any?'){
      Chemicals[1].REI = data;
    };
    if (key == 'Enter other notes for chemical 2 here.'){
      Chemicals[1].notes = data;
    };
    if (key == 'Was a third pesticide applied at this time?'){
      Chemicals[1].next = data;
    };

    // Chemical 3 Information
    if (key == 'Was chemical 3 an insecticide?'){ // Format: If the user said they used this type of chemical, 
      var chemical3insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 3? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                             // in this field. Otherwise, ignore this question.
        Chemicals[2].name = data;
    };

    if (key == 'Was chemical 3 a bacterial pesticide?'){
      var chemical3bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 3? (Select only one)' && data != ""){
      Chemicals[2].name = data;
    };

    if (key == 'Was chemical 3 a fungicide?'){
      var chemical3fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 3? (Select only one)' && data != ""){
      Chemicals[2].name = data;
    };

    if (key == 'Was chemical 3 an herbicide?'){
      var chemical3herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 3? (Select only one)' && data != ""){
      Chemicals[2].name = data;
    };

    if (key == 'Was chemical 3 a fertilizer?'){
      var chemical3fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 3? (Select only one)' && data != ""){
      Chemicals[2].name = data;
    };

    if (key == 'Was chemical 3 a pesticide that does not fall into the aforementioned categories?'){
      var chemical3Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 3? (Select only one)' && data != ""){
      Chemicals[2].name = data;
    };
    
    if (key == 'What is the EPA Registration Number for chemical 3?'){
      Chemicals[2].epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 3?'){
      Chemicals[2].activeIngredient = data;
    };
    if (key == 'At what rate per acre was chemical 3 applied? (Number only, no units)'){
      Chemicals[2].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 3 that was applied? (Number only, no units)'){
      Chemicals[2].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 3 measured in?'){
      Chemicals[2].measurementUnit = data;
    };
    if (key == "What was chemical 3's target pest?"){
      Chemicals[2].targetPest = data;
    };
    if (key == 'What was the application method for chemical 3?'){
      Chemicals[2].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 3, if any?'){
      Chemicals[2].REI = data;
    };
    if (key == 'Enter other notes for chemical 3 here.'){
      Chemicals[2].notes = data;
    };
    if (key == 'Was a fourth pesticide applied at this time?'){
      Chemicals[2].next = data;
    };

    // Chemical 4 Information
    if (key == 'Was chemical 4 an insecticide?'){ 
      var chemical4insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 4? (Select only one)' && data != ""){ 
        Chemicals[3].name = data;
    };

    if (key == 'Was chemical 4 a bacterial pesticide?'){
      var chemical4bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 4? (Select only one)' && data != ""){
      Chemicals[3].name = data;
    };

    if (key == 'Was chemical 4 a fungicide?'){
      var chemical4fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 4? (Select only one)' && data != ""){
      Chemicals[3].name = data;
    };

    if (key == 'Was chemical 4 an herbicide?'){
      var chemical4herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 4? (Select only one)' && data != ""){
      Chemicals[3].name = data;
    };

    if (key == 'Was chemical 4 a fertilizer?'){
      var chemical4fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 4? (Select only one)' && data != ""){
      Chemicals[3].name = data;
    };

    if (key == 'Was chemical 4 a pesticide that does not fall into the aforementioned categories?'){
      var chemical4Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 4? (Select only one)' && data != ""){
      Chemicals[3].name = data;
    };
    
    if (key == 'What is the EPA Registration Number for chemical 4?'){
      Chemicals[3].epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 4?'){
      Chemicals[3].activeIngredient = data;
    };
    if (key == 'At what rate per acre was chemical 4 applied? (Number only, no units)'){
      Chemicals[3].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 4 that was applied? (Number only, no units)'){
      Chemicals[3].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 4 measured in?'){
      Chemicals[3].measurementUnit = data;
    };
    if (key == "What was chemical 4's target pest?"){
      Chemicals[3].targetPest = data;
    };
    if (key == 'What was the application method for chemical 4?'){
      Chemicals[3].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 4, if any?'){
      Chemicals[3].REI = data;
    };
    if (key == 'Enter other notes for chemical 4 here.'){
      Chemicals[3].notes = data;
    };
    if (key == 'Was a fifth pesticide applied at this time?'){
      Chemicals[3].next = data;
    };

    // Chemical 5 Information
    if (key == 'Was chemical 5 an insecticide?'){ 
      var chemical5insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 5? (Select only one)' && data != ""){
        Chemicals[4].name = data;
    };

    if (key == 'Was chemical 5 a bacterial pesticide?'){
      var chemical5bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 5? (Select only one)' && data != ""){
      Chemicals[4].name = data;
    };

    if (key == 'Was chemical 5 a fungicide?'){
      var chemical5fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 5? (Select only one)' && data != ""){
      Chemicals[4].name = data;
    };

    if (key == 'Was chemical 5 an herbicide?'){
      var chemical5herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 5? (Select only one)' && data != ""){
      Chemicals[4].name = data;
    };

    if (key == 'Was chemical 5 a fertilizer?'){
      var chemical5fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 5? (Select only one)' && data != ""){
      Chemicals[4].name = data;
    };

    if (key == 'Was chemical 5 a pesticide that does not fall into the aforementioned categories?'){
      var chemical5Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 5? (Select only one)' && data != ""){
      Chemicals[4].name = data;
    };
    
    if (key == 'What is the EPA Registration Number for chemical 5?'){
      Chemical5.epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 5?'){
      Chemicals[4].activeIngredient = data;
    };
    if (key == 'At what rate per acre was chemical 5 applied? (Number only, no units)'){
      Chemicals[4].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 5 that was applied? (Number only, no units)'){
      Chemicals[4].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 5 measured in?'){
      Chemicals[4].measurementUnit = data;
    };
    if (key == "What was chemical 5's target pest?"){
      Chemicals[4].targetPest = data;
    };
    if (key == 'What was the application method for chemical 5?'){
      Chemicals[4].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 5, if any?'){
      Chemicals[4].REI = data;
    };
    if (key == 'Enter other notes for chemical 5 here.'){
      Chemicals[4].notes = data;
    };
    if (key == 'Was a sixth pesticide applied at this time?'){
      Chemicals[4].next = data;
    };

    // Chemical 6 Information
    if (key == 'Was chemical 6 an insecticide?'){ 
      var chemical6insecticide = data;
    };
    if (key == 'If yes, what insecticide was chemical 6? (Select only one)' && data != ""){ 
        Chemicals[5].name = data;
    };

    if (key == 'Was chemical 6 a bacterial pesticide?'){
      var chemical6bacterial = data;
    };
    if (key == 'If yes, which bacterial pesticide was chemical 6? (Select only one)' && data != ""){
      Chemicals[5].name = data;
    };

    if (key == 'Was chemical 6 a fungicide?'){
      var chemical6fungicide = data;
    };
    if (key == 'If yes, which fungicide was chemical 6? (Select only one)' && data != ""){
      Chemicals[5].name = data;
    };

    if (key == 'Was chemical 6 an herbicide?'){
      var chemical6herbicide = data;
    };
    if (key == 'If yes, which herbicide was chemical 6? (Select only one)' && data != ""){
      Chemicals[5].name = data;
    };

    if (key == 'Was chemical 6 a fertilizer?'){
      var chemical6fertilizer = data;
    };
    if (key == 'If yes, which fertilizer was chemical 6? (Select only one)' && data != ""){
      Chemicals[5].name = data;
    };

    if (key == 'Was chemical 6 a pesticide that does not fall into the aforementioned categories?'){
      var chemical6Other = data;
    };
    if (key == 'If yes, which pesticide was chemical 6? (Select only one)' && data != ""){
      Chemicals[5].name = data;
    };
    
    if (key == 'What is the EPA Registration Number for chemical 6?'){
      Chemicals[5].epaRegNo = data;
    };
    if (key == 'What is the active ingredient in chemical 6?'){
      Chemicals[5].activeIngredient = data;
    };
    if (key == 'At what rate per acre was chemical 6 applied? (Number only, no units)'){
      Chemicals[5].rateOfApplication = data;
    };
    if (key == 'What was the total amount of chemical 6 that was applied? (Number only, no units)'){
      Chemicals[5].totalAmtUsed = data;
    };
    if (key == 'What unit is chemical 6 measured in?'){
      Chemicals[5].measurementUnit = data;
    };
    if (key == "What was chemical 6's target pest?"){
      Chemicals[5].targetPest = data;
    };
    if (key == 'What was the application method for chemical 6?'){
      Chemicals[5].applicationMethod = data;
    };
    if (key == 'What is the REI for chemical 6, if any?'){
      Chemicals[5].REI = data;
    };
    if (key == 'Enter other notes for chemical 6 here.'){
      Chemicals[5].notes = data;
    };
  };

  // Configure duplicate spreadsheet to record data in
  var newSheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1T5LgJSB6vy3BhcA2JVZ1yKAHJN72-yCTf3SQrt3PgK0/edit?gid=0#gid=0').copy(todaysApplication.dateofApplication + "_" + todaysApplication.crop); // Create new sheet with name format "CurentDate_Crop"
  var newSheetUrl = newSheet.getUrl();
  var newSheetId = newSheet.getId();

  // Save data from form into spreadsheet
  for (var i = 0; i < 6; i ++){
    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 1,1).setValue(todaysApplication.dateofApplication);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 2, 1).setValue(todaysApplication.startTime);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 3, 1).setValue(todaysApplication.endTime);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 4, 1).setValue(todaysApplication.weatherConditions);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 5, 1).setValue(todaysApplication.applicatorName);

    // Set license # based on applicator's name
    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 6, 1).setValue(todaysApplication.licNo);

    // Select fields treated based on which property is selected
    if (todaysApplication.property == '315 So. Bradford St., NA'){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 7, 1).setValue(todaysApplication.NAField);
    };
    if (todaysApplication.property == '494 Ipswitch Rd., Boxford'){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 7, 1).setValue(todaysApplication.BoxField);
    };

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 8, 1).setValue(todaysApplication.crop);

    if (todaysApplication.areaTreated == '1'){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 9, 1).setValue(todaysApplication.areaTreated + " acre");
    };
    if (todaysApplication.areaTreated != '1'){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 9, 1).setValue(todaysApplication.areaTreated + " acres");
    };

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 10, 1).setValue(Chemicals[i].name);

    // NEED TO DO
    //SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 11, 1).setValue(Chemicals[i].epaRegNo);

    //SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 12 , 1).setValue(Chemicals[i].activeIngredient);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 13, 1).setValue(Chemicals[i].rateOfApplication + " " + Chemicals[i].measurementUnit + "/acre");
    
    // Calculate how much chemical should have been used, then enter which ever value is correct
    Chemicals[i].calculatedUse = calculateConsumption(todaysApplication.areaTreated, Chemicals[i].rateOfApplication);
    if (Chemicals[i].calculatedUse == Chemicals[i].totalAmtUsed){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 14, 1).setValue(Chemicals[i].totalAmtUsed + " " + Chemicals[i].measurementUnit);
    };
    if (Chemicals[i].calculatedUse != Chemicals[i].totalAmtUsed){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 14, 1).setValue(Chemicals[i].calculatedUse + " " + Chemicals[i].measurementUnit);
    };

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 15, 1).setValue(Chemicals[i].targetPest);

    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 16, 1).setValue(Chemicals[i].targetPest);

    if (Chemicals[i].REI == ""){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 17, 1).setValue("None");
    };
    if (Chemicals[i].REI != ""){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 17, 1).setValue(Chemicals[i].REI);
    };

    if (Chemicals[i].notes == ""){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 18, 1).setValue("None");
    };
    if (Chemicals[i].notes != ""){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 18, 1).setValue(Chemicals[i].notes);
    };

    if (Chemicals[i].next != 'Yes'){ // If there is no more crops, exit
      i = 5;
    };
  };
  SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").autoResizeRows(1, 18); // Auto-fit the row height to display all data

  // Call functon to move the new sheet
  moveSheet(newSheetId);

  // Give user permissions to edit generated sheet, then email a confirmation with any error messages
  //sendEmail(newSheetUrl, applicatorEmail, calculatedUse, totalAmtApplied, nextChem, chemUnits);
  sendEmail(newSheetUrl, todaysApplication, Chemicals)
  
};

function calculateConsumption(area, rate){ // Calculate expected chem consumption based on area & rate entered
  var num = area * rate;
  return num.toFixed(3); // Cut off a 3 decimal places. This is more precise than we can measure
};

function moveSheet(sheetID){ // Move generated sheet to new folder
  var parentFolder = DriveApp.getFolderById('1kO65wnzXl_eWm_HzNmZXRV-QiDFv8_0A');
  var childFolder = DriveApp.getFolderById('1EhUPppNCkBHPTysfLYHryiiYMm3t7PVN');
  DriveApp.getFileById(sheetID).moveTo(parentFolder).moveTo(childFolder);
};

function sendEmail(sheetURL, application, chemicals){ // Send confirmation email to user with any error messages
  var difference = [];
  var message = "Thank you for recording your recent pesticide application. You can now access this record through this link: " + sheetURL;
  for (var i = 0; i < chemicals.length; i++){ // Check if total amt consumed is correct/ If not, alert user in confirmation email.
    if (chemicals[i].calculatedUse != chemicals[i].totalAmtUsed){
      message = message + ("\nThe total consumption for chemical " + (i+1) + " is incorrect. You entered " + chemicals[i].totalAmtUsed + chemicals[i].measurementUnit + ". It should be " + chemicals[i].calculatedUse + chemicals[i].measurementUnit + ". Please check your entry. This application will not be removed from the chemical inventory." );
    };
    if (chemicals[i].next != 'Yes'){ // If there are no more chemicals, exit. This is the same bounds as the spreadsheet writing loop
      i = 5;
    };
  };
  try{
    SpreadsheetApp.openByUrl(sheetURL).addEditor(todaysApplication.applicatorEmail);
    MailApp.sendEmail(todaysApplication.applicatorEmail, "Your Recent Pesticide Record Creation", message);
  }
  catch{
    MailApp.sendEmail(todaysApplication.applicatorEmail, "Error in Submission", "Could not add editor to new pesticide record");
  };
};

