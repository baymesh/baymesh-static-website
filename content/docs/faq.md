---
title: FAQ's
description: Frequently Asked Questions
weight: 15
tags: [FAQ]
---

* Q - I send messages but don't get an ack/response?<br>
A - In order to get an acknowledgement from your message, there must be another node in range. Here's a few tips to help out:
    1. Check the [maps](map), to see if there are any nodes close to you on the map. Within a few miles at most. Remember that not all nodes are reported on the map and the nodes on the map may be old. 
    2. Get as clear line of sight to other nodes as possible. In your basement is bad, on the roof is best. Lora signals don't pass through trees and building very well, so the less stuff between you and your target, the better. At a bare minimum, put the node in a window.
    3. Consider a better antenna. If you're using something cheap like a Lilygo T-Beam or Heltec V3, they often ship with poorly tuned antennas. Buy something from a reputable side like Rokland, or ask around for what has had good results on Amazon.
    4. Try from other locations.

* Q - I can get messages outside/from my roof, but not in my house, what can I do?<br>
A - Use the mesh! Put a second node in a box outside, with a good antenna. It can be your own personal "base station" to boost the message to your carry around node.

* Q - I see my messages on #logger, but I never get messages on my radio<br>
A - The messages logged in discord come from all over the Bay Area (and into Sacramento and the Central Valley). Messages are uplinked from various nodes that may be dozens of miles away from you. Additionally due the geography of the Bay Area and minimal nodes on mountain tops, message in one geographic area may not make it to you.

* Q - Can you ELI5 Meshtastic?<br>
A - Imagine if walkie-talkies could talk to multiple people at once, and automatically relay your messages from one radio to another to get better range. It's a lot like that, except its digital so you're sending text messages...except you don't need cell service.

