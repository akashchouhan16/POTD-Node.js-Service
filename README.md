<img src='assets/POTD_logo.png' width='120px' style="border-radius:20px">

# Problem Of The Day | Node.js microservice
It is a Node.js microservice to power the problem of the day Google Chrome browser extension.

> Download Extension: **[Here](https://github.com/Hack-Repository/POTD-UI "POTD Extension")**

## About the Service
* This service exposes a simple **HTTP endpoint** for the **[POTD Client](https://github.com/Hack-Repository/POTD-UI "POTD Extension")** to access problem of the day from a pool of 750+ Data Structures and Algorithms Interview problems. 
* The problems are a currated list of questions which also includes questions from the Striver's SDE Sheet, 450 DSA sheet and more.
* Server uses the Cache-First policy to prevent network requests to DB, by interacting with the in-memory cache if the problem has already been requested by the client, or makes a network request to a private collection deployed on Mongo Atlas Cloud DB.
  
### POTD Client
* It a Google Chrome Browser extension to provide a daily practice problem statement and problem link.
* Currently in development. Stable version to be released on the Chrome Store.

## System Architecture (High Level Design)

<br />

![System Architecture](./assets/System%20Architecture%20_DFD.png)

---

## Application Details

> Note: Unstable release, work is in progress. But feel free to raise issues & PR.

### Maintainer
**[Akash Chouhan](https://github.com/akashchouhan16 "akashchouhan16")**

### License
**[MIT]()**

All rights reserved. Copyright (c) **@POTD/Akash Chouhan**.




