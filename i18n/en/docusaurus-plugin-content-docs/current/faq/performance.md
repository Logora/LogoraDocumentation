---
id: performance
title: Performance
---

Logora makes every effort to ensure that the inserted code has the least impact on page loading. Here are some details on how Logora works to better evaluate the performance of inserted scripts.

#### Synthesis at the foot of the article

The synthesis code inserted in your articles proceeds in four steps:
1. Download the script **embed.js**. This file, served from AWS Cloudfront, has a size of **8 Ko**. It allows you to launch Logora's functionalities and manages the calls to our API.
2. Call to the Logora API to check if a debate matches the page in question. This call returns the HTML code of the summary if there is an associated debate. The response has a size of **9 Ko**, and the median response time is **10ms**. Our servers are located in Paris.
3. Inserting the code in the page. The code is pre-rendered by the server, so it can be inserted directly without additional processing.
4. (Optional) For the first call of the page only, the script sends the metadata of the page (title, tags, description) to our servers to associate debates to the articles more easily.

> If you have high performance constraints, use the [insert synthesis server side](installation/api.md)

#### Debate space

The debate space code proceeds in the same way as the synthesis code, but downloads more scripts and makes more calls to our API based on the user's actions and navigation. The initial **debat.js** file has a size of **60 KB**.

Our API has a median response time of **15ms** (95th percentile 50ms) and handle several million requests per day.
