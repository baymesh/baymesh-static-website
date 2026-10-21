---
title: Getting Started
description: From opening the box to your first reply on BayMesh
tags: [Newbie]
weight: 20
---

You don't need to be a radio expert to join BayMesh. Start with one supported radio, the Meshtastic app, and a place to test. This guide takes you from a new device to a conversation.

## 1. Get the radio ready

If you're still choosing, start with our [hardware recommendations]({{< ref "recommended-hardware" >}}). Buy the version intended for the US 915 MHz band and check whether the package includes a battery, case, and antenna.

Charge the radio with the cable and power supply specified by its manufacturer. If it has a removable antenna, attach the correct antenna **before powering it on**. Devices such as the T1000-E have a built-in antenna.

Check whether Meshtastic is already installed. If it needs an update, use the recommended **Beta** release for that exact model and follow the [official flashing instructions](https://meshtastic.org/docs/getting-started/flashing-firmware/). A routine update doesn't always require a full erase.

## 2. Install the app and pair

Install the official Meshtastic app while you still have internet access. The [Android download page](https://meshtastic.org/docs/software/android/) and [Apple download page](https://meshtastic.org/docs/software/apple/) link to the available stores. Turn on Bluetooth and keep the radio near your phone.

| Phone | Connect to your radio |
| --- | --- |
| **Android** | Open Meshtastic, allow the Bluetooth or Nearby Devices permissions it requests, and open **Connect**. Scan for Bluetooth devices, select your radio, and accept the pairing prompt. Some Android versions also require location permission for scanning. |
| **iPhone / iPad** | Open Meshtastic, allow Bluetooth access, and tap **Connect**. Select your radio from the nearby devices list and complete pairing. |
{.phone-setup-table}

If asked for a PIN, use the one shown by the radio or specified in its device instructions. Wait until the app shows a connection before changing radio settings. Bluetooth connects your phone to **your radio**; the separate LoRa link connects that radio to the mesh.

<details>
<summary>See Android and iPhone setup screenshots</summary>
<div class="row mt-3">
<div class="col-12 col-md-6">
<figure>
<img src="/images/docs/android-bluetooth-scan.webp" alt="Meshtastic Android Connect screen scanning for nearby Bluetooth radios" width="280" style="max-width: 100%; height: auto;" loading="lazy">
<figcaption>Android: scan for your radio in Connect. Screenshot from the <a href="https://meshtastic.org/docs/software/android/user/connections/">official Android connection guide</a>.</figcaption>
</figure>
</div>
<div class="col-12 col-md-6">
<figure>
<img src="/images/docs/apple-bluetooth-permission.webp" alt="Meshtastic Apple app setup screen requesting Bluetooth access" width="280" style="max-width: 100%; height: auto;" loading="lazy">
<figcaption>iPhone: allow Bluetooth access during setup, then open Connect. Screenshot from the <a href="https://meshtastic.org/docs/software/apple/user/getting-started/">official Apple getting-started guide</a>.</figcaption>
</figure>
</div>
</div>
</details>

App screens change between releases. The official guides above cover the current controls. If the connection fails, start with [Troubleshooting]({{< ref "/docs/troubleshooting" >}}).

## 3. Apply BayMesh settings

Open **Settings → LoRa** on Android, or **Settings → Radio Configuration → LoRa** on Apple devices. Set:

- **Region:** United States (US)
- **Modem preset:** Medium Fast / Medium Range Fast
- **Frequency slot:** Leave it at **0 (automatic)** or **45**. With the US region, Medium Fast preset, and default primary channel name, automatic selects slot 45, so you probably won't need to change it.

Keep the default public primary channel: **blank name** and key **`AQ==`**. On a new radio, you shouldn't need to change the other settings to get started. Save or send your changes; the radio may restart when you change some settings.

Enable **OK to MQTT** in the LoRa settings if you'd like to see your public messages in [Discord](https://discord.gg/GpsKbhGJx5) or on [Meshview](https://meshview.bayme.sh/). This lets participating gateways upload messages they hear from your radio.

You can also give the radio a recognizable long name and a short name of up to four characters. For more detail, see our [recommended settings]({{< ref "recommended-settings" >}}).

## 4. Send a first message

Try a clear location, such as an upper-floor window or an outdoor spot. Open the public channel in the app and send a short introduction:

> Hi BayMesh! New node in Oakland near Lake Merritt. Can someone reply if you hear me?

Use a general neighborhood, not your exact home address. Give people time to reply. If nobody answers, arrange a test in [Discord](https://discord.gg/GpsKbhGJx5) or join the [weekly net]({{< ref "/docs/weekly-net" >}}).

An acknowledgment is useful, but **a written reply is the best first test of a conversation**. Receiving a distant node doesn't prove it can hear you back. If you see traffic but can't get a reply, work through [Troubleshooting]({{< ref "/docs/troubleshooting" >}}) before sending more test messages.

## 5. Try the places you care about

Once you have a successful exchange, try the rooms, walks, or travel routes where you'll use your radio. You can test without cellular data or Wi-Fi; keep Bluetooth on so the app stays connected to the radio.

For better reception at home, read [Home Base Station]({{< ref "/docs/home-base-station" >}}). For family check-ins, start with [Emergency Preparedness]({{< ref "/docs/emergency-preparedness" >}}) and [Private Channels and Groups]({{< ref "/docs/emergency-private-use" >}}).

You're welcome to ask questions and learn as you go. Keep politics off the community channels, be kind, and help the next person get their first reply too.
