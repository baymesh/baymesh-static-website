---
title: Hosting a Node
description: Questions to consider before placing a Meshtastic node on your property
weight: 60
tags: [Hosting, Infrastructure, Community]
---

A well-placed node can help nearby people exchange messages, especially when it has a clear view beyond one building or hillside. If you're considering a node at your home or another property, start with what the site can support and who will look after the equipment. You can begin with a small, reversible trial.

## How much space does it take?

The radio itself can fit in a small enclosure, but the full installation depends on the antenna, mount, power supply, and any solar panel. An indoor window node may need only a shelf and a power outlet; an outdoor solar setup needs more room and a suitable mount. Agree on the actual dimensions and appearance of the proposed equipment before installing it.

## What would the site need?

- **Location and mount:** Is there an upper-floor window, attic, balcony, or outdoor position with a useful radio view? How would an antenna or enclosure be mounted without damaging the property? An outdoor installation needs suitable weather protection, cable routing, and permission from the property owner or manager.
- **Power:** Is there a safe, continuous power source? If the site relies on solar, where would a panel get sun, and how would the battery be monitored during cloudy weather?
- **Internet:** A node can relay radio messages without internet access. MQTT is optional and requires a reliable connection if you choose to use it. See our [MQTT guide]({{< ref "/docs/getting-started/MQTT" >}}).
- **Access and upkeep:** Who can reach the node to update firmware, check power, clean or repair equipment, and troubleshoot it after an outage? Who will notice if it stops working?

Our [hardware recommendations]({{< ref "/docs/getting-started/recommended-hardware" >}}) show examples of home and solar nodes. A good first step is to test a portable node at the proposed location and compare it with a lower or indoor spot. Apply the [BayMesh recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}), starting with the **Client** role. A roof location alone does not call for Router mode.

## Agree on ownership and removal

Before installing anything, decide who owns the radio, antenna, mount, and power equipment; who pays for power, connectivity, and replacement parts; and who can change settings or remove the installation. If someone else owns or manages the property, get their approval for the specific location and mounting method. Decide how the equipment will be removed and the site restored if circumstances change.

Hosting does not require a permanent commitment. If you'd like local feedback on a possible site, ask in [BayMesh Discord](https://discord.gg/GpsKbhGJx5) with a general location, approximate height, and the kind of mount and power you can offer. Keep your exact address private until you choose to share it with someone you trust.
