---
title: Licensed Operations
description: How amateur-radio operation differs from joining the public BayMesh network
weight: 50
tags: [Ham, Amateur Radio]
---

You do **not** need an amateur radio license to join BayMesh with appropriate US-region hardware operated within applicable limits. If you have a call sign, you can use it as your node name while leaving **Licensed Operator off** and following our [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}).

**Licensed Operator** changes how your station operates. Enable it only when you intend to operate under amateur radio rules. The guidance below concerns US operation.

## What changes in amateur-radio mode?

Amateur operation can support experiments with higher transmit power and different antenna systems. It also brings different responsibilities:

- **Messages must not be encrypted to conceal their meaning.** That includes a private family channel. The relevant restriction is [47 CFR § 97.113(a)(4)](https://www.ecfr.gov/current/title-47/section-97.113).
- **Identify your station.** Set your long name to your call sign. US rules require identification at the end of a communication and at least every 10 minutes during a communication; make sure your setup meets those requirements. See [§ 97.119](https://www.ecfr.gov/current/title-47/section-97.119).
- **Observe power limits.** For spread-spectrum emissions, [§ 97.313(j)](https://www.ecfr.gov/current/title-47/section-97.313) limits transmitter output to 10 W PEP. The same section requires using only the power needed for communication. This is not a recommendation to run 10 W, and the radio's advertised output does not establish what your installation may legally use.
- **Keep the activity appropriate for amateur radio.** Business traffic and other prohibited transmissions remain subject to [§ 97.113](https://www.ecfr.gov/current/title-47/section-97.113).

The official [Meshtastic amateur radio FAQ](https://meshtastic.org/docs/faq/#amateur-radio-ham) explains why licensed mode and the normal encrypted public mesh are not interoperable. A node in licensed mode cannot participate in BayMesh's public channel.

## Setting up a licensed experiment

Coordinate with the other operators first. Agree on an appropriate frequency, preset, unencrypted channel, and test schedule. Keep experiments separate from the public mesh and follow the band privileges, station-control requirements, and interference rules that apply to your station.

In the app's **User** settings, set **Long Name** to your call sign and enable **Licensed Operator** (also called **Is Licensed**). Review the channel configuration and confirm that encryption is disabled. Check your firmware's behavior and identification settings; a single toggle does not address every operating requirement. The [official user configuration guide](https://meshtastic.org/docs/configuration/radio/user/) describes the controls.

Check the antenna, feed line, power supply, cooling, and RF-exposure requirements before increasing output power. A better location often helps a link more than additional power, especially when the other end is a small handheld.

## Returning to BayMesh

Disable Licensed Operator and restore the public mesh's [recommended settings]({{< ref "/docs/getting-started/recommended-settings" >}}), including the primary channel name and key, US region, Medium Fast preset, and slot 45. Restore suitable transmit-power settings, including any hardware power jumpers, before transmitting. Confirm you can exchange messages with another BayMesh node.

For private family or neighborhood messaging, use the regular encrypted mode described in [Emergency and Private Use]({{< ref "/docs/emergency-private-use" >}}).
