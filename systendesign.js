// 1. APIs: https://lnkd.in/dsbwPZ6N
// 2. Webhooks: https://lnkd.in/geHxGX-7
// 3. REST vs GraphQL: https://lnkd.in/gM5VHKQS
// 4. API Gateway: https://lnkd.in/gtyXmvf4
// 5. Load Balancers: https://lnkd.in/dzM7VDKq
// 6. Load Balancing Algorithms: https://lnkd.in/gvxfwEUr
// 7. Proxy vs Reverse Proxy: https://lnkd.in/gMTtidBq
// 8. Scalability: https://lnkd.in/gPGhW-qK
// 9. Availability: https://lnkd.in/gQk2p4_6
// 10. SPOF: https://lnkd.in/gw_uHZWn
// 11. CAP Theorem: https://lnkd.in/g_tFqJJb
// 12. Database Types: https://lnkd.in/gDxtZVE2
// 13. SQL vs NoSQL: https://lnkd.in/gHyC9qWc
// 14. ACID Transactions: https://lnkd.in/dB3QHiMz
// 15. Database Indexes: https://lnkd.in/g_-bQWtA
// 16. Sharding vs. Partitioning: https://lnkd.in/dk2276Ve
// 17. Consistent Hashing: https://lnkd.in/gR9wFDpz
// 18. CDC: https://lnkd.in/gWhGwh9Z
// 19. Caching: https://lnkd.in/gBSeTstS
// 20. Caching Strategies: https://lnkd.in/dVk7nZ_Y
// 21. Cache Eviction Policies: https://lnkd.in/gQAEXEmq
// 22. CDN: https://lnkd.in/gaW4Vkpy
// 23. Rate Limiting Algorithms: https://lnkd.in/gYDxg8XY
// 24. Message Queues: https://lnkd.in/g-jnNGDC
// 25. Bloom Filters: https://lnkd.in/gfGjCrSZ
// 26. Idempotency: https://lnkd.in/gDB3AJij
// 27. Concurrency vs Parallelism: https://lnkd.in/gGZXhjBD
// 28. Stateful vs. Stateless Architecture: https://lnkd.in/gz_ccK-Y
// 29. Long Polling vs WebSockets: https://lnkd.in/d9xKD28K
// 30. Batch vs Stream Processing: https://lnkd.in/gKtj_qWh






// 𝟭. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝗲 𝘀𝗰𝗿𝗼𝗹𝗹𝗶𝗻𝗴 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
//  - Consider the approach for triggering additional data load when the user scrolls near the end of the page or a scrollable element.
//  - How would you handle throttling, debouncing, or optimization to prevent excessive requests?
//  - Discuss how to manage state for pagination and loading indicators.

// 𝟮. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝘀𝗲𝗮𝗿𝗰𝗵 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹𝗶𝘁𝘆 𝘄𝗶𝘁𝗵 𝗹𝗶𝘃𝗲 𝗳𝗶𝗹𝘁𝗲𝗿𝗶𝗻𝗴 𝗶𝗻 𝗮 𝗥𝗲𝗮𝗰𝘁 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻?
//  - Describe how to optimize the filtering process for large datasets.
//  - How would you debounce user input to avoid unnecessary re-renders or API calls?
//  - How would you manage the filtered results state and the interaction with an API?

// 𝟯. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗱𝗲𝘀𝗶𝗴𝗻 𝗮𝗻𝗱 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗳𝗼𝗿𝗺 𝘄𝗶𝘁𝗵 𝗱𝘆𝗻𝗮𝗺𝗶𝗰 𝗳𝗶𝗲𝗹𝗱𝘀 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
//  - How would you manage form validation, error handling, and state for dynamic inputs?
//  - Would you use controlled or uncontrolled components for such a form? 
// - How would you structure the form’s state for adding/removing dynamic fields?

// 𝟰. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝘀𝘁𝗮𝘁𝗲 𝗺𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗳𝗼𝗿 𝗮 𝗺𝘂𝗹𝘁𝗶-𝘀𝘁𝗲𝗽 𝗳𝗼𝗿𝗺 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
//  - How would you ensure that data entered in each step of the form is stored properly and can be accessed across steps?
//  - How would you manage navigation between steps and handle errors or validation for each step?

// 𝟱. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗰𝘂𝘀𝘁𝗼𝗺 𝘂𝘀𝗲𝗙𝗲𝘁𝗰𝗵 𝗵𝗼𝗼𝗸 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗳𝗼𝗿 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴 𝗛𝗧𝗧𝗣 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀?
//  - Discuss the structure of the hook for handling loading, error, and success states.
//  - How would you use useEffect to trigger the API request and manage cleanup?
//  - How would you ensure that the hook is reusable across different components?

// 𝟲. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗹𝗮𝘇𝘆 𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗼𝗳 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
//  - Explain how to use React.lazy and Suspense for loading components only when required.
//  - How would you handle loading indicators or fallback UI during the loading process?
//  - How would you manage this for multiple components or routes?

// 𝟴. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗱𝗿𝗮𝗴𝗴𝗮𝗯𝗹𝗲 𝗹𝗶𝘀𝘁 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
//  - Explain how to manage the drag-and-drop state and reordering of list items.
//  - What would be your approach for handling the drag events, and how would you optimize performance?

