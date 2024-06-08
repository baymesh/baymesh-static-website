---
title: Recommended Settings
description: We have some sane default settings that we strongly reccomend you follow
tags: [Newbie, Config Settings, Client Config, MQTT]
---


In the Bay Area we have a few reccomendations for configuration

* LORA
    * Set region to United States
    * **Preset**: Long Range - Fast (Default)
    * **Number of hops**: 3 (Default)
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
        * Client Mute - Default reccomendation for all handheld units. It will not relay messages
        * Client - Its ok to use, especially when there are few other nodes around. This will relay messages.
        * Client Router / Router - Use router ONLY if you have a powerful and permanently installed node that can see a large amount of area.
        * See [offical docs for full breakdown](https://meshtastic.org/docs/configuration/radio/device/)
* MQTT
    * If you want to be internet connected, see [MQTT](MQTT)