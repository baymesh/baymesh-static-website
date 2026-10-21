---
title: FAQs
description: Answers to common questions about coverage, messages, privacy, and getting connected
weight: 15
tags: [FAQ]
---

## What is Meshtastic, in plain English?

> It's a walkie talkie for gen-z, you don't talk - you text.

Think of sending text messages over a walkie-talkie, with no voice. Unlike a regular walkie-talkie, mesh radios automatically relay your message down the line, like a kids' game of telephone—except they pass along the same text.

Start with our [getting-started guide]({{< ref "/docs/getting-started" >}}).

## LoRa?

LoRa is long-range, low-power radio technology. It's a way for radios to talk, like Wi-Fi, but designed to reach much, much farther while running much, much slower. It's the basis of Meshtastic and is used by a number of other popular technologies today. [Read more on Wikipedia](https://en.wikipedia.org/wiki/LoRa).

## Do I need cell service or internet access?

No. Once the app is installed and your radio is set up, it operates entirely off grid. The radios, or nodes as we call them, carry your messages over the open radio waves.

## Is there a subscription or a charge for messages?

No. Meshtastic is free and open source. You just need to buy the hardware.

## Does everyone need a radio?

Like a walkie-talkie, everyone who wants to send and receive messages needs their own radio, paired with their phone. Some devices have their own keyboard and screen.

## Is Meshtastic the same as MeshCore?

Meshtastic and MeshCore are two different open source mesh radio projects. They aim for the same goal—off-grid mesh communication—through different means. Unfortunately, they don't work together.

## Do I need GPS? Do I have to share my location?

No, it's entirely optional. Some devices have GPS built in, or you can share your location using your phone's GPS.

## Can I send pictures, make calls, or get internet access?

No. Meshtastic is for low-bandwidth applications like text messages, location sharing, and sensors (think weather stations). It isn't fast enough for pictures, voice, or internet access. Your old AOL dial-up was faster than Meshtastic.

## How far will my node reach?

LoRa doesn't like “stuff” in the way. Clear air from mountaintop to mountaintop? A hundred miles is possible. Downtown San Francisco? A few blocks. Think a couple of miles as a rough everyday expectation, depending on how much stuff is in the way.

## Why can I hear a node that can't hear me?

Radios have sensitive receivers, but they don't all have the same transmit power. A **100 mW radio indoors may hear a 1 W mountaintop node without being able to reach it back**. Antennas, receiver sensitivity, buildings, and noise also affect the two directions. Try a clearer location and ask for a reply. Our [troubleshooting guide]({{< ref "/docs/troubleshooting" >}}) explains this in more detail.

## It works outside, but not inside my house. What can I do?

Again, LoRa doesn't like stuff in the way. A second, higher node with fewer obstacles can work much better, relaying messages to your indoor or portable node. Use **Client Base** for the home node and consider **Client Mute** for an additional nearby handheld, following our [role recommendations]({{< ref "/docs/getting-started/recommended-settings" >}}).

While connected to the home node, mark your indoor or portable nodes as favorites. **Client Base** prioritizes relaying traffic to and from those nodes and handles other traffic like a regular Client. Review the [device-role documentation](https://meshtastic.org/docs/configuration/radio/device/#roles) for details. Keep outdoor equipment appropriately enclosed and powered. Follow our [home base station guide]({{< ref "/docs/home-base-station" >}}) to set up and test the pair.

## Should I use Router mode?

No. Stick with the default **Client** role. It already relays messages.

## Why does Discord show messages that my radio never receives?

The logger collects messages uploaded by gateways across a much larger area than your radio may reach. Seeing a message there means a gateway heard it, not that a radio path exists back to your node. Hills, disconnected groups of nodes, and one-way links can all affect what you receive.

[MQTT]({{< ref "/docs/getting-started/MQTT" >}}) connects radios to internet services. It is optional and does not replace a working local radio path for off-grid communication.

## Why isn't my node on the map? Are all map entries reachable?

Public maps depend on nodes sharing positions and that data reaching the map service, often through MQTT. A node may be active without publishing its location. Conversely, a map entry or your app's node list may contain old information.

Check when a node was last heard and whether it was heard over radio or via MQTT. Seeing a distant node in the list does not prove you can reach it now. [Map & Data]({{< ref "/map" >}}) explains timestamps, missing dots, and how to test coverage.

## Are my messages and location private?

Treat the default channel as public: its encryption key is published. Messages may also appear in internet-connected loggers. The **OK to MQTT** setting is a forwarding preference, not a way to keep public radio traffic secret.

For a private group, create a channel with a random shared key and keep its QR code private. Review location sharing separately on every enabled channel; a private chat doesn't automatically hide positions broadcast on the public channel. Our [private-use guide]({{< ref "/docs/emergency-private-use" >}}) walks through both options. See also the official [encryption overview](https://meshtastic.org/docs/overview/encryption/).

## Which firmware should I install? Why won't Bluetooth reconnect?

Use the current **Beta** release recommended for your exact device unless you are deliberately testing Alpha firmware. Read the release notes and follow the [official flashing instructions](https://meshtastic.org/docs/getting-started/flashing-firmware/); the update method depends on the hardware. Keep a private backup of your channel settings before updating.

After a reflash or reset, you may need to forget the old Bluetooth pairing in your phone's settings and pair again. Check the device-specific instructions if pairing still fails. Firmware updates do not travel over the LoRa mesh. See the [official firmware FAQ](https://meshtastic.org/docs/faq/#firmware).

## Will messages wait for me if my phone or radio is off?

A powered radio can keep working when your phone disconnects. It has a limited buffer for messages to pass to the app later; it isn't a permanent inbox, and you shouldn't assume it will retain everything. If the radio itself is off, it cannot receive messages. Don't expect the public mesh to replay everything you missed. See the [Meshtastic overview](https://meshtastic.org/docs/overview/).

## Why do messages sometimes take a while?

Nodes share limited radio airtime. Relaying, retries, and a busy channel can delay messages. Wait before repeating a test, and ask for a written reply when delivery matters. If delays persist, check your link and your nodes' broadcast intervals using [Troubleshooting]({{< ref "/docs/troubleshooting" >}}).

## How long will the battery last? Can I leave a node plugged in?

Battery life depends on the radio, battery size, GPS, screen, Wi-Fi, traffic, and weather. Test your actual setup instead of planning around a best-case product claim. For continuous power, follow the manufacturer's charging and temperature guidance and use a suitable power supply. Some power banks turn off when a small radio draws too little current. Our [home base station guide]({{< ref "/docs/home-base-station" >}}) covers placement and power for a node you leave running.

## Can I rely on Meshtastic in an emergency?

It can be another way to reach people, provided your radios are charged and there is a working radio path. Practice from real locations, agree on check-in times, and keep another communication plan. Neither the public mesh nor a private channel guarantees delivery or connects you to emergency services. See [Emergency Preparedness]({{< ref "/docs/emergency-preparedness" >}}).

## Where can I get help or find people to test with?

Join [BayMesh on Discord](https://discord.gg/GpsKbhGJx5) or take part in the [weekly net]({{< ref "/docs/weekly-net" >}}). When asking for help, include your device model, firmware version, general area, radio settings, and what you have already tried. Remove private channel keys and precise home locations from screenshots.
