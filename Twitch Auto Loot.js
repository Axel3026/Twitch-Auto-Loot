// ==UserScript==
// @name        Twitch Auto Loot (22.11.2022 Working)
// @namespace   Violentmonkey Scripts
// @namespace    https://github.com/emtry/Bing-Auto-Search
// @updateURL    https://raw.githubusercontent.com/emtry/Bing-Auto-Search/main/Bing%20Auto%20Search.user.js
// @downloadURL
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.9
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @author      -
// @description 22.11.2022, 15:48:00
// @license MIT 
// ==/UserScript==
var classname = "ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW iVIehm";
async function main(){
    buttoncounter = 0;
    while(true){
      secondsPassed = 0;
      while(document.getElementsByClassName(classname)[0] == undefined){
          await sleep(1000);
          secondsPassed++;
          console.log("Seconds: " + secondsPassed + " Buttons: " + buttoncounter);
      }

      document.getElementsByClassName(classname)[0].click();
      buttoncounter++;
      console.log("Button clicked: " + buttoncounter);
      await sleep(1000);
    }
};

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
$( document ).ready(function() {
   main();
   console.log("Auto Loot Active");
});