#!/usr/bin/env bash

# execute with sudo

if (( $# != 2 )); then
    echo "incorrect number of arguments"
    echo "usage: createConnection.sh <ssid> <password>"
    exit 1
fi 

LANG=C nmcli d wifi connect $1 password $2 ifname p2p0
