<img src='assets/POTD_logo.png' width='120px' style="border-radius:20px">

# Problem Of The Day | Node.js microservice
[![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-8ebb9c.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice "Repo Maintained")
[![Ask Us Anything !](https://img.shields.io/badge/Ask%20Us-Anything-1abc9c.svg)](https://github.com/Hack-Repository/ "github.com/Hack-Repository")
[![made-for-Developers](https://img.shields.io/badge/Made%20for-Developers-426658.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice "POTD")
[![GitHub issues](https://img.shields.io/github/issues/Hack-Repository/POTD-Node.js-microservice.svg)](https://github.com/Hack-Repository/POTD-Node.js-microservice/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/Hack-Repository/POTD-Node.js-microservice.svg)

A Node.js microservice to power the problem of the day Google Chrome browser extension. The POTD browser extension beta release is available for download on @Github/Hack-Repository.

> Download Beta version from Github: **[Download](https://github.com/Hack-Repository/POTD-GoogleChromeExtension "POTD Extension")**

## About the Service
* This service exposes a simple **HTTP endpoint** for the **[POTD Client](https://github.com/Hack-Repository/POTD-UI "POTD Extension")** to access problem of the day from a pool of 750+ Data Structures and Algorithms Interview problems. 
* The problems are a currated list of questions which also includes questions from the Striver's SDE Sheet, 450 DSA sheet and more.
* Server uses the Cache-First policy to prevent network requests to DB, by interacting with the in-memory cache if the problem has already been requested by the client, or makes a network request to a private collection deployed on Mongo Atlas Cloud DB.
  
### POTD Client
* It a Google Chrome Browser extension to provide a daily practice problem statement and problem link.
* Currently in development and is released as `beta` for feedback.
* Stable version to be released on the Chrome Store.
* **Extension Preview:**
![POTD Chrome Extension](./assets/POTD_ExtensionUI.gif)

## System Architecture (High Level Design)

<br />

![System Architecture](./assets/System%20Architecture%20_DFD.png)

---

## Application Details

> Note: Unstable release, work is in progress. Open to issues & pull requests.

### Maintainer
**[Akash Chouhan](https://github.com/akashchouhan16 "akashchouhan16")**

### License
**[MIT](https://github.com/Hack-Repository/POTD-Node.js-microservice/blob/master/LICENSE "License")**

All rights reserved. Copyright (c) **@POTD/Akash Chouhan**.




