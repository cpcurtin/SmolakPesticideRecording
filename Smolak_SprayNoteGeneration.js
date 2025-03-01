function generateSprayNotes(submission) {
    //console.log("%s", JSON.stringify(submission))
    var noteValues = submission.namedValues; // Grab submission data
    var michaelLicNo = 'PC-0019073';
    var jasonLicNo = 'AL-0037420';
    var chemicals = [];
    var rateOfApplication = [];
    var totalAmtApplied = [];
    var targetPest = [];
    var applicationMethod = [];
    var REI = [];
    var chemUnits = [];
    var chemNotes = [];
    var nextChem = [];
    var chemEPA = [];
    var chemIngredient = [];
    var calculatedUse = [];
    for (Key in noteValues){
      // Convert value at index & data at index to string for strcmp
      var key = Key.toString(); // This is the question name
      var data = noteValues[Key].toString(); // This is the response
      //console.log(key);
  
      // Compare to questions. If match, store response for that question in variable
      if (key == 'Select Your Email Address'){
        var applicatorEmail = data;
      }
      if (key == 'Date of Application'){
        var dateOfApplication = data;
      };
      if (key == 'Start Time'){
        var startTime = data;
      };
      if (key == 'End Time'){
        var endTime = data;
      };
      if (key == 'Weather Conditions'){
        var weatherConditions = data;
      };
      if (key == 'Applicator\'s Name'){
        var applicatorName = data;
      };
      if (key == 'Property'){
        var property = data;
        //console.log('Property: ' + property);
      };
      if (key == 'NA Field # (Select all that apply)'){
        var NAField = data;
        //console.log('Key: ' + key);
        //console.log('NA Field: ' + NAField);
      };
      if (key == 'Boxford Field # (Select all that apply)'){
        var BoxField = data;
        //console.log('Key: ' + key);
        //console.log('Box Field: ' + BoxField);
      };
      if (key == 'What crop had pesticides applied? (Select all that apply)'){
        var crop = data;
        //console.log('Crop planted: ' + crop);
      };
      if (key == 'How many acres were treated? (Number only, no units)'){
        var fieldArea = data;
      };
  
      // Chemical 1 Information
      if (key == 'Was chemical 1 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical1insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 1? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[0] = data;
          //console.log('Chem: ' + chemicals[0]);
      };
  
      if (key == 'Was chemical 1 a bacterial pesticide?'){
        var chemical1bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 1? (Select only one)' && data != ""){
        chemicals[0] = data;
      };
  
      if (key == 'Was chemical 1 a fungicide?'){
        var chemical1fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 1? (Select only one)' && data != ""){
        chemicals[0] = data;
      };
  
      if (key == 'Was chemical 1 an herbicide?'){
        var chemical1herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 1? (Select only one)' && data != ""){
        chemicals[0] = data;
      };
  
      if (key == 'Was chemical 1 a fertilizer?'){
        var chemical1fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 1? (Select only one)' && data != ""){
        chemicals[0] = data;
      };
  
      if (key == 'Was chemical 1 a pesticide that does not fall into the aforementioned categories?'){
        chemical1Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 1? (Select only one)' && data != ""){
        chemicals[0] = data;
      };
  
      if (key == 'What is the EPA Registration Number for chemical 1?'){
        chemEPA[0] = data;
      };
      if (key == 'What is the active ingredient in chemical 1?'){
        chemIngredient[0] = data;
      };
      if (key == 'At what rate per acre was chemical 1 applied? (Number only, no units)'){
        rateOfApplication[0] = data;
      };
      if (key == 'What was the total amount of chemical 1 that was applied? (Number only, no units)'){
        totalAmtApplied[0] = data;
      };
      if (key == 'What unit is chemical 1 measured in?'){
        chemUnits[0] = data;
      };
      if (key == "What was chemical 1's target pest?"){
        targetPest[0] = data;
      };
      if (key == 'What was the application method for chemical 1?'){
        applicationMethod[0] = data;
      };
      if (key == 'What is the REI for chemical 1, if any?'){
        REI[0] = data;
      };
      if (key == 'Enter other notes for chemical 1 here.'){
        chemNotes[0] = data;
      };
      if (key == 'Was a second pesticide applied at this time?'){
        nextChem[0] = data;
      };
  
      // Chemical 2 Information
      if (key == 'Was chemical 2 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical2insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 2? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[1] = data;
      };
  
      if (key == 'Was chemical 2 a bacterial pesticide?'){
        var chemical2bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 2? (Select only one)' && data != ""){
        chemicals[1] = data;
      };
  
      if (key == 'Was chemical 2 a fungicide?'){
        var chemical2fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 2? (Select only one)' && data != ""){
        chemicals[1] = data;
      };
  
      if (key == 'Was chemical 2 an herbicide?'){
        var chemical2herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 2? (Select only one)' && data != ""){
        chemicals[1] = data;
      };
  
      if (key == 'Was chemical 2 a fertilizer?'){
        var chemical2fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 2? (Select only one)' && data != ""){
        chemicals[1] = data;
      };
  
      if (key == 'Was chemical 2 a pesticide that does not fall into the aforementioned categories?'){
        var chemical2Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 2? (Select only one)' && data != ""){
        chemicals[1] = data;
      };
      
      if (key == 'What is the EPA Registration Number for chemical 2?'){
        chemEPA[1] = data;
      };
      if (key == 'What is the active ingredient in chemical 2?'){
        chemIngredient[1] = data;
      };
      if (key == 'At what rate per acre was chemical 2 applied? (Number only, no units)'){
        rateOfApplication[1] = data;
      };
      if (key == 'What was the total amount of chemical 2 that was applied? (Number only, no units)'){
        totalAmtApplied[1] = data;
      };
      if (key == 'What unit is chemical 2 measured in?'){
        chemUnits[1] = data;
      };
      if (key == "What was chemical 2's target pest?"){
        targetPest[1] = data;
      };
      if (key == 'What was the application method for chemical 2?'){
        applicationMethod[1] = data;
      };
      if (key == 'What is the REI for chemical 2, if any?'){
        REI[1] = data;
      };
      if (key == 'Enter other notes for chemical 2 here.'){
        chemNotes[1] = data;
      };
      if (key == 'Was a third pesticide applied at this time?'){
        nextChem[1] = data;
      };
  
      // Chemical 3 Information
      if (key == 'Was chemical 3 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical3insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 3? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[2] = data;
      };
  
      if (key == 'Was chemical 3 a bacterial pesticide?'){
        var chemical3bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 3? (Select only one)' && data != ""){
        chemicals[2] = data;
      };
  
      if (key == 'Was chemical 3 a fungicide?'){
        var chemical3fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 3? (Select only one)' && data != ""){
        chemicals[2] = data;
      };
  
      if (key == 'Was chemical 3 an herbicide?'){
        var chemical3herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 3? (Select only one)' && data != ""){
        chemicals[2] = data;
      };
  
      if (key == 'Was chemical 3 a fertilizer?'){
        var chemical3fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 3? (Select only one)' && data != ""){
        chemicals[2] = data;
      };
  
      if (key == 'Was chemical 3 a pesticide that does not fall into the aforementioned categories?'){
        var chemical3Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 3? (Select only one)' && data != ""){
        chemicals[2] = data;
      };
      
      if (key == 'What is the EPA Registration Number for chemical 3?'){
        chemEPA[2] = data;
      };
      if (key == 'What is the active ingredient in chemical 3?'){
        chemIngredient[2] = data;
      };
      if (key == 'At what rate per acre was chemical 3 applied? (Number only, no units)'){
        rateOfApplication[2] = data;
      };
      if (key == 'What was the total amount of chemical 3 that was applied? (Number only, no units)'){
        totalAmtApplied[2] = data;
      };
      if (key == 'What unit is chemical 3 measured in?'){
        chemUnits[2] = data;
      };
      if (key == "What was chemical 3's target pest?"){
        targetPest[2] = data;
      };
      if (key == 'What was the application method for chemical 3?'){
        applicationMethod[2] = data;
      };
      if (key == 'What is the REI for chemical 3, if any?'){
        REI[2] = data;
      };
      if (key == 'Enter other notes for chemical 3 here.'){
        chemNotes[2] = data;
      };
      if (key == 'Was a fourth pesticide applied at this time?'){
        nextChem[2] = data;
      };
  
      // Chemical 4 Information
      if (key == 'Was chemical 4 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical4insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 4? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[3] = data;
      };
  
      if (key == 'Was chemical 4 a bacterial pesticide?'){
        var chemical4bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 4? (Select only one)' && data != ""){
        chemicals[3] = data;
      };
  
      if (key == 'Was chemical 4 a fungicide?'){
        var chemical4fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 4? (Select only one)' && data != ""){
        chemicals[3] = data;
      };
  
      if (key == 'Was chemical 4 an herbicide?'){
        var chemical4herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 4? (Select only one)' && data != ""){
        chemicals[3] = data;
      };
  
      if (key == 'Was chemical 4 a fertilizer?'){
        var chemical4fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 4? (Select only one)' && data != ""){
        chemicals[3] = data;
      };
  
      if (key == 'Was chemical 4 a pesticide that does not fall into the aforementioned categories?'){
        var chemical4Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 4? (Select only one)' && data != ""){
        chemicals[3] = data;
      };
      
      if (key == 'What is the EPA Registration Number for chemical 4?'){
        chemEPA[3] = data;
      };
      if (key == 'What is the active ingredient in chemical 4?'){
        chemIngredient[3] = data;
      };
      if (key == 'At what rate per acre was chemical 4 applied? (Number only, no units)'){
        rateOfApplication[3] = data;
      };
      if (key == 'What was the total amount of chemical 4 that was applied? (Number only, no units)'){
        totalAmtApplied[3] = data;
      };
      if (key == 'What unit is chemical 4 measured in?'){
        chemUnits[3] = data;
      };
      if (key == "What was chemical 4's target pest?"){
        targetPest[3] = data;
      };
      if (key == 'What was the application method for chemical 4?'){
        applicationMethod[3] = data;
      };
      if (key == 'What is the REI for chemical 4, if any?'){
        REI[3] = data;
      };
      if (key == 'Enter other notes for chemical 4 here.'){
        chemNotes[3] = data;
      };
      if (key == 'Was a fifth pesticide applied at this time?'){
        nextChem[3] = data;
      };
  
      // Chemical 5 Information
      if (key == 'Was chemical 5 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical5insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 5? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[4] = data;
      };
  
      if (key == 'Was chemical 5 a bacterial pesticide?'){
        var chemical5bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 5? (Select only one)' && data != ""){
        chemicals[4] = data;
      };
  
      if (key == 'Was chemical 5 a fungicide?'){
        var chemical5fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 5? (Select only one)' && data != ""){
        chemicals[4] = data;
      };
  
      if (key == 'Was chemical 5 an herbicide?'){
        var chemical5herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 5? (Select only one)' && data != ""){
        chemicals[4] = data;
      };
  
      if (key == 'Was chemical 5 a fertilizer?'){
        var chemical5fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 5? (Select only one)' && data != ""){
        chemicals[4] = data;
      };
  
      if (key == 'Was chemical 5 a pesticide that does not fall into the aforementioned categories?'){
        var chemical5Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 5? (Select only one)' && data != ""){
        chemicals[4] = data;
      };
      
      if (key == 'What is the EPA Registration Number for chemical 5?'){
        chemEPA[4] = data;
      };
      if (key == 'What is the active ingredient in chemical 5?'){
        chemIngredient[4] = data;
      };
      if (key == 'At what rate per acre was chemical 5 applied? (Number only, no units)'){
        rateOfApplication[4] = data;
      };
      if (key == 'What was the total amount of chemical 5 that was applied? (Number only, no units)'){
        totalAmtApplied[4] = data;
      };
      if (key == 'What unit is chemical 5 measured in?'){
        chemUnits[4] = data;
      };
      if (key == "What was chemical 5's target pest?"){
        targetPest[4] = data;
      };
      if (key == 'What was the application method for chemical 5?'){
        applicationMethod[4] = data;
      };
      if (key == 'What is the REI for chemical 5, if any?'){
        REI[4] = data;
      };
      if (key == 'Enter other notes for chemical 5 here.'){
        chemNotes[4] = data;
      };
      if (key == 'Was a sixth pesticide applied at this time?'){
        nextChem[4] = data;
      };
  
      // Chemical 6 Information
      if (key == 'Was chemical 6 an insecticide?'){ // Format: If the user said they used this type of chemical, 
        var chemical6insecticide = data;
      };
      if (key == 'If yes, what insecticide was chemical 6? (Select only one)' && data != ""){ // Then, if they said yes, record the chemical reported 
                                                                                               // in this field. Otherwise, ignore this question.
          chemicals[5] = data;
      };
  
      if (key == 'Was chemical 6 a bacterial pesticide?'){
        var chemical6bacterial = data;
      };
      if (key == 'If yes, which bacterial pesticide was chemical 6? (Select only one)' && data != ""){
        chemicals[5] = data;
      };
  
      if (key == 'Was chemical 6 a fungicide?'){
        var chemical6fungicide = data;
      };
      if (key == 'If yes, which fungicide was chemical 6? (Select only one)' && data != ""){
        chemicals[5] = data;
      };
  
      if (key == 'Was chemical 6 an herbicide?'){
        var chemical6herbicide = data;
      };
      if (key == 'If yes, which herbicide was chemical 6? (Select only one)' && data != ""){
        chemicals[5] = data;
      };
  
      if (key == 'Was chemical 6 a fertilizer?'){
        var chemical6fertilizer = data;
      };
      if (key == 'If yes, which fertilizer was chemical 6? (Select only one)' && data != ""){
        chemicals[5] = data;
      };
  
      if (key == 'Was chemical 6 a pesticide that does not fall into the aforementioned categories?'){
        var chemical6Other = data;
      };
      if (key == 'If yes, which pesticide was chemical 6? (Select only one)' && data != ""){
        chemicals[5] = data;
      };
      
      if (key == 'What is the EPA Registration Number for chemical 6?'){
        chemEPA[5] = data;
      };
      if (key == 'What is the active ingredient in chemical 6?'){
        chemIngredient[5] = data;
      };
      if (key == 'At what rate per acre was chemical 6 applied? (Number only, no units)'){
        rateOfApplication[5] = data;
      };
      if (key == 'What was the total amount of chemical 6 that was applied? (Number only, no units)'){
        totalAmtApplied[5] = data;
      };
      if (key == 'What unit is chemical 6 measured in?'){
        chemUnits[5] = data;
      };
      if (key == "What was chemical 6's target pest?"){
        targetPest[5] = data;
      };
      if (key == 'What was the application method for chemical 6?'){
        applicationMethod[5] = data;
      };
      if (key == 'What is the REI for chemical 6, if any?'){
        REI[5] = data;
      };
      if (key == 'Enter other notes for chemical 6 here.'){
        chemNotes[5] = data;
      };
    };
  
    // Configure duplicate spreadsheet to record data in
    var newSheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1T5LgJSB6vy3BhcA2JVZ1yKAHJN72-yCTf3SQrt3PgK0/edit?gid=0#gid=0').copy(dateOfApplication + "_" + crop); // Create new sheet with name format "CurentDate_Crop"
    var newSheetUrl = newSheet.getUrl();
    var newSheetId = newSheet.getId();
  
    // Save data from form into spreadsheet
    for (var i = 0; i < 6; i ++){
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 1,1).setValue(dateOfApplication);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 2, 1).setValue(startTime);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 3, 1).setValue(endTime);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 4, 1).setValue(weatherConditions);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 5, 1).setValue(applicatorName);
  
      // Set license # based on applicator's name
      if (applicatorName == 'H. Michael Smolak Jr.'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 6, 1).setValue(michaelLicNo);
      };
      if (applicatorName == 'Jason Girard'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 6, 1).setValue(jasonLicNo);
      };
  
      // Select fields treated based on which property is selected
      if (property == '315 So. Bradford St., NA'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 7, 1).setValue(NAField);
      };
      if (property == '494 Ipswitch Rd., Boxford'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 7, 1).setValue(BoxField);
      };
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 8, 1).setValue(crop);
  
      if (fieldArea == '1'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 9, 1).setValue(fieldArea + " acre");
      };
      if (fieldArea != '1'){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 9, 1).setValue(fieldArea + " acres");
      };
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 10, 1).setValue(chemicals[i]);
      // NEED TO DO
      //SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 11, 1).setValue(chemEPA[i]);
  
      //SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 12 , 1).setValue(chemIngredient[i]);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 13, 1).setValue(rateOfApplication[i] + " " + chemUnits[i] + "/acre");
      calculatedUse[i] = calculateConsumption(fieldArea, rateOfApplication[i]);
      if (calculatedUse[i] == totalAmtApplied[i]){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 14, 1).setValue(totalAmtApplied[i] + " " + chemUnits[i]);
      };
      if (calculatedUse[i] != totalAmtApplied[i]){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 14, 1).setValue(calculatedUse[i] + " " + chemUnits[i]);
      };
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 15, 1).setValue(targetPest[i]);
  
      SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 16, 1).setValue(applicationMethod[i]);
  
      if (REI[i] == ""){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 17, 1).setValue("None");
      };
      if (REI[i] != ""){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 17, 1).setValue(REI[i]);
      };
  
      if (chemNotes[i] == ""){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 18, 1).setValue("None");
      };
      if (chemNotes[i] != ""){
        SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").getRange(8 + i, 18, 1).setValue(chemNotes[i]);
      };
  
      if (nextChem[i] != 'Yes'){ // If there is no more crops, exit
        i = 5;
      };
    };
    SpreadsheetApp.openByUrl(newSheetUrl).getSheetByName("Sheet1").autoResizeRows(1, 18); // Auto-fit the row height to display all data
  
    // Call functon to move the new sheet
    moveSheet(newSheetId);
  
    // Give user permissions to edit generated sheet, then email a confirmation with any error messages
    sendEmail(newSheetUrl, applicatorEmail, calculatedUse, totalAmtApplied, nextChem, chemUnits);
    
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
  
  function sendEmail(sheetURL, emailAddress, calculatedUse, enteredUse, more, unit){ // Send confirmation email to user with any error messages
    var difference = [];
    var message = "Thank you for recording your recent pesticide application. You can now access this record through this link: " + sheetURL;
    for (var i = 0; i < enteredUse.length; i++){ // Check if total amt consumed is correct/ If not, alert user in confirmation email.
      if (calculatedUse[i] != enteredUse[i]){
        message = message + ("\nThe total consumption for chemical " + (i+1) + " is incorrect. You entered " + enteredUse[i] + unit[i] + ". It should be " + calculatedUse[i] + unit[i] + ". Please check your entry. This application will not be removed from the chemical inventory." );
      };
      if (more[i] != 'Yes'){ // If there are no more chemicals, exit. This is the same bounds as the spreadsheet writing loop
        i = 5;
      };
    };
    try{
      SpreadsheetApp.openByUrl(sheetURL).addEditor(emailAddress);
      MailApp.sendEmail(emailAddress, "Your Recent Pesticide Record Creation", message);
    }
    catch{
      MailApp.sendEmail(emailAddress, "Error in Submission", "Could not add editor to new pesticide record");
    };
  };
  