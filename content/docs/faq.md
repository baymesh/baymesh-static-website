---
title: FAQs
description: Answers to common questions about coverage, messages, privacy, and getting connected
weight: 15
tags: [FAQ]
---

## What is Meshtastic, in plain English?

Think of text messaging over small radios. Your phone connects to your radio, which exchanges messages with nearby nodes. Other nodes can relay messages farther across the mesh. Both ends need compatible settings and a working radio path.

Start with [Meshtastic Basics]({{< ref "/docs/getting-started/meshtastic-basics" >}}) and our [getting-started guide]({{< ref "/docs/getting-started" >}}).

## Do I need cell service, internet access, or a license?

You don't need cellular service or internet access for radio-to-radio messaging. Install the app and set up your node before going offline. A phone typically connects to its nearby node over Bluetooth; LoRa carries messages between radios.

You don't need an amateur radio license for normal BayMesh participation with suitable US-region hardware used within its applicable limits. Leave **Licensed Operator off**, even if you have a call sign. See [Licensed Operations]({{< ref "/docs/licensed-operations" >}}) for the difference.

## Why don't I see any nodes or receive messages?

Check your settings, then your node's placement:

1. Compare your radio with our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}): **US region, Medium Fast, frequency slot 45**, and the default public primary channel. Factory settings may use a different preset.
2. Check that the radio is powered, the app is connected to the right device, and an appropriate 915 MHz antenna is attached if your model needs one. Turn the radio off before changing antennas.
3. Try a higher, clearer location. A window or outdoor spot can help; walls, hills, trees, and metal can block the path. Test away from your body and other electronics.
4. Allow time to hear traffic, then send one short introduction or arrange a test with someone nearby. Repeated test messages can add congestion without fixing the underlying problem.
5. Check the [maps]({{< ref "/map" >}}) and ask in [Discord](https://discord.gg/GpsKbhGJx5). A map is a clue, not a coverage guarantee.

If your app offers local mesh discovery, it can help identify nearby activity. Follow BayMesh's settings for the community network; settings from another city's guide may put you on a different mesh. See the official [joining guide](https://meshtastic.org/docs/getting-started/joining-your-local-mesh/).

## What does “acknowledged” mean? Did someone read my message?

A successful **channel message** usually means another node heard and rebroadcast it. It does not prove that everyone on the channel received it. A **direct-message acknowledgment** confirms that the destination node received it, but not that a person read it.

A missing acknowledgment can mean the message or its return acknowledgment was lost. It doesn't always mean nobody received it. For an important check-in, ask the person to reply. See the official [message-status explanations](https://meshtastic.org/docs/faq/#android-client).

## How far will my node reach?

No product listing can tell you how far your node will reach. A clear path from an elevated site can reach much farther than two radios separated by buildings or a ridge. Mesh relays help only when a chain of nodes has compatible settings and working radio paths.

Test the routes you care about. Improve placement before buying more equipment, and ask nearby members what works in your area.

## It works outside, but not inside my house. What can I do?

A second node in a higher, clearer location can relay messages to your indoor or portable node. Start with **Client** for the home node and consider **Client Mute** for an additional nearby handheld, following our [role recommendations]({{< ref "/docs/getting-started/recommended-settings" >}}).

For a more tailored setup, supported firmware offers **Client Base**, which prioritizes relaying traffic to and from favorited nodes. Review the [device-role documentation](https://meshtastic.org/docs/configuration/radio/device/#roles) before using it. Keep outdoor equipment appropriately enclosed and powered.

## Should I use Router mode or increase the hop limit?

Most people should use **Client** or **Client Mute**. Client already relays traffic; Router is not a range-boost switch. Infrastructure roles need careful placement and coordination with the local community.

A higher hop limit cannot fix a missing first radio link. It allows a packet to travel through more relays and can add traffic. Start with the [BayMesh recommendations]({{< ref "/docs/getting-started/recommended-settings" >}}) and troubleshoot placement before changing them.

## Why does Discord show messages that my radio never receives?

The logger collects messages uploaded by gateways across a much larger area than your radio may reach. Seeing a message there means a gateway heard it, not that a radio path exists back to your node. Hills, disconnected groups of nodes, and one-way links can all affect what you receive.

[MQTT]({{< ref "/docs/getting-started/MQTT" >}}) connects radios to internet services. It is optional and does not replace a working local radio path for off-grid communication.

## Why isn't my node on the map? Are all map entries reachable?

Public maps depend on nodes sharing positions and that data reaching the map service, often through MQTT. A node may be active without publishing its location. Conversely, a map entry or your app's node list may contain old information.

Check when a node was last heard and whether it was heard over radio or via MQTT. Seeing a distant node in the list does not prove you can reach it now.

## Are my messages and location private?

Treat the default channel as public: its encryption key is published. Messages may also appear in internet-connected loggers. The **OK to MQTT** setting is a forwarding preference, not a way to keep public radio traffic secret.

For a private group, create a channel with a random shared key and keep its QR code private. Review location sharing separately on every enabled channel; a private chat doesn't automatically hide positions broadcast on the public channel. Our [private-use guide]({{< ref "/docs/emergency-private-use" >}}) walks through both options. See also the official [encryption overview](https://meshtastic.org/docs/overview/encryption/).

## Which firmware should I install? Why won't Bluetooth reconnect?

Use the current **Beta** release recommended for your exact device unless you are deliberately testing Alpha firmware. Read the release notes and follow the [official flashing instructions](https://meshtastic.org/docs/getting-started/flashing-firmware/); the update method depends on the hardware. Keep a private backup of your channel settings before updating.

After a reflash or reset, you may need to forget the old Bluetooth pairing in your phone's settings and pair again. Check the device-specific instructions if pairing still fails. Firmware updates do not travel over the LoRa mesh. See the [official firmware FAQ](https://meshtastic.org/docs/faq/#firmware).

## Can I rely on Meshtastic in an emergency?

It can be another way to reach people, provided your radios are charged and there is a working radio path. Practice from real locations, agree on check-in times, and keep another communication plan. Neither the public mesh nor a private channel guarantees delivery or connects you to emergency services. See [Emergency and Private Use]({{< ref "/docs/emergency-private-use" >}}).

## Where can I get help or find people to test with?

Join [BayMesh on Discord](https://discord.gg/GpsKbhGJx5) or take part in the [weekly net]({{< ref "/docs/weekly-net" >}}). When asking for help, include your device model, firmware version, general area, radio settings, and what you have already tried. Remove private channel keys and precise home locations from screenshots.
