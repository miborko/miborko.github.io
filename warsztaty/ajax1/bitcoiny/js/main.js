'use strict';

function porownanie(){

var buyArrow = $('#buyArrow');
var currentBuyPrice = parseFloat($('#buy').html);

var sellArrow = $('#sellArrow');
var currentSellPrice = parseFloat($('#sell').html);

$.getJSON('https://blockchain.info/pl/ticker', function(data){
//    console.log(data.PLN.buy);
//    console.log(data.PLN.sell);
    
    $('#buy').html(data.PLN.buy);
    $('#sell').html(data.PLN.sell);
    
    if(currentBuyPrice > parseFloat(data.PLN.buy)){
        buyArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentBuyPrice < parseFloat(data.PLN.buy)){
        buyArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        buyArrow.removeAttr('class').addClass('fa fa-minus-0');
    }
    
    if(currentSellPrice > parseFloat(data.PLN.sell)){
        sellArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentSellPrice < parseFloat(data.PLN.sell)){
        sellArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        sellArrow.removeAttr('class').addClass('fa fa-minus-0');
    }
});
    console.log('odswiezono');
}

porownanie();

setInterval(porownanie, 5000);