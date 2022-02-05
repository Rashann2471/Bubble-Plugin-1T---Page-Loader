function(properties, context) {
    
    properties.lottie_code != null ? $('#pnc-loader .pnc-loader').html(properties.lottie_code) : '';
    
	document.querySelector("#pnc-loader").style.display = "block";

}