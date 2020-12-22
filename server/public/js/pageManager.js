const spin = `
        <div class="row justify-content-md-center" id="spinnerWait">
          <div class="col-md-4">
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        `

$(function () {
    $("#netDataSubmit").on("submit", function (e) {
        e.preventDefault() // disable the default form submit event

        //network_data = $("#netData")
        //console.log(e.currentTarget[0].value)
        //console.log(e.currentTarget[2].value)
        const ssid = $("#ssid")[0].value
        const passwd = $("#password")[0].value

        //if (!$("#spinnerWait")) $("body").append(spin)
        spinner_presence = $("#spinnerWait")

        if (spinner_presence.length) {
            $("#spinnerWait").remove()
        }

        $("#mainContainer").append(spin)

        const networkData = { ssid: ssid, password: passwd }

        $.ajax({
            url: "/",
            type: "POST",
            data: networkData,
            success: function (response) {
                // alert("response received")
                // ajax success callback

                $("#mainContainer").empty()
                $("body").append(`
                    <div class="row justify-content-md-center" id="finalResponse">
                        <div class="col-md-4">
                            <div>
                                <h3 class="text-center"> ${response.response}
                            </div>
                        </div>
                    </div>
                `)
            },
            error: function (response) {
                alert("ajax failed")
                // ajax error callback
            },
        })
    })
})

$(document).ready(function () {
    console.log("ready!")
})
