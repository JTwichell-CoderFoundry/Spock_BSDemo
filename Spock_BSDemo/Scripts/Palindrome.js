$(function () {

    //Step 1: Get the word
    $("#btnPal").click(function () {
        var word = $("#palIn").val();

        //Step 2: Reverse the word
        //Use a decrementing for loop in conjunction with the
        //substr command and the += operator to produce the reverse word.
        for (var index = word.length - 1, revword = ''; index >= 0; index--) {
            revword += word.substr(index, 1);
        }

        var message = "";
        if (word == revword) {
            message = word + " reversed = " + revword + " therefore " + word + " is a Palindrome";
        }
        else {
            message = word + " reversed != " + revword + " therefore " + word + " is not a Palindrome";
        }

        //Step 3: Inform the user
        $("#palOut").text(message);

    });

    $("#btnPal2").click(function () {
        var word = $("#palIn").val();

        var array = word.split('');
        $("#badOut").text(array);

        var revArray = array.reverse();
        var revword = revArray.join('');
        //var revword = word.split('').reverse().join('');

        var message = "";
        if (word === revword) {
            message = word + " reversed = " + revword + " therefore " + word + " is a Palindrome";
        }
        else {
            message = word + " reversed != " + revword + " therefore " + word + " is not a Palindrome";
        }
        //Step 3: Inform the user
        $("#palOut").text(message);
    });

    $("#btnPal3").click(function () {
        $("#palOut").text($("#palIn").val() === $("#palIn").val().split('').reverse().join('') ? $("#palIn").val() + " is a palindrome" : $("#palIn").val() + " is not a palindrome");
    });

});