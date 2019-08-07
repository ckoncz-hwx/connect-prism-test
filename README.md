See if I can intercept requests with connect-prism.

Well, seems like the request bodies are not serialized.
Right now, prism is not used. The server intercepts all requests, and dumpts the
request body in case the content type is `application/json`.

Usage:
```
npm install
node server.js
```

Then:
```
curl -X PUT -v -d '{"aaa":"bbb"}' -H "content-type: application/json" http://localhost:3000/aaa/a
```
