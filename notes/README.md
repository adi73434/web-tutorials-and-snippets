## Notes, things, stuff, and notes about things to note down, that should probably (will actually) be created/organised
- Make separate Linux and Win10 + NGINX and DBs + VSCode dev env setup guide (This is mostly aimed at potential students starting the same uni degree I did)
- Make a basic Git guide
- Make a basic CI/CD guide
- For web dev, in Edge you can have a 3D view of the web page. Firefox used to have this feature. *used to*
- Compile a list of dev tools I use (PowerTools colour picker, Firefox `Developer` dropdown options, Firefox `(F12) Developer Tools` and extensions, and general Firefox extension).
- Make digestible notes here about some of the contents in `example-configs`. Also, probably expand `example-configs` with some Linux/NGINX/MySQL/MariaDB/PHP configs and reference them here.



### website benchmarking

To test requests per second and request time (not time to full load, as far as I know):
- using `ApacheBench`, where `n` specifies the amount and `c` the concurrency. This requires that you either specify a file or end the URI with a `/`. You need not specify the port
- `> ab -n 1000 -c 100 http://localhost:80/`



### to-read
- https://en.wikipedia.org/wiki/HATEOAS



### Frontend library/framework sizes
- https://dev.to/this-is-learning/javascript-framework-todomvc-size-comparison-504f




### React
Context (instead of Redux): 
- https://kentcdodds.com/blog/how-to-use-react-context-effectively#the-custom-provider-component