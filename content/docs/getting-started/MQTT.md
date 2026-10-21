---
title: MQTT
description: How to connect a stationary node to Bay Area MQTT
tags: [Newbie, MQTT]
---
{{% pageinfo %}}
MQTT is an advanced feature. If you're unfamiliar with it, leave it disabled. You do not need to enable MQTT on your own node for your messages to appear in the logger.

MQTT is most useful on base stations that can receive mesh traffic and have a stable internet connection.
{{% /pageinfo %}}

MQTT sends mesh data to internet services such as mesh maps and the Discord logger. Setting it up is optional. Use it only on a stationary node with a reliable internet connection, such as a rooftop node. Portable nodes need no additional setup.

See the [official MQTT module documentation](https://meshtastic.org/docs/configuration/module/mqtt).

## MQTT Settings
To use MQTT, configure the following settings:

* Module Configuration > MQTT
    * MQTT Enabled: **Enabled**
    * Address: `mqtt.bayme.sh`
        * Our Bay Area MQTT server
    * Username: `meshdev`
    * Password: `large4cats`
    * [Encryption Enabled](https://meshtastic.org/docs/configuration/module/mqtt/#encryption-enabled): **Enabled**
    * TLS Enabled: **Optional**
        * TLS is supported if you want to use it.
    * Root Topic: `msh/US/bayarea`
        * Enter this exactly; capitalization matters.
    * [Proxy to client enabled](https://meshtastic.org/docs/configuration/module/mqtt/#client-proxy-enabled): **Disabled**
        * This sends MQTT messages through your phone's internet connection instead of the node's connection.
        * Logging this way requires your phone to stay near the node, so it is likely to be unreliable.
    * [Map Report Enabled](https://meshtastic.org/docs/configuration/module/mqtt/#map-reporting-enabled): **Optional**
        * This reports your node's location along with other network data.

* Radio Configuration > Channels > 0 / Primary
    * Uplink enabled: **Enabled**
    * Downlink enabled: **Disabled**
        * Keep downlink disabled. It sends messages from the MQTT server onto the mesh, increasing traffic and potentially degrading performance.
