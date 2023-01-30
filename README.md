<img src='https://user-images.githubusercontent.com/56465610/215422984-4a9a6fec-dcb1-4f7f-92ba-b819af09dbb3.png' width='120px' style="border-radius:50px">

# Problem Of The Day | Node.js microservice
[![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-8ebb9c.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice "Repo Maintained")
[![Ask Us Anything !](https://img.shields.io/badge/Ask%20Us-Anything-1abc9c.svg)](https://github.com/Hack-Repository/ "github.com/Hack-Repository")
[![made-for-Developers](https://img.shields.io/badge/Made%20for-Developers-426658.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice "POTD")
[![GitHub issues](https://img.shields.io/github/issues/Hack-Repository/POTD-Node.js-microservice.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/Hack-Repository/POTD-Node.js-microservice.svg)

A Node.js microservice to power the problem of the day Google Chrome browser extension. The POTD browser extension beta release is available for download on @Github/Hack-Repository.

> Download Beta version from Github: **[Download](https://github.com/Hack-Repository/POTD-GoogleChromeExtension "POTD Extension")**

## About
The POTD service caters to bring consistency into the young budding computer science students and enthusiasts towards DSA coding challenges. The idea here is to provide an easy to plug chrome browser extension to the users. Users are exposed a daily practice problem, which are from a pool 750+ problems, curated by software engineers from Google & Directi.

The Curated selection of important coding interview questions were hand-picked from existing lists that includes but are not limited to Striver's SDE Sheet, 450 DSA Sheet, and many more.
The extension is presently available as a beta release to generate user feedback, and is not yet available on the Chrome Store.
* Server uses the **Cache-First policy** to prevent network requests to DB, by interacting with the in-memory cache if the problem has already been requested by the client, or makes a network request to a private collection deployed on Mongo Atlas Cloud DB.
> Updates: v1.0.3

* **POTD ContestsAPI**: Get Access to all upcoming global contests on platforms including KickStart, Codeforces, AtCoder, Codechef, LeetCode and more.
* **Faster Load Time**: Optimized load times with both client-side & server-side data caching and storage.

  
### About POTD Client
* It a Google Chrome Browser extension to provide a daily practice problem statement and problem link.
* Get Latest Contest updates from Platforms like **Google Kickstart**, **Codeforces**, **AtCoder**, **LeetCode**, and more.
* Browser extension is available to download and is released as **v1.0.1-beta** on Github.
* Stable version to be released on the Chrome Store after generating user feedback.
* **Extension Preview:**
![POTD Chrome Extension](./assets/ui_potd_1.0.1.gif)

---

## System Architecture (High Level Design)



* Below is the DFD for the **v1.0.0** of the POTD service.
  
> Note: Design has undergone multiple changes to incorporate Client and Server side data caching and storage options since its inception.



![System Architecture](https://user-images.githubusercontent.com/56465610/215423129-427e544b-5389-4b1e-b990-1d71c10001ad.png)


---

## Application Details

### Version
**[v1.0.3]()**
### Maintainer
**[Akash Chouhan](https://github.com/akashchouhan16 "akashchouhan16")**

### License
**[MIT](https://github.com/Hack-Repository/POTD-Node.js-microservice/blob/master/LICENSE "License")**

All rights reserved. Copyright (c) **@POTD/Akash Chouhan**.




