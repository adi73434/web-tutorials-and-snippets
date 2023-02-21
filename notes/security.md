

## JWT vs Session tokens
- https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session
- https://www.rdegges.com/2018/please-stop-using-local-storage/
- http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/


*You should probably just use session tokens, stored in Redis if need be, because they're smaller in size and thus better fit in the size of a cookie.*



### Session tokens (as cookies)
- If you're using session tokens, have your cookies be `httpOnly` and `sameSite`
- You still need to cover CSRF exploits - see [this](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- You will have a DB lookup cost, but you can use Redis for this
- - If scalability/performance is a huge concern, and a Redis instance or dedicated Redis server won't cut it with session tokens, you probably shouldn't be reading my advice.



### JWT
- If you use JWT you cannot invalidate the token, so you may want a database of session tokens that are early-expired, e.g., the user logged out or their admin rights were revoked, so until the real expiry date of the JWT, you store it in a DB.
- - This still costs you a DB lookup as you need to verify every JWT request is not in this blacklist DB, but the overall DB size is smaller.
- localStorage faces issues of [XSS](https://clouddocs.f5.com/training/community/public-cloud/html/class05/module2/lab1.html) and potentially also malicious extensions (?)
- - React sanitizes your user inputs, but that's not your only concern.
- Even if you don't use JWT or store sensitive things in localStorage, vet your JavaScript libraries - JS is a terrible language and so is the inclusion of hundreds of libs per project.
- - I'm not gonna tell you to write all your websites with NoScript-first, hand built `addEventListener()`-littered updates, full of [NIH syndrome](https://en.wikipedia.org/wiki/Not_invented_here), but you may wanna check out [SolidJS](https://www.solidjs.com/), [SvelteJS](https://svelte.dev/), [Preact](https://preactjs.com/), or perhaps even something that isn't an SPA (gasp).
