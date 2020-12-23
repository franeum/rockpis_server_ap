#!/usr/bin/env bash

if (( $# != 2 )); then
    echo "incorrect number of arguments"
    echo "usage: createConnection.sh <ssid> <password>"
    exit 1
fi 

nmcli d wifi connect $1 password $2 ifname p2p0
