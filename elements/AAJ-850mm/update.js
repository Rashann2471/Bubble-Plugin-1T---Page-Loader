function(instance, properties, context) {

    // Set custom background color
    $('head').append(`
                <style>
                    #pnc-loader {
                        background: ${properties.background_color};
                        }
                </style>
                `)
    
    const animation = properties.lottie_code || `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_zzytykf2.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  loop  autoplay></lottie-player>`;

    // Inject custom loader animation code
    $('#pnc-loader .pnc-loader').html(animation);

    // Check if the loader should be auto closed. 
    // If true, change the CSS styling after the seconds defined in the plugin element
    if (properties.auto_close) {

        $(document).ready(function () {

            setTimeout(function () {

                document.querySelector("#pnc-loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible";

            }, (properties.auto_close_delay || 5000))

        })
    }
}