---
title: Recommended Settings
description: We have some sane default settings that we strongly recommend you follow
tags: [Newbie, Config Settings, Client Config, MQTT]
---


In the Bay Area, we have a few recommendations for configuration

* LORA
    * Set region to United States (US)
    * **Preset**: Long Range - Fast (Default)
    * **Number of hops**: 3 (Default)
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
        * Client - Recommended for base stations and handheld use. Will relay messages it receives.
        * Client Mute - for use on devices that you do not want to populate the network (like a third node at your house). Will not relay messages.
        * Client Router / Router - Use a router ONLY if you have a powerful and permanently installed node that can see a large amount of area. Not something to             be used on a base station at home.
        * See [offical docs for full breakdown](https://meshtastic.org/docs/configuration/radio/device/)
* MQTT
    * If you want to be internet-connected, see [MQTT](MQTT)
