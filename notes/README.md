## Notes, things, stuff, and notes about things to note down, that should probably (will actually) be created/organised
- Make separate Linux and Win10 + NGINX and DBs + VSCode dev env setup guide (This is mostly aimed at potential students starting the same uni degree I did)
- Make a basic Git guide
- Make a basic CI/CD guide
- For web dev, in Edge you can have a 3D view of the web page. Firefox used to have this feature. *used to*
- Compile a list of dev tools I use (PowerTools colour picker, Firefox `Developer` dropdown options, Firefox `(F12) Developer Tools` and extensions, and general Firefox extension).
- Make digestible notes here about some of the contents in `example-configs`. Also, probably expand `example-configs` with some Linux/NGINX/MySQL/MariaDB/PHP configs and reference them here.



### To-read
- https://en.wikipedia.org/wiki/HATEOAS



### Benchmarking
- https://web.dev/measure/
- https://developers.google.com/speed/pagespeed/insights/
- https://www.webpagetest.org/ - "Add HTML" experiment allows adding HTML to a live site.

To test requests per second and request time (not time to full load, as far as I know):
- using `ApacheBench`, where `n` specifies the amount and `c` the concurrency. This requires that you either specify a file or end the URI with a `/`. You need not specify the port
- `> ab -n 1000 -c 100 http://localhost:80/`



### Asset performance
- https://jakearchibald.com/2020/avif-has-landed/
- https://www.cloudflare.com/cdn/
- https://developers.google.com/web/tools/workbox



### Frontend library/framework sizes
- https://dev.to/this-is-learning/javascript-framework-todomvc-size-comparison-504f



### React
- Use [React context](https://reactjs.org/docs/context.html) instead of Redux to store a global state/store. This can store state and methods. [Example here](https://kentcdodds.com/blog/how-to-use-react-context-effectively#the-custom-provider-component)



### Redux
- https://blog.logrocket.com/when-and-when-not-to-use-redux-41807f29a7fb/



### NextJS
- NextJS https://nextjs.org/docs/getting-started
- Create-React-App -> NextJS https://nextjs.org/docs/migrating/from-create-react-app
- - this seems like migrating 



### Preact
- SSR https://preactjs.com/guide/v10/server-side-rendering/
- Partial hydration https://www.jameshill.dev/articles/partial-hydration/
- Next JS plugin https://github.com/preactjs/next-plugin-preact


Using hydration just requires using `hydrate()` instead of `render()`, as shown [here](https://preactjs.com/guide/v10/api-reference/#hydrate)



### CSS
- https://gui-challenges.web.app/tooltips/dist/ - tooltip overlay without JS. See https://twitter.com/argyleink/status/1577710321376333824



### JSON
- [RFC 8259](https://datatracker.ietf.org/doc/rfc8259/)
