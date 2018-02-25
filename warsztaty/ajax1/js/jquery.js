$('#pobierz-dane').click(function () {
    'use strict';

    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
        $('body').append('<p> User Id: ' + data.userId + '</p>');
        $('body').append('<p> User Name: ' + data.userName + '</p>');
        $('body').append('<p> User URL: ' + data.userURL + '</p>');
    });

})