---
title: Troubleshooting
description: Work through pairing, coverage, message delivery, and power problems
weight: 27
tags: [Help, Newbie]
---

Start with the symptom below and change one thing at a time. Write down what changed and whether it helped. A nearby test partner makes it much easier to separate a settings problem from a coverage problem.

## My phone won't connect

1. Charge and power on the radio. Keep it near your phone and enable Bluetooth.
2. Open the Meshtastic app and select the correct radio. Allow the Bluetooth or Nearby Devices permissions the app requests.
3. Check the pairing PIN on the radio or in its device instructions. Disconnect another phone or computer that may already be using it.
4. Restart the app and radio. After a reflash or reset, forget the old pairing in your phone's Bluetooth settings, then pair again through the app.
5. Check the [Android](https://meshtastic.org/docs/software/android/user/) or [Apple](https://meshtastic.org/docs/software/apple/user/) guide for your connection method. A USB connection needs a data-capable cable and support from that device and client.

## Why don't I see any nodes or receive messages?

1. Compare **US region, Medium Fast preset, and frequency slot 45** with our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}). Check the public channel name and key too. Factory settings may use a different preset.
2. Check that the radio is powered and the app is connected to the right device. If your radio uses an external antenna, check that it's appropriate for 915 MHz and the connectors match. Power off before attaching or changing it.
3. Move to a higher, clearer spot, away from your body, metal, and nearby electronics. Try outside as well as at a window; some windows attenuate radio signals.
4. Allow time for traffic. A quiet node list isn't an immediate verdict on coverage. Arrange a short exchange with a nearby member through [Discord](https://discord.gg/GpsKbhGJx5).
5. If you have a second radio, compare their settings and test a few meters apart. If that works, move farther apart gradually.

Map dots and internet logger messages can help you find someone to test with, but they don't establish a radio path. Read [Map & Data]({{< ref "/map" >}}) before treating a distant node as a reachable neighbor.

If your app offers local mesh discovery, it can help identify nearby activity. Follow BayMesh's settings for the community network; settings from another city's guide may put you on a different mesh. See the official [joining guide](https://meshtastic.org/docs/getting-started/joining-your-local-mesh/).

## I can hear others, but they can't hear me

**Reception and transmission don't have the same reach in every setup.** LoRa radios have sensitive receivers that can decode very weak signals, while their transmit power varies by model. The receiving conditions at the far end matter too.

For example, your **100 mW radio inside a house may hear a 1 W node on a mountaintop**, yet the mountaintop node may not hear your reply. The hilltop transmitter has ten times the power. Walls, antenna differences, receiver sensitivity, and local noise also affect whether each direction works. Hearing that node proves only that its message reached you.

Move your radio outside or higher and ask for a reply to a short test message. If that helps, consider a [home base station]({{< ref "/docs/home-base-station" >}}) with better placement. Increasing the hop limit cannot repair this first link, and increasing your transmit power alone doesn't solve every reception problem. Meshtastic's [radio settings reference](https://meshtastic.org/docs/overview/radio-settings/) explains the factors behind radio range.

## My message says acknowledged, but nobody replies

A channel acknowledgment is evidence that another node heard and relayed the message. It isn't a read receipt, and it doesn't prove the intended person received it. A direct-message acknowledgment comes from the destination radio, but still doesn't tell you whether a person read the message.

Ask a specific person for a written reply when confirmation matters. If an acknowledgment is missing, the original message or the return acknowledgment may have been lost. Avoid sending the same message repeatedly in quick succession. See the official [message-status explanations](https://meshtastic.org/docs/faq/#android-client).

## Messages are slow or unreliable

LoRa has limited capacity. Relays, retries, and other users share the same airtime. Allow time for delivery, keep messages short, and compare results with a nearby test partner before changing settings.

Check for frequent position reports, telemetry, automated tests, or repeated traceroutes from your own nodes. Use our [recommended broadcast intervals]({{< ref "/docs/getting-started/recommended-settings#position-and-telemetry" >}}). A higher hop limit can increase traffic without improving a weak link.

## My radio restarts or the battery drains quickly

1. Fully charge it with a known-good cable and a power supply that meets the manufacturer's requirements. A restart during transmission can point to a power problem.
2. Check the device's power settings and whether Wi-Fi, GPS, a bright screen, or frequent broadcasts are consuming power you don't need to use.
3. If using a USB power bank, check that it stays on with the radio's small load. Some banks switch off automatically.
4. For a solar node, compare battery levels over several days, including cloudy weather. Check shade, panel orientation, connections, and the manufacturer's charging temperature limits.
5. Record the firmware version and when the problem occurs. Follow the device's instructions before reflashing or resetting; save your settings privately first.

Battery life varies considerably by device and configuration. Measure your actual setup before depending on it for a trip or outage.

## Ask for help

Copy this into [Discord](https://discord.gg/GpsKbhGJx5) and fill in what you know:

```text
Device model and antenna:
Firmware version and phone/app version:
General area (no exact home address needed):
Region / preset / frequency slot / role / hop limit:
Power source and placement:
What I expected:
What actually happened, including message status:
What I've tried and what changed:
```

Remove private keys, channel QR codes, precise locations, and personal information from screenshots. If you can reproduce the problem with a nearby second radio, include those results too.
