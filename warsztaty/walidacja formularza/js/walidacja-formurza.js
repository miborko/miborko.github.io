"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

var wyslij = document.getElementById("wyslij");

var wiadomosc = document.getElementById("wiadomosc");

function stanCheckbox() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckbox;