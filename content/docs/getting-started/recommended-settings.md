---
title: Recommended Settings
description: Recommended settings for joining the Bay Area mesh
tags: [Newbie, Config Settings, Client Config, MQTT]
---

Check your device's firmware before you get started. The [Meshtastic Web Flasher](https://flasher.meshtastic.org/) provides device-specific update instructions. Use the current recommended **Beta** release for your device; Alpha releases are for testing. Read the release notes before updating.

Set automatic telemetry and position broadcasts from stationary nodes to intervals of at least six hours. If you want to share your position while moving, use Smart Position with a minimum interval of 10 minutes and a distance trigger of **100–130 meters**. See the [Smart Position settings](https://meshtastic.org/docs/configuration/radio/position/#smart-broadcast-minimum-distance) for the exact controls. These settings reduce unnecessary background traffic on the mesh.

If you're joining our network, you can fill out the optional [registration form](https://docs.google.com/forms/d/e/1FAIpQLSd7f8_bAyBsxvOLQ3vJacsg3lPAdw0Eo9pVaS3UJG1gX0KVpA/viewform). You can also visit a Discord logger channel and enter `/linknode !nodeid`.

For the Bay Area mesh, review all of the following settings:

* LoRa
    * Set region to United States (US)
    * **Preset**: Medium Range Fast
    * **Frequency slot**: **45**. Set it explicitly to stay on the BayMesh frequency even if you later rename your primary channel.
    * **Number of hops for an infrastructure node**: 4 (the default is 3; up to 5 is acceptable)
    * **Number of hops for a personal or chat node**: 6 (up to 7 if desired)
    * **Ignore MQTT**: Optional. Enable this to ignore traffic downlinked from MQTT (the internet).
    * **OK to MQTT**: Optional. Enable this to allow your messages to be uploaded to MQTT. For the public channel, participating gateways use this permission to forward traffic to the Discord logger, Meshview, and maps. It does not guarantee that a gateway will hear you, and it is not a privacy control for public messages.
* Channels
    * 0 Primary Channel
        * **Name**: Blank (default)
        * **Key**: `AQ==` (default)
        * Turn off Positions & Location if you don't want to broadcast your location.
        * Review the channel's position precision before sharing a location. The default public key is known to everyone; see [private-use guidance]({{< ref "/docs/emergency-private-use" >}}) for private groups.
* User
    * **Long Name**: Choose something descriptive, such as your name, Discord handle, or amateur radio call sign. You can also include an email address or website. Tip: Include BayMe.sh so more people can find us.
    * **Short Name**: Use up to four characters that distinguish this radio from your other nodes. This name appears in chat; emoji are welcome.
    * **Licensed Operator**: Leave this **off** to join BayMesh, even if you hold an amateur radio license. Read [Licensed Operations]({{< ref "/docs/licensed-operations" >}}) before using ham mode.
* Device Config
    * **Device Role**
        * Client Mute — Best for vehicles or when you have more than two nodes in one place. It transmits its own packets but does not relay messages.
        * Client — Recommended for a home base station or your single primary node. It relays messages it receives.
        * Router / Repeater — Do not use these roles. They require additional care, and the Client role already relays messages.
        * See the [official guide to device roles](https://meshtastic.org/blog/choosing-the-right-device-role/).
* Module Configuration
    * MQTT
        * For a stationary gateway with a reliable internet connection, see [MQTT]({{< ref "/docs/getting-started/MQTT" >}}). You do not need MQTT enabled on your portable node to use the mesh or have a nearby gateway upload your public messages.
    * Device Telemetry (iOS)
        * Device Metrics: 6 hours (iOS) / 21,600 seconds (Android)
        * Sensor (Environment) Metrics: 6 hours / 21,600 seconds (Android)
    * Neighbor Info
        * Neighbor Info is optional and does not improve routing. Current firmware restricts sending it over LoRa on the default public channel.
        * If you enable it for a supported setup, use an update interval of 4 hours / 14,400 seconds. See the [official module documentation](https://meshtastic.org/docs/configuration/module/neighbor-info/) for availability and controls.
