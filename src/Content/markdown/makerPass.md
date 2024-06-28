
![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/mpbanner-dark.png)

MakerPass is an  iOS/Android app for managing access to machines in makerspaces. It is a successor of the [Tulane Makerspace Card Reader System](https://hermanoff.dev/content/cardReader) built for _any_ makerspace.

MakerPass' server is self-hosted and written in TypeScript using Node.js and Express. It uses a SQLite database to store user and machine information. **Because of its light weight nature, it can be run on a Raspberry Pi or any other server directly in the makerspace.**

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/mpmainscreen.png)

MakerPass doesn't currently have a web interface, instead opting for a free iOS/Android app built with Expo and React Native. The app communicates only with the self-hosted server, and users enable machines by scanning a QR code on the machine. The app also allows for users to tag out machines for maintenance or repair.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/mptrain.png)

MakerPass hosts a MQTT server for communication with wifi relays. **The primary purpose of MakerPass is to only allow certain user's access to certain tools.** At the Tulane Makerspace, users must be trained on each tool, and with MakerPass, they are able to turn on the power to their authorized machines.

At the Tulane Makerspace, we use Sonoff S31 wifi relays to control the power to our machines. These relays are flashed with custom Tasmota firmware to allow for MQTT communication. These relays only cost $10, making **MakerPass a very cost-effective solution** compared to other commercial solutions which can cost thousands of dollars.

Like all my projects, MakerPass is open source! Give it a star on [GitHub](https://github.com/bennetthermanoff/maker-pass-server) to show your support and keep up with the project!