---
title: Recommended Hardware
description: Our picks for a first node, a portable radio, or a home base station
tags: [Newbie, Hardware]
---

Start with the kind of node you'll use: something to carry, a kit to build, or a base station to leave at home. For BayMesh, choose hardware and an antenna suitable for the US 902–928 MHz band, usually sold as **915 MHz**, and select **Meshtastic** firmware when ordering.

These picks cover a few useful starting points. For more local advice, visit the [Discord resources thread](https://discord.com/channels/1215705285159817236/1239383881698902036/1239393319566442596). Once your radio arrives, follow our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}).

## Seeed Studio SenseCAP Card Tracker T1000-E

**Our first pick for a simple, portable starter node.** The T1000-E packs GPS, a 700 mAh battery, and an internal antenna into a slim card-shaped case. Its IP65 rating makes it a practical everyday carry, and there's no assembly required. Use your phone to read and send messages.

- **Good fit:** A first node, walks, hikes, and everyday use.
- **Highlights:** Compact, lightweight, built-in GPS, and about $40 before shipping.
- **Tradeoffs:** No screen or external antenna connector. It uses a magnetic charging/data cable, so keep that cable handy. Battery life depends on GPS use, settings, and mesh traffic.

[More specs](https://meshware.net/d/seeed-t1000e)

### Also consider: SenseCAP MeshTracker X1

The newer X1 keeps the card format and adds an LR2021 radio, dual-band GPS, USB-C, a 1,100 mAh battery, and an IP66 rating. Like the T1000-E, it has an internal antenna and no screen.

**Availability as of October 20, 2026:** [OpenELAB lists the X1 for preorder](https://openelab.com/products/seeed-studio-sensecap-meshtracker-x1-for-meshtastic), while [Seeed lists it in stock](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html). Check the seller's shipping estimate before ordering.

[More specs](https://meshware.net/d/seeed-x1)

## RAKwireless WisBlock

**Our pick for a modular DIY build.** Start with a Meshtastic starter kit built around the RAK4631 core and a compatible WisBlock base board. Add a battery, enclosure, GPS, display, or supported sensors to suit your needs. Its low power use also makes it a good foundation for a custom solar node.

- **Good fit:** Tinkering, custom enclosures, and DIY home or solar nodes.
- **Highlights:** Modular parts, an external antenna connection, and battery/solar connections on supported base boards.
- **Tradeoffs:** Requires assembly and some planning. The RAK4631 core alone is not a complete radio; check which base board, antennas, battery, and enclosure your kit includes.

[More specs](https://meshware.net/d/rak-rak4631)

## Seeed Studio Wio Tracker L1 / L1 Pro

**Our pick for a portable node with a screen and external antenna.** The L1 family combines an efficient nRF52840 processor, an SX1262 radio, and GPS. The standard L1 has a 1.3-inch OLED but needs a battery and enclosure. The **L1 Pro** includes a case and a 2,000 mAh battery, making it the easier starting point for a complete handheld.

- **Good fit:** A portable radio with a display, or a small project you can customize.
- **Highlights:** GPS, OLED display, USB-C, and a replaceable external antenna.
- **Tradeoffs:** Bulkier than a card tracker. Check the exact model and bundle: L1, L1 Lite, L1 E-Ink, and L1 Pro are different configurations. Don't assume the handheld case is weatherproof.

[More specs — L1](https://meshware.net/d/seeed-l1) · [More specs — L1 Pro](https://meshware.net/d/seeed-l1-pro)

## B&Q Consulting Station G3

**Our pick for a powered home base station or vehicle installation.** The Station G3 replaces the G2 in our list. Its modular design includes an ESP32-S3 host, an OLED display, an SMA antenna connector, and an adjustable receive amplifier. The receive settings can help you adapt it to a quiet or noisy radio environment.

- **Good fit:** A fixed installation with a good antenna location and reliable external power.
- **Highlights:** Replaceable boards and adjustable radio hardware.
- **Tradeoffs:** No built-in battery. It needs a separate **15 V USB-C PD or 9–19 V DC supply rated at least 25 W**; an ordinary USB phone charger may not work. Choose the complete node, rather than a motherboard or RF-board bundle.

The advertised maximum output is a hardware capability, not permission to transmit at that power. Follow the manufacturer's power-setting instructions and the rules for your installation. Read [Licensed Operations]({{< ref "/docs/licensed-operations" >}}) before considering amateur radio operation.

[More specs](https://meshware.net/d/bq-station-g3)

## Seeed Studio SenseCAP Solar Node P1-Pro

**Our pick for an at-home solar base station.** The P1-Pro combines a 5 W solar panel, an IPX6 enclosure, GPS, an external antenna, and four included 3,350 mAh 18650 cells. It's a convenient option for a sunny outdoor spot where running power would be awkward.

- **Good fit:** A home node with a clear radio path and good sun exposure.
- **Highlights:** Solar charging and batteries in one package, with low-power nRF52840/SX1262 hardware.
- **Tradeoffs:** Shade, fog, and winter weather affect charging. Monitor the battery through several cloudy days before relying on the installation. The cheaper P1 omits the Pro's GPS and batteries.

Start with the **Client** role and our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}). A solar panel or a rooftop location doesn't by itself call for Router mode.

[More specs](https://meshware.net/d/seeed-solar-node-p1-pro)
