---
title: Private Channels and Groups
description: Choose between private conversations on BayMesh and a separate radio mesh
weight: 40
tags: [Emergency, Privacy]
---

Meshtastic can help friends, families, and neighbors exchange short messages without cellular service. You can hold private conversations on the community mesh or build a separate mesh for your group. Decide which approach you need before changing your settings.

## Private conversations on BayMesh

Keep the [BayMesh radio settings]({{< ref "/docs/getting-started/recommended-settings" >}}): US region, Medium Fast preset, and frequency slot **45**. Leave the public primary channel in place, then add a **secondary channel** with a custom name and a newly generated random encryption key. Give each group member the same channel name and key using the app's channel-sharing link or QR code.

Treat the link or QR code like a password: it contains the key. The default public key, `AQ==`, is known to everyone and does not make a conversation private. Use the app's key generator, preferably for a 256-bit key, instead of a memorable word. See the official [channel configuration](https://meshtastic.org/docs/configuration/radio/channels/) and [encryption guide](https://meshtastic.org/docs/overview/encryption/).

Your group shares radio airtime with BayMesh. Other nodes may relay your encrypted packets without being able to read the messages. A private channel does not reserve capacity or guarantee delivery.

## A separate mesh for your group

For a group that wants to operate separately from BayMesh:

1. Set every radio to the **US** region and the same modem preset. Start with the **Client** role so your nodes can relay for one another.
2. Give the **primary channel** a custom name and generate a random encryption key. Share those settings privately with every member.
3. Set **Frequency Slot to `0` (automatic)** if you want Meshtastic to choose a slot based on the primary channel name. **Changing only the encryption key does not change the frequency.** Renaming the primary channel affects automatic slot selection; it does not override a manually selected slot.
4. Check the resulting frequency. A custom name can still select the same slot as another mesh. To operate separately, choose an available valid slot other than BayMesh's **45** for Medium Fast, and explicitly set it on every radio. Ask in [Discord](https://discord.gg/GpsKbhGJx5) if you need help coordinating locally.
5. Test messages in both directions before separating the radios.

The official [LoRa configuration guide](https://meshtastic.org/docs/configuration/radio/lora/#frequency-slot) explains automatic and manual slot selection. A separate frequency means you cannot count on BayMesh nodes to relay your messages. Your group needs its own connected radio path.

## Keep location and internet sharing intentional

Review position sharing on every enabled channel, including the public primary channel. A private secondary chat does not automatically hide location broadcasts sent elsewhere. Disable location sharing where you don't need it, or choose an appropriate precision. See [Meshtastic's location-sharing guidance](https://meshtastic.org/docs/configuration/tips/).

For a radio-only group, disable MQTT and channel uplinks/downlinks on your nodes. Keep your private keys out of public screenshots and support requests. If a radio or key is lost, generate a new group key and update the remaining radios.

## Practice before an outage

A private key controls who can read your group messages; it doesn't improve coverage or guarantee delivery. Test messages in both directions from the places you will actually use your radios.

For a household check-in plan, example messages, a charging checklist, and a practice drill, continue to [Emergency Preparedness]({{< ref "/docs/emergency-preparedness" >}}).
