---
title: Getting Started
description: If you've never used Meshtastic before this is a great place to start
# categories: [Examples, Placeholders]
tags: [Newbie, Config Settings, Client Config, MQTT]
weight: 20
---

{{% pageinfo %}}
If you haven't checked the [Offical Meshtastic Getting Started Guide](https://meshtastic.org/docs/getting-started/) we'd reccomend you start there first.
{{% /pageinfo %}}

In the Bay Area we have a few reccomendations for configuration

* Long/Fast
* Frequency 0
* Client
    * Client Mute - Default reccomendation for all handheld units. It will not relay messages
    * Client - Its ok to use, especially when there are few other nodes around. This will relay messages.
    * Client Router / Router - Use router ONLY if you have a powerful and permanently installed node that can see a large amount of area.
* If you want to be internet connected, see [MQTT](MQTT)