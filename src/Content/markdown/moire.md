# Moiré

Moiré is the culmination work in mesh sensor networks that originally began as [Current](https://hermanoff.dev/content/current) alongside fellow Tulane Engineering student and close friend [Maddie Wisinski](https://wisinski.dev). As a senior capstone project, we had a both an Engineering team led by Maddie and a Computer Science team led by myself. 

The goal was to create a network of sensors that could be deployed at FCAT to monitor soil conditions of different reforestation sites at [FCAT Ecuador](https://fcat-ecuador.org/), an NGO focused on biodiversity conservation. The sensors would be able to detect soil moisture, temperature, and humidity, and send this data to a central server for analysis.

Most importantly, the sensors form a mesh network, allowing them to communicate with each other and extend the range of the network. This is crucial for FCAT, as the sites are spread out over a large area and extremely limited network connectivity.

## Technologies

Nodes: Each node is equipped with an ESP32 CPU, running C++ embedded code. The ESP32 collects data from an onboard capacitive soil moisture, temperature, humidity, and light sensors. 

Mesh: All nodes wake up at the same time to form the mesh network and broadcast their previous measurements. Each node has an approximate range of 0.5 miles, but with the mesh network nodes can broadcast through each other, hopping messages via neighboring nodes.

Database and Software: The data is sent to a central server running an Express.js REST API and a MySQL database. The data is stored in the database and can be accessed via the Moiré web app. The web app is built with React.js and allows users to view the data in real-time.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/moireMap.png)

## Hardware Development

Moiré’s PCB has gone through 4 iterations leading to final production, each slowly adding features like LoRa Radio, Solar Charging, and inbuilt sensors. The first iteration was a simple breakout board for the ESP32, but the final iteration is fully integrated. I designed the PCB in KiCad and manufactured by JLCPCB.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/pcbRender.png)


## Final Hardware and Deployment

In the end, I'm really proud of the final hardware for this project. It's definitely the most complex PCB I've ever designed and I learned a lot about power management, sensor interfacing, and RF communication. The case design was also a fun challenge, and I'm happy with how it turned out.

100 sensors have been manufactured and are currently awaiting deployment at FCAT Ecuador. Some firmware bugs and waterproofing measures are still being worked on, but the sensors are expected to be deployed next year. While the project is no longer in the original hands of the Tulane team, the project will be handed off to next year’s senior capstone team to continue development! Give a star to our [GitHub Repos](https://github.com/moire-cs) to show your support and keep up with the project!

![photo-small](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/blowup.png)
