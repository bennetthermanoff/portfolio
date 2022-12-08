# Tulane Makerspace Card Reader

React/NodeJS/Express/MySQL app for the Tulane Makerspace. Tablets are mounted on the wall and allow users to turn on the Makerspace's laser cutter, 3D printer, and CNC Mill, and other machines.

Employees are also able to "tag out" machines for maintenance or repair. 

The frontend is a React app that communicates with the backend via a REST API. The backend is a NodeJS/Express app that communicates with a MySQL database. 

The frontend communicates with arudino microcontrollers and NFC card readers via the webserial API to turn on/off the machines. The webserial API is currently only supported in Chromium based browsers.

All of the code is open source and available on [GitHub](https://github.com/xpsking/TU-Makerspace-Card-Reader).

![Tulane Makerspace Card Reader](https://raw.githubusercontent.com/xpsking/TU-Makerspace-Card-Reader/master/src/Content/markdown/images/1pager.png)