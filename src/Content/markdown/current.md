# Current Water Sensors

For my sophomore design project, me and two other classmates created Current, a system to sense and report flooding across Tulane's campus.

New Orleans receives over 50 inches of rain per year, and Tulane's campus is located in a low-lying area. This means that Tulane's campus is prone to flooding. The university does not have a system in place to monitor flooding. Our system used a LoRaWAN network of water sensors to detect flooding and report it to a central server. The server then sends out alerts to the appropriate people as well as displaying the data on a map on a website.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/currentscreenshot.jpeg)

Our sensors used ESP32 based microprocessors, with solar panels and lithium ion batteries to power them. The sensors were placed in the ground, and used multiple capacitive sensors to detect water at different levels. 

Each sensor's casing was 3D printed using designs created in Fusion360. The sensors were programmed using the Arduino IDE in C++. The code is available on [Github](). We used React to build the website and Node.js and The Things Network to build the server. The server was hosted on Microsoft Azure.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/updatedwatersensor.png)