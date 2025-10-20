---
title: Recommended Settings
description: We have some sane default settings that we strongly recommend you follow
tags: [Newbie, Config Settings, Client Config, MQTT]
---

Please make sure to update the firmware on your device as you get started. The easiest way to do that is to use [the Web Flasher](https://flasher.meshtastic.org/). The latest stable release, even if labeled Beta, is generally a very safe option. 

Most importantly make sure to keep all automatic beacons like telemetry and position (if used on a stationary node) to 6 hour +.  If you want to send position while moving, use Smart Position, with minimum 10 minutes and distance trigger 100 to 130.  This helps keep our mesh clean of background traffic thats of little use. 

If you are joining our network you can fill out the optional registration [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSd7f8_bAyBsxvOLQ3vJacsg3lPAdw0Eo9pVaS3UJG1gX0KVpA/viewform), or you may visit discord and '/linknode !nodeid' in the logger channels. 

In the Bay Area, we have a few recommendations for configuration:     
(Make sure to read all the recommended settings)

* LORA
    * Set region to United States (US)
    * **Preset**: Medium Range Fast
    * **Number of hops for infrastructure node**: 4 (3 is default, up to 5 is ok)
    * **Number of hops for personal/chat node**: 6 (up to 7 is ok if desired)
    * **Ignore MQTT**: Optional: Enable this to ignore traffic that may have been downlinked from MQTT (the internet)
    * **Ok to MQTT**: Optional: Enable this for your messages to be uploaded to MQTT (the internet). This is required for your messages to show up on the Discord logger, Meshview, or location on any maps. This helps us see where traffic flows, and troubleshoot issues. 
* Channels
    * 0 Primary Channel
        * **Name**: Blank (Default)
        * **Key**: AQ== (Default)
        * You may wish to turn off Positions & Location if you're not interested in broadcasting your location
        * If you wish to enable a precise location you can do so via any client other than iOS
* User
    * **Long Name**: Something descriptive. Ex: Your name, Discord Handle, or Ham Callsign. You can even include an email or website (ProTip: put BayMe.sh in your name so more people can find us)
    * **Short Name**: Max of 4 characters, something unique for you and that particular radio. This will be what's displayed in chat. You can even use emojis to spice things up.
    * **Licensed Operator**: Do not enable unless you are a licensed [Amateur Radio operators](https://en.wikipedia.org/wiki/Amateur_radio) and have read [Licensed Operations]({{< ref "/docs/licensed-operations" >}}). (You will not be able to communicate with people on any of the default channels if you enable this)
* Device Config
    * **Device Role**
        * Client Mute - Best for vehicles and any time you have more than 2 nodes in the same place. It will not relay messages. (It will still transmit its own packets)
        * Client - Recommended for a home "base stations" or your single primary node. It will relay messages it receives.
        * Router / Repeater - DO NOT use this role. There are a lot of considerations, and caveats, to using the offical Router & Repeater roles. Remember: The Client role relays messages just fine.
        * See [offical docs for full breakdown](https://meshtastic.org/blog/choosing-the-right-device-role/)
* Module Configuration
    * MQTT
        * If you want to upload to the internet, see [MQTT](MQTT) - This can be on nodes with their own WiFi chips or on the go with MQTT client proxy from the phone app.
    * Device Telemetry (iOS)
        * Device Metrics: 6 hour (iOS) / 21,600 seconds (Android)
        * Sensor (Environment) Metrics: 6 hour / 21,600 seconds (Android)

