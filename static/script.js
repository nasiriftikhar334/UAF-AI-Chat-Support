function getBotResponse() {
var rawText = $("#textInput").val();
var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
$("#textInput").val("");
$("#chatbox").append(userHtml);
document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
$.get("/get", { msg: rawText }).done(function(data) {
var botHtml = '<p class="botText"><span>' + data + '</span></p>';
$("#chatbox").append(botHtml);
document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
function scroll (){
  var scrollMsg = document.getElementById('chatbox');
  scrollMsg.scrollTop = scrollMsg.scrollHeight;
}
scroll();
});
}
$("#textInput").keypress(function(e) {
if(e.which == 13) {
getBotResponse();
function scroll (){
  var scrollMsg = document.getElementById('chatbox');
  scrollMsg.scrollTop = scrollMsg.scrollHeight;
}
scroll();
}
});
$("#buttonInput").click(function() {
getBotResponse();
function scroll (){
  var scrollMsg = document.getElementById('chatbox');
  scrollMsg.scrollTop = scrollMsg.scrollHeight;
}
scroll();
})