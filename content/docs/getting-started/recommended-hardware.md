---
title: Recommended Hardware
description: Our picks for a first node, a portable radio, or a home base station
tags: [Newbie, Hardware]
---

Start with the kind of node you'll use: something to carry, a kit to build, or a base station to leave at home. For BayMesh, choose hardware and an antenna suitable for the US 902–928 MHz band, usually sold as **915 MHz**, and select **Meshtastic** firmware when ordering.

These picks cover a few useful starting points. For more local advice, visit the [Discord resources thread](https://discord.com/channels/1215705285159817236/1239383881698902036/1239393319566442596). Once your radio arrives, follow our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}).

## Seeed Studio SenseCAP Card Tracker T1000-E

{{< figure src="https://i.meshware.net/devices/seeed-t1000e/6598a6eadbf866bc1d1dd4d56fa216ab1df2cfc86bc86e7d1be2fbdc72a38a52.webp" alt="Seeed Studio SenseCAP Card Tracker T1000-E" class="hardware-image" link="https://meshware.net/d/seeed-t1000e" >}}

**Our first pick for a simple, portable starter node.** The T1000-E packs GPS, a 700 mAh battery, and an internal antenna into a slim card-shaped case. Its IP65 rating makes it a practical everyday carry, and there's no assembly required. Use your phone to read and send messages.

- **Good fit:** A first node, walks, hikes, and everyday use.
- **Highlights:** Compact, lightweight, built-in GPS, and about $40 before shipping.
- **Tradeoffs:** No screen or external antenna connector. It uses a magnetic charging/data cable, so keep that cable handy. Battery life depends on GPS use, settings, and mesh traffic.

[More specs](https://meshware.net/d/seeed-t1000e)

### Also consider: SenseCAP MeshTracker X1

{{< figure src="https://i.meshware.net/devices/seeed-x1/1f78e909eada8906730e033703ccfd16d530a3f9df4d444c7ef408990b001197.webp" alt="Seeed Studio SenseCAP MeshTracker X1" class="hardware-image" link="https://meshware.net/d/seeed-x1" >}}

The newer X1 keeps the card format and adds an LR2021 radio, dual-band GPS, USB-C, a 1,100 mAh battery, and an IP66 rating. Like the T1000-E, it has an internal antenna and no screen.

**Availability as of October 20, 2026:** [OpenELAB lists the X1 for preorder](https://openelab.com/products/seeed-studio-sensecap-meshtracker-x1-for-meshtastic), while [Seeed lists it in stock](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html). Check the seller's shipping estimate before ordering.

[More specs](https://meshware.net/d/seeed-x1)

## RAKwireless WisBlock

{{< figure src="https://i.meshware.net/devices/rak-rak4631/0ee50af49197e9330f675828659e9517d0a9186f4e9f6d2f70dba2d7204ef936.webp" alt="RAKwireless WisBlock RAK4631 core module" class="hardware-image" link="https://meshware.net/d/rak-rak4631" >}}

**Our pick for a modular DIY build.** Start with a Meshtastic starter kit built around the RAK4631 core and a compatible WisBlock base board. Add a battery, enclosure, GPS, display, or supported sensors to suit your needs. Its low power use also makes it a good foundation for a custom solar node.

- **Good fit:** Tinkering, custom enclosures, and DIY home or solar nodes.
- **Highlights:** Modular parts, an external antenna connection, and battery/solar connections on supported base boards.
- **Tradeoffs:** Requires assembly and some planning. The RAK4631 core alone is not a complete radio; check which base board, antennas, battery, and enclosure your kit includes.

[More specs](https://meshware.net/d/rak-rak4631)

## Seeed Studio Wio Tracker L1 Pro

{{< figure src="https://i.meshware.net/devices/seeed-l1-pro/2e9f6d7397e02e2596c94ee380d6c9f793fda8617c6052e06f28c4a6e6d43c75.webp" alt="Seeed Studio Wio Tracker L1 Pro handheld" class="hardware-image" link="https://meshware.net/d/seeed-l1-pro" >}}

**Our pick for a portable node with a screen and external antenna.** The L1 Pro combines an efficient nRF52840 processor, an SX1262 radio, and GPS with a 1.3-inch OLED, a case, and a 2,000 mAh battery. It's a complete handheld with no assembly required.

- **Good fit:** A ready-to-use portable radio with a display.
- **Highlights:** GPS, OLED display, USB-C, and a replaceable external antenna.
- **Tradeoffs:** Bulkier than a card tracker. Don't assume the handheld case is weatherproof.

[More specs](https://meshware.net/d/seeed-l1-pro)

## B&Q Consulting Station G3

**Our pick for a powered home base station.** With **1 watt (1,000 mW) of transmit power for US operation**, the Station G3 is more powerful than any other radio on this page. Its modular design includes an ESP32-S3 host, an OLED display, an SMA antenna connector, and an adjustable receive amplifier. The receive settings can help you adapt it to a quiet or noisy radio environment.

- **Good fit:** A fixed installation with a good antenna location and reliable external power.
- **Highlights:** 1-watt transmit power, replaceable boards, and adjustable radio hardware.
- **Tradeoffs:** No built-in battery. It needs a separate **15 V USB-C PD or 9–19 V DC supply rated at least 25 W**; an ordinary USB phone charger may not work. Choose the complete node, rather than a motherboard or RF-board bundle.

Its power requirements make it best suited to a fixed location. Follow the [manufacturer's setup instructions](https://wiki.bqvoy.com/en/devkits/station-g3) to select the correct transmit-power setting.

[More specs](https://meshware.net/d/bq-station-g3)

## Seeed Studio SenseCAP Solar Node P1-Pro

{{< figure src="https://i.meshware.net/devices/seeed-solar-node-p1-pro/c734893c3825241be4611f867080ca72d2d6f81edf1db943a0e99bea5e8d6130.webp" alt="Seeed Studio SenseCAP Solar Node P1-Pro with solar panel and antenna" class="hardware-image" link="https://meshware.net/d/seeed-solar-node-p1-pro" >}}

**Our pick for an at-home solar base station.** The P1-Pro combines a 5 W solar panel, an IPX6 enclosure, GPS, an external antenna, and four included 3,350 mAh 18650 cells. It's a convenient option for a sunny outdoor spot where running power would be awkward.

- **Good fit:** A home node with a clear radio path and good sun exposure.
- **Highlights:** Solar charging and batteries in one package, with low-power nRF52840/SX1262 hardware.
- **Tradeoffs:** Shade, fog, and winter weather affect charging. Monitor the battery through several cloudy days before relying on the installation. The cheaper P1 omits the Pro's GPS and batteries.

For a home installation, we recommend **Client Base** (`CLIENT_BASE`). While connected to the solar node, mark your handheld or indoor nodes as favorites so it prioritizes relaying traffic to and from them. It handles other traffic like a regular Client. Follow our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}) and the [Client Base documentation](https://meshtastic.org/docs/configuration/radio/device/#roles).

[More specs](https://meshware.net/d/seeed-solar-node-p1-pro)
