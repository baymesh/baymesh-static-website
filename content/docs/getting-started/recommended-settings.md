---
title: Recommended Settings
description: Join BayMesh, choose the right device role, and share the airwaves considerately
tags: [Newbie, Config Settings, Client Config, MQTT]
---

These are BayMesh's local settings. Apply them to each radio you want to use on the community mesh, then test messages in both directions. Start with [Getting Started]({{< ref "/docs/getting-started" >}}) if you haven't paired your radio yet.

## Connect to BayMesh

| Setting | BayMesh recommendation | Why it matters |
| --- | --- | --- |
| Region | **United States (US)** | Selects the regional radio band and limits. |
| Modem preset | **Medium Fast** (also called Medium Range Fast) | Radios need compatible modem settings to communicate. |
| Frequency slot | **45**, or **0 (automatic)** with the default primary channel name | Automatic selects 45 with US / Medium Fast and the default name. Set 45 explicitly if you rename the primary channel. |
| Primary channel name | **Blank** | Uses the default public channel name. |
| Primary channel key | **`AQ==`** | The published public key; anyone can read this channel. |
| OK to MQTT | **Enable if you want your public messages online** | Lets gateways share messages they hear with [Discord](https://discord.gg/GpsKbhGJx5) and [Meshview](https://meshview.bayme.sh/). Anyone on the internet can then see them. |
| Licensed Operator | **Off** | Use this setting for BayMesh even if you hold an amateur radio license. See [Licensed Operations]({{< ref "/docs/licensed-operations" >}}). |
{.connection-settings-table}

On Android, look under **Settings → LoRa**. On Apple devices, use **Settings → Radio Configuration → LoRa**. Save or send the changes and let the radio reconnect if it restarts. Menu wording can vary by app version; see the [official initial setup guide](https://meshtastic.org/docs/getting-started/initial-config/).

Choose a descriptive **Long Name**, such as your name or Discord handle, and a **Short Name** of up to four characters. Give each of your radios a distinct name. Only put contact details in the name if you're comfortable making them public.

## Choose a role for your setup

| Your setup | Recommended role | How to use it |
| --- | --- | --- |
| One everyday radio, at home or on the move | **Client** (`CLIENT`) | A good starting point. It sends your messages and can relay other traffic. |
| An extra radio carried alongside another node, or several radios in one place | **Client Mute** (`CLIENT_MUTE`) for the extra nodes | Sends and receives its own traffic without adding duplicate relays. Keep a well-placed Client or Client Base available. |
| A home node serving your handheld or indoor radios | **Client Base** (`CLIENT_BASE`) | While connected to the base, favorite the radios it should serve. See [Home Base Station]({{< ref "/docs/home-base-station" >}}). |
| A planned site serving the wider community | **Coordinate with BayMesh first** | Start the discussion before selecting an infrastructure role or installing equipment. See [Hosting a Node]({{< ref "/docs/hosting-a-node" >}}). |

A vehicle does not automatically need Client Mute: a single mobile node can still be a useful Client. Choose Mute when another nearby node already provides the relay you need. Router mode is not a range boost, and a solar panel or rooftop does not by itself justify an infrastructure role. Client Base is our recommendation for a home solar base station.

Client Base gives special relay treatment to traffic to and from its favorited nodes; it handles other traffic like a Client. Favoriting belongs on the **base radio**, not just on your handheld. See the [official device-role reference](https://meshtastic.org/docs/configuration/radio/device/#roles).

## Hop limits

These are the existing BayMesh recommendations, rather than the firmware defaults:

| Node use | Hop limit |
| --- | --- |
| Stationary relay, including a home Client Base | **4**; up to **5** where needed |
| Personal or chat node | **6**; up to **7** where needed |

The firmware default is **3**. A hop limit allows traffic through a certain number of relays; it doesn't increase your radio's transmit power. More hops can add traffic, so don't raise the limit just because a test failed. First establish a working link to another node. See [Troubleshooting]({{< ref "/docs/troubleshooting" >}}).

## Position and telemetry

Share only the location detail you want others to see. Turn off position sharing on the public channel if you don't want to publish your location, or choose an appropriate position precision. Check **every enabled channel**: adding a private channel doesn't hide broadcasts on the public one. See [Private Channels and Groups]({{< ref "/docs/emergency-private-use" >}}).

| Automatic update | Recommended interval |
| --- | --- |
| Stationary position reports | At least **6 hours** |
| Device and environmental metrics | At least **6 hours** (**21,600 seconds**) |
| Position while moving, if wanted | Smart Position with a minimum interval of **10 minutes** and a distance trigger of **100–130 meters** |

These intervals keep background broadcasts from crowding out conversations. The distance setting is in **meters**; see the [Smart Position controls](https://meshtastic.org/docs/configuration/radio/position/#smart-broadcast-minimum-distance).

**Neighbor Info** is optional and does not improve routing. Current firmware restricts sending it over LoRa on the default public channel. If your setup supports it and you enable it, use an interval of **4 hours / 14,400 seconds**. See the [module documentation](https://meshtastic.org/docs/configuration/module/neighbor-info/).

## Internet sharing and MQTT

You don't need MQTT on your portable radio to use BayMesh.

- **OK to MQTT:** Enable this in the LoRa settings if you want your public messages to appear in [Discord](https://discord.gg/GpsKbhGJx5) or on [Meshview](https://meshview.bayme.sh/). It lets participating gateways upload messages they hear from you, which means **anyone on the internet can see those messages**. A gateway still needs to hear your radio. Leaving it off does not make the public radio channel private.
- **Ignore MQTT:** Optional. Enable it to ignore traffic downlinked from the internet.
- **Run a gateway:** For a stationary node with a reliable internet connection, follow our [MQTT guide]({{< ref "/docs/getting-started/MQTT" >}}).

## Share the mesh

BayMesh brings together people from across the Bay Area. The world can be divisive; on the mesh, we're one big happy mesh. **Keep politics and campaigning off the community channels.** Welcome newcomers, be patient with questions, and treat one another with respect.

- **Make tests useful.** Send a short introduction with your general area and ask for a reply. Give people time to respond before trying again.
- **Use traceroute sparingly.** Run it to answer a specific question, then wait. Repeated requests and automated tests consume shared airtime.
- **Keep broadcasts modest.** Use the position and telemetry intervals above, and avoid rapid beacons or repeated status messages.
- **Coordinate infrastructure.** Talk with the community before changing shared nodes or adding a Router. A well-placed Client can already help.
- **Keep private details private.** Public messages may reach internet loggers. Don't post channel keys, someone else's precise location, or personal information without permission.

## Keep in touch and stay current

Join [Discord](https://discord.gg/GpsKbhGJx5) to arrange a test or ask for help. You can fill out the optional [registration form](https://docs.google.com/forms/d/e/1FAIpQLSd7f8_bAyBsxvOLQ3vJacsg3lPAdw0Eo9pVaS3UJG1gX0KVpA/viewform), or enter `/linknode !nodeid` in a Discord logger channel to link your node.

Use the current recommended **Beta** firmware for your exact device; Alpha releases are for testing. Read the release notes, keep a private backup of your settings, and follow the [official flashing instructions](https://meshtastic.org/docs/getting-started/flashing-firmware/).
