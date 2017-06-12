$(document).ready(function () {

	var ajax_url = "http://wwwp.cs.unc.edu/Courses/comp426-f16/users/gjayne/final_project/getCourses.php";

	var data_pairs = {};
	// Set up settings for AJAX call
    var settings = {
	type: "GET",
	//dataType: "json",
	//url: ajax_url,
	//data: data_pairs,
	success: ajax_success_handler,
	error: ajax_error_handler,
	cache: false
    }

    // Make AJAX call
    $.ajax(ajax_url, settings);

    $("#returntext").append("<p>NEW TEXT</p>");
};

var ajax_success_handler = function(data, textStatus, jqXHR) {
    $('#returnstatus').html(jqXHR.status);
    $('#returntext').html(jqXHR.responseText);
};

var ajax_error_handler = function(jqXHR, textStatus, errorThown) {
    $('#returnstatus').html(jqXHR.status);
    $('#returntext').html(jqXHR.responseText);
};