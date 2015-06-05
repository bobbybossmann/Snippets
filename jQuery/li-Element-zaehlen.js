$(document).ready(function() {
	
	// Durchzaehlen der Navigation li's zum besseren bearbeiten auf Basis von Bootstrap
	$('#navbar ul.navbar-nav li').each(function(index) {
 		$(this).addClass('hauptnav-nr-'+index);
	});
});