# AWS (S3, CloudFront & Frontend Developer) Interview Questions

## AWS Basics

1. What is AWS?
2. What are the core AWS services?
3. What is cloud computing?
4. Difference between IaaS, PaaS, and SaaS?
5. What are the benefits of AWS?
6. What is AWS Region?
7. What is Availability Zone?
8. What is edge location in AWS?
9. What is scalability in AWS?
10. What is elasticity in AWS?
11. What is high availability?
12. What is fault tolerance?
13. What is AWS Free Tier?
14. What is IAM in AWS?
15. What is AWS pricing model?
16. What is pay-as-you-go model?
17. What is AWS shared responsibility model?
18. What is AWS CLI?
19. What is AWS SDK?
20. What is infrastructure as code?

---

# S3 (Simple Storage Service)

21. What is Amazon S3?
22. What are the use cases of S3?
23. What is bucket in S3?
24. What is object in S3?
25. What is bucket policy?
26. What is ACL in S3?
27. Difference between bucket policy and ACL?
28. What are S3 storage classes?
29. Difference between Standard and Glacier storage?
30. What is S3 versioning?
31. What is lifecycle rule in S3?
32. What is static website hosting in S3?
33. How to host React app in S3?
34. How to host Angular app in S3?
35. How to host Next.js static export in S3?
36. What is public bucket access?
37. How to block public access in S3?
38. What is signed URL in S3?
39. What is pre-signed URL?
40. What is multipart upload?
41. What is object metadata?
42. What is server-side encryption in S3?
43. What is client-side encryption?
44. What is S3 event notification?
45. What is cross-region replication?
46. What is transfer acceleration?
47. What is object lock?
48. What is S3 consistency model?
49. What is bucket versioning?
50. How to optimize S3 cost?

---

# CloudFront

51. What is CloudFront?
52. Why use CloudFront?
53. What is CDN?
54. How CDN works?
55. What is edge caching?
56. What is CloudFront distribution?
57. Difference between S3 and CloudFront?
58. How CloudFront improves performance?
59. What is cache invalidation?
60. What is TTL in CloudFront?
61. What is origin in CloudFront?
62. What is origin access control (OAC)?
63. What is origin access identity (OAI)?
64. Difference between OAI and OAC?
65. What is signed cookie?
66. What is signed URL in CloudFront?
67. What is geo restriction?
68. What is cache behavior?
69. What is path pattern?
70. What is Lambda@Edge?
71. What is CloudFront Function?
72. Difference between Lambda@Edge and CloudFront Function?
73. What is HTTPS redirection in CloudFront?
74. How SSL works with CloudFront?
75. What is ACM certificate?
76. What is custom domain in CloudFront?
77. How to connect Route53 with CloudFront?
78. How to clear CloudFront cache?
79. What causes cache miss?
80. How to optimize CloudFront performance?

---

# Frontend Deployment on AWS

81. How to deploy React app on AWS?
82. How to deploy Angular app on AWS?
83. How to deploy static websites on AWS?
84. How to configure S3 for SPA routing?
85. Why 403/404 happens in React routing on S3?
86. How to fix refresh issue in React app hosted on S3?
87. How to configure error document in S3?
88. How to connect CloudFront with S3?
89. How to enable HTTPS for frontend apps?
90. How to add custom domain for frontend app?
91. How to configure Route53?
92. What is DNS?
93. What is Route53?
94. How to automate deployment to S3?
95. How CI/CD works for frontend deployment?
96. What is GitHub Actions?
97. What is AWS CodePipeline?
98. What is AWS CodeBuild?
99. What is blue-green deployment?
100. What is rolling deployment?

---

# Security & Authentication

101. What is IAM user?
102. What is IAM role?
103. Difference between IAM role and IAM user?
104. What is least privilege principle?
105. What is MFA in AWS?
106. How to secure S3 bucket?
107. How to restrict CloudFront access?
108. What is WAF in AWS?
109. What is Shield in AWS?
110. What is CORS in S3?
111. How to configure CORS for frontend apps?
112. What is JWT authentication?
113. How frontend apps securely access S3?
114. What is Cognito?
115. What is temporary credential?
116. What is secret manager?
117. What is KMS?
118. What is SSL/TLS?
119. What is HTTPS enforcement?
120. How to secure environment variables?

---

# Performance & Optimization

121. How to optimize frontend performance using CloudFront?
122. What is browser caching?
123. Difference between browser cache and CDN cache?
124. What is gzip compression?
125. What is Brotli compression?
126. How image optimization works in CDN?
127. What is lazy loading?
128. What is cache-control header?
129. What is ETag?
130. What is stale cache?
131. How to reduce frontend bundle size?
132. What is code splitting?
133. What is tree shaking?
134. What is prefetching?
135. What is preloading?
136. How to optimize large assets delivery?
137. How CloudFront handles global traffic?
138. What is origin failover?
139. How to monitor frontend performance?
140. What is CloudWatch?

---

# Monitoring & Logging

141. What is CloudWatch?
142. What are CloudWatch logs?
143. What is CloudTrail?
144. Difference between CloudWatch and CloudTrail?
145. What are metrics in AWS?
146. What is alarm in CloudWatch?
147. How to monitor S3 usage?
148. How to monitor CloudFront traffic?
149. What are access logs?
150. What is real-time logging in CloudFront?
151. How to debug deployment issues?
152. What causes high latency in CloudFront?
153. How to troubleshoot S3 access denied issue?
154. What is AWS X-Ray?
155. How to track frontend API performance?

---

# DevOps & CI/CD

156. What is CI/CD?
157. How GitHub Actions deploy React app to S3?
158. What is deployment pipeline?
159. What is artifact in CI/CD?
160. What is build step?
161. What is environment variable in CI/CD?
162. How to automate CloudFront invalidation?
163. What is AWS Amplify?
164. Difference between Amplify and S3 hosting?
165. What is Docker?
166. What is containerization?
167. What is Kubernetes?
168. What is ECS?
169. What is EC2?
170. Difference between EC2 and S3 hosting?
171. What is load balancer?
172. What is auto scaling?
173. What is infrastructure automation?
174. What is Terraform?
175. What is CloudFormation?

---

# Real Project & Scenario Questions

176. Explain how you deployed frontend application on AWS.
177. How do you host React app on S3 and CloudFront?
178. How do you configure SPA routing?
179. How do you optimize frontend delivery globally?
180. How do you reduce frontend load time?
181. How do you manage cache invalidation?
182. How do you secure S3 bucket?
183. How do you configure HTTPS?
184. How do you automate deployments?
185. How do you handle environment variables?
186. How do you debug deployment failures?
187. How do you reduce CloudFront cost?
188. How do you monitor frontend traffic?
189. How do you handle rollback deployment?
190. What challenges did you face in AWS deployment?
191. How do you optimize image delivery?
192. How do you configure custom domain?
193. How do you improve SEO with CDN?
194. How do you secure APIs accessed from frontend?
195. How do you manage multiple environments?
196. How do you handle high traffic applications?
197. How do you deploy Angular applications?
198. How do you host Next.js applications on AWS?
199. How do you manage SSL certificates?
200. How do you improve frontend scalability?

---

# Coding & Practical Questions

201. Write AWS CLI command to upload files to S3.
202. Write AWS CLI command to sync React build folder with S3.
203. How to invalidate CloudFront cache using AWS CLI?
204. Write bucket policy for public read access.
205. How to configure CORS JSON for S3?
206. Write GitHub Actions workflow for React deployment.
207. How to configure custom error routing for React app in S3?
208. How to upload image to S3 using frontend?
209. How to generate pre-signed URL using backend?
210. How to optimize cache headers for static assets?

---

# HR + Behavioral Questions

211. Tell me about yourself.
212. Why AWS for frontend deployment?
213. Why should we hire you?
214. What are your strengths?
215. What are your weaknesses?
216. Why are you changing jobs?
217. Describe a deployment issue you solved.
218. How do you handle production issues?
219. Have you worked in Agile/Scrum?
220. How do you learn new cloud technologies?
221. How do you handle tight deadlines?
222. What motivates you?
223. Where do you see yourself in 5 years?
224. What is your expected salary?
225. Do you have questions for us?
