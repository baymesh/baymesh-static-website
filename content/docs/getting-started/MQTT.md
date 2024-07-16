---
title: MQTT
description: A few more details about MQTT specifically
tags: [Newbies, MQTT]
---
{{% pageinfo %}}
This is on the most advanced side of things. If you don't know what "MQTT" is, leave it disabled.
{{% /pageinfo %}}

MQTT is the technology used to feed the mesh data to the internet (aka what powers the Mesh Maps, Discord Logger, etc). Setting up MQTT is totally optional and should only be done on a staticly installed node with strong and reliable internet access (like a node on your roof). If you are just using a portable node, you do not need to take any actions.

## MQTT Settings
If you want to use MQTT:

* Module Configuration > MQTT
    * MQTT Enabled: **True**
    * Encryption Enabled: **True**
    * JSON Enabled: **False**
        * This doesn't work on RAK devices, only ESP32
        * Its limited and isn't needed by the logger or meshview.
    * Map Report Enabled: Optional
    * Root Topic: `msh/US/bayarea`
        * EXACTLY this, the capitalization matters
    * Server Address: `mqtt.bayme.sh`
    * Username: `meshdev`
    * Password: `large4cats`
    * TLS Enabled: Optional
        * If you want to use TLS, it's supported

* Radio Configuration > Channels > 0 / Primary
    * MQTT Uplink: **Enabled**
    * **NEVER EVER ENABLE DOWNLINK**
