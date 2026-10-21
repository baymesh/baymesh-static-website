---
title: Home Base Station
description: Give your handhelds a better radio path from home
weight: 25
tags: [Home, Hardware, Device Roles]
---

A home base station is a node you leave in a good radio location while you carry a smaller node. From an attic, upper-floor window, or suitable outdoor mount, it may hear nodes your handheld cannot. A higher location helps only if the radio has a usable path to your handheld and the rest of the mesh, so test before mounting anything permanently.

## Set up the pair

1. Choose hardware you can power reliably. Our [hardware recommendations]({{< ref "/docs/getting-started/recommended-hardware" >}}) include modular and ready-to-use options. Use an antenna suited to your device and location.
2. Apply the [BayMesh recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}) to both nodes. Give each a distinct long and short name so you can tell them apart.
3. Set the home node's device role to **Client Base** (`CLIENT_BASE`). This role handles general traffic like Client and prioritizes rebroadcasts to or from nodes you mark as favorites **on the base station**. Leave your handheld on **Client**, or use **Client Mute** if it stays near the base and does not need to relay other traffic.
4. Connect your app to the **base station**, find each of your handhelds in its node list, and mark them as favorites there. Favoriting the base on a handheld does not configure the base's priority behavior. Check the [official device-role guide](https://meshtastic.org/docs/configuration/radio/device/) for the controls in your app and firmware.

## Place and power the home node

**HEIGHT MAKES RIGHT.** The higher and clearer the location, the better. Even getting the antenna three feet above your chimney on a short pole can dramatically improve reception compared with keeping it inside the house.

Try a few locations before settling on one. Check whether the base can hear your handheld from the rooms and outdoor spots you use, and whether it can exchange messages with other BayMesh nodes. Keep the radio, antenna, and cable arrangement appropriate for the site; protect outdoor equipment from weather and arrange mounting with the property owner.

A base station needs continuous power to be useful when you are away. For an indoor node, use a dependable power supply and consider backup power. For a solar node, size and monitor the battery for cloudy days and winter conditions. Internet access is optional for radio messaging; [MQTT]({{< ref "/docs/getting-started/MQTT" >}}) is a separate feature.

## Test the path

Send a short message from each handheld while near home, then from the places where you expect to use it. Ask another person to reply so you can test both directions. Repeat after moving the base or changing its antenna. A visible node or a map entry does not prove that messages can travel between your radios today.

If the handheld cannot reach the base, changing the base's role will not create that first radio link. Improve placement or try a better antenna location, then test again. See the [official role recommendations](https://meshtastic.org/docs/configuration/tips/#roles) for more on Client, Client Mute, and Client Base.
