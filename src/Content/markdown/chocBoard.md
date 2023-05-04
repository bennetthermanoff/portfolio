# chocBoard

chocBoard is a truly wireless, split ergonomic keyboard designed for portability and comfort. It is powered by ZMK firmware and a pair of Nice!Nanos. The design is 100% my own and open source.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/iris.jpeg)

I have been using my Keeb.io Iris for just about 3 years now, and I have developed a strong preference for split ergo keyboards. Last year I started as a software developer intern and found myself bringing my Iris with me wherever I worked. The Iris is not a large keyboard, but it is still a bit bulky to carry around. I decided to design a keyboard that would be more portable, and using [Ergogen](https://github.com/ergogen/ergogen) to create the layout proved to be very useful for rapid prototyping and testing.

Every time the layout was tweaked I would 3D Print a dummy version at the [Tulane Makerspace](https://makerspace.tulane.edu) to test out how it fit my hands, eventually perfecting the layout led to me routing finishing the PCB design and sending it off to [JLCPCB](https://jlcpcb.com/) who did a fantastic job.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/portraitPCB.jpeg)

chocBoard uses Kaihl Choc switches to maintain a low profile. I opted for choc pro reds and have been pretty happy with them other than the long process of individually lubricating each switch for better characteristics.

I purchased diodes, microprocessors, batteries, switches, caps, and nice!view screens from [typeractive.xyz](https://typeractive.xyz/) and got to work soldering everything together. There is a good amount of SMD diodes so it was good practice for me to get better at soldering SMD components. The PCB is designed to be flipped over for the other half of the keyboard, so I have bridges underneath the microcontroller to flip the pins around. This greatly reduces cost by allowing for a single PCB design for both halves of the keyboard.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/pcb.png)

My favorite part of the keyboard is easily the firmware. My Iris uses QMK firmware, which is great, but [ZMK](https://github.com/zmkfirmware/zmk) is a new firmware based on Zephyr that is just awesome for wireless boards. I have [forked the ZMK repo](https://github.com/xpsking/zmk) to add configuration for chocBoard and its various features.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/chocGif.gif)

Using the chocBoard as my daily driver keyboard has been a quick way to find bugs and issues with the firmware and design. I have gone through numerous 3D printed case designs to find the perfect fit for the keyboard. The current case is great, with threaded inserts for easy servicing, a screen protecting bezel, and a nice low profile with 3D printed TPU feet. I also created a carrying case that makes it easy to bring the keyboard with me wherever I go and not worry about it getting damaged.

![photo](https://github.com/xpsKING/portfolio/raw/master/src/Content/markdown/images/chocCaseDeployGif.gif)


