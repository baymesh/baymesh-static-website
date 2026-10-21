---
title: Meshtastic Basics
description: How Meshtastic devices exchange messages over a mesh network
tags: [Basics, How it works, Newbie]
---

Meshtastic lets you exchange short messages without cellular service or Wi-Fi. It runs on small, low-power radios that use LoRa to reach nearby devices. Each device is called a **node**. Your phone usually connects to your node over Bluetooth; the nodes communicate with one another over radio.

## How the mesh works

When you send a message, nearby nodes can relay it across the mesh. If one node goes offline, a message may still travel through other nodes within range. Delivery depends on a working radio path and compatible settings. Terrain, buildings, antennas, and node placement all affect range; several kilometers is possible with a clear path.

Meshtastic firmware handles radio communication and message routing. The Android and iOS apps, along with a web interface, let you configure your node and send messages. Many devices can run on batteries for extended periods. Our [hardware recommendations]({{< ref "/docs/getting-started/recommended-hardware" >}}) cover portable radios, DIY kits, and home nodes.

## Channels and privacy

A channel gives a group shared settings for exchanging messages. Channels can use encryption, but the default public channel uses a key known to everyone. For a private group, generate a random key and share it only with members. See [Private Channels and Groups]({{< ref "/docs/emergency-private-use" >}}) for setup and location-sharing guidance.

## Where to start

Meshtastic can help hikers, neighbors, and event groups communicate where cell coverage is unavailable. It can also be one part of an emergency plan, though messages need a working radio path and are not guaranteed to arrive.

Start with the [getting-started guide]({{< ref "/docs/getting-started" >}}): choose a compatible device, install its firmware, connect with the app or web interface, and apply the [BayMesh settings]({{< ref "/docs/getting-started/recommended-settings" >}}). Then test messages from the places where you plan to use it.
