const express = require("express")
const router = express.Router()
const exec = require("child_process").exec

router.get("/", (req, res, next) => {
    let networks = []

    exec("LANG=C nmcli -g SSID,SIGNAL dev wifi", (err, stdout, stderr) => {
        const response = stdout.split("\n")

        response.forEach((e, index) => {
            if (e.includes(":")) {
                const net = e.split(":")
                //networks[net[0]] = parseInt(net[1])
                networks.push(net[0])
            }
        })

        networks = [...new Set(networks)]

        res.render("index", { title: "Express", networks: networks })
    })
})

router.post("/", (req, res, next) => {
    console.log("body:", req.body)
    console.log("params:", req.params)

    const { ssid, password } = req.body

    exec(`./createConnection.sh ${ssid} ${password}`, (err, stdout, stderr) => {
	console.log("err", err)
	console.log("stdout", stdout)
	console.log("stderr", stderr)
        res.json({
            response:
                "Network data send, reboot your <strong>rockpis</strong> and connect to ip that's appear on display",
        })
    })
})

module.exports = router
