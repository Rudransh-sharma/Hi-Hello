hideElement("label8");
//BUTTONS
setScreen("Main-Menu");
onEvent("LoginButton", "click", function(event) {
  setScreen("Login");
});
onEvent("RegisterButton", "click", function(event) {
  setScreen("Register");
});
onEvent("GOBackButton", "click", function(event) {
  setScreen("Main-Menu");
  setText("text_input1", "");
  setText("text_input2", "");
});
onEvent("GoBackButton2", "click", function(event) {
  setScreen("Main-Menu");
  setText("text_input3", "");
  setText("text_input4", "");
});
onEvent("button1", "click", function( ) {
  setScreen("Updates");
});
onEvent("button2", "click", function( ) {
  setScreen("LoginSuccessScreen");
});
onEvent("GoBackButton3", "click", function( ) {
  setScreen("LoginSuccessScreen");
});
onEvent("LogoutButton", "click", function( ) {
  setScreen("Main-Menu");
});
onEvent("button10", "click", function( ) {
  setScreen("LoginSuccessScreen");
});
onEvent("button2", "click", function( ) {
  setScreen("SendingScreen");
});
//SendListMessage
onEvent("SendButton", "click", function( ) {
  createRecord("Messages", {Username:(getText("text_input5")) , FromUsername:(getText("Username")) , Subject : (getText("text_input6")) , Message:(getText("text_area2")) , TimeSent:Date()}, function(record) {
    setText("text_input5", "");
    setText("text_input6", "");
    setText("text_area2", "Your Message Has Been Sent !");
    setTimeout(function() {
      setText("text_area2", "");
    }, 2000);
  });
});
//Recieve
onEvent("button3", "click", function( ) {
  setScreen("RecieveScreen");
});
onEvent("button5", "click", function( ) {
  setScreen("LoginSuccessScreen");
});
onEvent("button3", "click", function( ) {
  readRecords("Messages", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("Username") == (records[i]).Username) {
        setText("text_area3", "");
        setText("text_area3", "From:" + ((records[i]).FromUsername + ("   " + ("Subject : " + ((records[i]).Uesrname + ("   " + ((records[i]).Message + ("   " + ("Time Sent : " + (records[i]).TimeSent)))))))));
      } else {
        setText("text_area3", "No Messages ");
      }
    }
  });
});
onEvent("DeleteButton", "click", function( ) {
  setTimeout(function() {
    setText("text_area3", "Message Is Deleted ");
    setText("text_area3", "No Message");
  }, 2000);
});
//CREATE ACCOUNTS 
onEvent("RegisterButton2", "click", function( ) {
  createRecord("Accounts", {Username:(getText("text_input3")), Password : (getText("text_input4")), TimeCreated : (Date())}, function(record) {
    showElement("label8");
    setTimeout(function() {
      hideElement("label8");
    }, 3000);
  });
});
//LoginedAccount
onEvent("LoginButtonWhenEnteredTheInfo", "click", function(event) {
  readRecords("Accounts", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).Username == getText("text_input1")) {
        if ((records[i]).Password == getText("text_input2")) {
          setText("Username", getText("text_input1"));
          setText("text_input3", "");
          setText("text_input4", "");
          setScreen("LoginSuccessScreen");
        }
      } else {
        setText("label10", "Incorrect Username Or Password");
      }
    }
  });
});
// Settings
onEvent("SettingsButton", "click", function( ) {
  setScreen("Settings");
});
onEvent("LogoutButton2", "click", function( ) {
  setScreen("Main-Menu");
});
