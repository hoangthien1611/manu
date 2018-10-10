$(document).ready(function() {
	$('#dashboard-nav .dropdown').on('click', function (event) {
	  var clickover = $(event.target);
	  $('#dashboard-nav .dropdown-menu').slideUp();
	  clickover.children('.dropdown-menu').stop().slideToggle();

		$("#dashboard-nav .dropdown *").on('click', function() {
		  event.stopPropagation();
		});
	});

	tinymce.init({
        selector: '.tinymce-editor',
        height: 200,
        menubar: false,
        plugins: [
		'advlist autolink lists link image charmap print preview anchor',
		'searchreplace visualblocks code fullscreen',
		'insertdatetime media table contextmenu paste code'
	  ],
        toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | link image | undo redo',

    });
});

