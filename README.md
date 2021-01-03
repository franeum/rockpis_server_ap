# rockpis_server_ap

Only do this if you understand the consequences: all node programs will be able to bind on ports < 1024

```bash
sudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/node
```

Important: your node location may vary. Use which node to find it, or use it directly in the command:

```bash
sudo setcap 'cap_net_bind_service=+ep' `which node`
```

## Uccidere tutti i server node attivi

```bash
killall node
```

## Impostare la 80 come porta di ascolto del server

```bash
PORT=80 npm run dev
```

TODO
