---
title: Map & Data
menu: {main: {weight: 30}}
---

{{% blocks/section type="row" color="light" %}}
<div class="col-12 col-lg-6 mb-4">
    <figure>
        <img src="2025-09-09_map.png" alt="Historical map of Bay Area node reports from September 9, 2025; this is not a coverage map" style="width: 100%; height: auto;" loading="lazy">
        <figcaption>Bay Area node reports, September 9, 2025. This snapshot shows reported locations, not current coverage.</figcaption>
    </figure>
</div>
<div class="col-12 col-lg-6">

## Explore the mesh

The Bay Area has a growing community of radio users. Maps can help you find activity and people to test with, but a dot doesn't guarantee that a node is still there or that your radio can reach it. An empty area is an invitation to try a radio and meet your neighbors.

- [Meshview](https://meshview.bayme.sh/) — Built and run by the BayMesh team. Search for a node and explore the packets and telemetry that reach the service through participating gateways.
- [Bay Mesh Explorer](https://app.bayme.sh/) — Search for your node for an overview of its reported information.
- [Meshtastic Map by Liam Cottle](https://meshtastic.liamcottle.net/?lat=37.83034660061394&lng=-122.16728210449216&zoom=10) — A wider view of reported Meshtastic nodes.
- [Meshmap.net](https://meshmap.net/) — Another public view of shared node locations.

</div>
{{% /blocks/section %}}

{{% blocks/section type="row" color="white" %}}
<div class="col-12 col-lg-10 mx-auto">

## What does “last heard” mean?

It means the app or service received information associated with that node at the displayed time. Check which service you're looking at: a timestamp on an internet map isn't necessarily the last time **your radio** heard that node. The latest packet may also be newer than its last position report.

A recent report is useful evidence of activity. It doesn't prove that the node can receive your next message, that its owner is watching, or that a working return path exists.

## Why is my node missing?

A public map needs a position report and a way for that report to reach its service. Your radio can be working normally without appearing there. Location sharing may be off, a gateway may not hear you, internet forwarding may be disabled, or the map may filter out older reports. Different maps can show different sets of nodes.

You don't have to publish your home location to participate. Review the [location and MQTT settings]({{< ref "/docs/getting-started/recommended-settings" >}}) before enabling sharing. A missing dot by itself isn't a reason to reset your radio.

## Does a nearby dot mean I have coverage?

No. Hills, buildings, antenna placement, transmit power, and noise all affect the link. Your radio may hear a powerful hilltop node that cannot hear your reply from indoors. The same location can work outdoors and fail inside a building. See our [troubleshooting guide]({{< ref "/docs/troubleshooting" >}}) for that one-way-link example and steps to test it.

Also distinguish **radio reception** from **MQTT or internet reports** when the app or service identifies the source. A packet reaching a gateway elsewhere in the Bay Area does not establish a radio route from your home to its sender. Lines between nodes, where shown, describe the data the service has; they aren't a promise of a working link now.

## Test the places you actually use

1. Apply the [BayMesh settings]({{< ref "/docs/getting-started/recommended-settings" >}}) and choose a safe spot with a clear radio view.
2. Arrange a short exchange with another member. Send a message and ask for a written reply to check both directions.
3. Record the date, general location, indoor or outdoor placement, radio and antenna, and whether the exchange worked both ways. Note whether the test used radio only or involved internet forwarding.
4. Repeat from the locations that matter to you. Share useful results in [Discord](https://discord.gg/GpsKbhGJx5), leaving precise private locations out of public posts.

A dated report from a real exchange is more useful than an undated claim that an entire neighborhood is covered. Coverage changes as radios move, batteries run down, and relay nodes come and go.

</div>
{{% /blocks/section %}}
