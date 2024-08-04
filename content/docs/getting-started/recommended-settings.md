---
title: Recommended Settings
description: We have some sane default settings that we strongly recommend you follow
tags: [Newbie, Config Settings, Client Config, MQTT]
---

Please make sure to update the firmware on your device as you get started. The easiest way to do that is to use [the Web Flasher](https://flasher.meshtastic.org/). The latest stable release, even if labeled Beta, is generally a very safe option. 

In the Bay Area, we have a few recommendations for configuration:

* LORA
    * Set region to United States (US)
    * **Preset**: Long Range - Fast (Default)
    * **Number of hops**: 3 (Default) - Please don't turn this up.
    * Set Ignore MQTT to true to avoid forwarding MQTT traffic
* Channels
    * 0 Primary Channel
        * **Name**: Blank (Default)
        * **Key**: AQ== (Default)
        * You may wish to turn off Positions & Location if you're not interested in broadcasting your location
* User
    * **Long Name**: Something descriptive. Ex: Your name, Discord Handle, or Ham Callsign
    * **Short Name**: Max of 4 characters, something unique for you and that particular radio. This will be what's displayed in chat.
    * **Licensed Operator**: Do not enable unless you are a licensed [Amateur Radio operators](https://en.wikipedia.org/wiki/Amateur_radio) and have read [Licensed Operations]({{< ref "/docs/licensed-operations" >}}).
* Device Config
    * **Device Role**
        * Client Mute - Best for vehicles and anytime you have more than 2 nodes in the same place. It will not relay messages.
        * Client - Recommended for a home "base stations" or your single primary node. It will relay messages it receives.
        * Router / Repeater - Don't use this to get started. There are a lot of considerations, and caveats, to using the offical Router & Repeater roles. Remember: The Client role relays messages just fine.
        * See [offical docs for full breakdown](https://meshtastic.org/docs/configuration/radio/device/)
* Module Configuration
    * MQTT
        * If you want to be internet-connected, see [MQTT](MQTT) - But this is for fixed position nodes, typically at home.
    * Device Telemetry
        * Device Metrics: 1 hour.
        * Sensor Metrics: 1 hour.

