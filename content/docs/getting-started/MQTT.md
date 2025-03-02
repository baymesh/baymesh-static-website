---
title: MQTT
description: A few more details about MQTT specifically
tags: [Newbies, MQTT]
---
{{% pageinfo %}}
This is on the most advanced side of things. If you don't know what "MQTT" is, leave it disabled. You do not need to turn MQTT to have your messages on the logger.

This is also only useful on "base station" nodes. Ones that are in a good position to pick up messages AND with a stable internet/wifi connection. 
{{% /pageinfo %}}

MQTT is the technology used to feed the mesh data to the internet (aka what powers the Mesh Maps, Discord Logger, etc). Setting up MQTT is totally optional and should only be done on a staticly installed node with strong and reliable internet access (like a node on your roof). If you are just using a portable node, you do not need to take any actions.

Module documentation: https://meshtastic.org/docs/configuration/module/mqtt

## MQTT Settings
If you want to use MQTT:

* Module Configuration > MQTT
    * MQTT Enabled: **Enabled**
    * Address: `mqtt.bayme.sh`
        * Our Bay-Area-specific server
    * Username: `meshdev`
    * Password: `large4cats`
    * [Encryption Enabled](https://meshtastic.org/docs/configuration/module/mqtt/#encryption-enabled): **Enabled**
    * [JSON Enabled](https://meshtastic.org/docs/configuration/module/mqtt/#json-enabled): **Enabled**
        * This doesn't work on RAK devices, only ESP32
        * It's limited and isn't needed by the logger or meshview
    * TLS Enabled: **Optional**
        * If you want to use TLS, it's supported
    * Root Topic: `msh/US/bayarea`
        * EXACTLY this, the capitalization matters
    * [Proxy to client enabled](https://meshtastic.org/docs/configuration/module/mqtt/#client-proxy-enabled): **Disabled**
        * This sends the mqtt messages via your phone's internet connection, not your node's own internet connection.
        * Logging this way requires your phone to be near your node at all times which means that it will most likely be unreliable and inappropriate.
    * [Map Report Enabled](https://meshtastic.org/docs/configuration/module/mqtt/#map-reporting-enabled): **Optional**
        * This will report your node's location along with other network data

* Radio Configuration > Channels > 0 / Primary
    * Uplink enabled: **Enabled**
    * Downlink enabled: **Disabled**
        * **NEVER EVER ENABLE DOWNLINK**: this will send messages from the MQTT server to the mesh, increasing mesh traffic, likely degrading it.
