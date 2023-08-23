# chocBoard

“chocBoard” is a truly wireless, split keyboard designed for portability and ergonomics which I personally designed, engineered, and built at the Scot Ackerman [Makerspace at Tulane University.](https://makerspace.tulane.edu)

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/iris.jpeg)

In early 2020, I developed a Repetitive Strain Injury (RSI) from typing on my computer’s keyboard. To combat this, I built an Iris ergonomic keyboard designed by keebio. This keyboard served me relatively well for three years, but it did not fully address my need for easy portability and limited wrist strain. 

Last summer I worked hybrid (downtown office and home office) as a software developer intern and found myself bringing my Iris with me to both locations. The Iris was not a large keyboard, but it was still a bit too bulky to carry around on a regular basis and after long work hours I felt the return of my RSI. This led me to design a keyboard that would be more portable, and using [Ergogen](https://github.com/ergogen/ergogen), I created and iterated a layout that would prevent my injuries from returning.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/portraitPCB.jpeg)

Every time the layout was tweaked I would 3D Print a dummy version at the Tulane MakerSpace to test out how it fit my hands, eventually perfecting the layout. Next, I created the circuit board design: placing diodes, switches, sockets, and every copper trace for the PCB. chocBoard uses a mirrored design: mounting the components on the reverse side allows for both halves of the keyboard to use the same PCB. chocBoard uses special low-profile keyboard switches to keep its height from the table low, reducing need for the user to raise their wrists. Separating the keyboard’s halves prevents ulnar deviation and its low profile reduces harmful wrist angles.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/pcb.png)

I purchased diodes, microprocessors (nice!nano), batteries, switches, caps, and screens (nice!view) for my PCB and got to work soldering everything together at the MakerSpace. There is a good amount of surface mount components, measuring only a couple millimeters long, so it was excellent practice for my soldering skills. My favorite part of the keyboard is the firmware. I have created my own custom version of ZMK, a wireless keyboard firmware based on Zephyr, to add configuration for chocBoard and its various features. I have my fork of ZMK and every other aspect of chocBoard’s design on my GitHub account.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/chocGif.gif)

Using chocBoard as my daily driver keyboard has been a quick way to find bugs and issues with the firmware and design, resulting in a perfect final product. The current case has gone through many 3D printed iterations, with threaded inserts for easy servicing, a screen protecting bezel, and a low profile with TPU feet all made on the MakerSpace’s printers. Finally, I created a protective carrying case. From start to finish I spent over three months at the MakerSpace perfecting my project.

![photo](https://github.com/bennetthermanoff/portfolio/raw/master/src/Content/markdown/images/chocCaseDeployGif.gif)

Importantly, with the increase in hybrid work environments this portable keyboard allows for safer typing as well as increased productivity through its custom design. Software engineers are required to type quickly and accurately and being able to use this keyboard anywhere with any setup has allowed for great consistency. I have enjoyed making this custom keyboard come to life, and it has positively impacted my daily life as my favorite input device. Additionally, my open-source design is fully accessible to everyone and my hope is that my work helps others develop their own keyboards.