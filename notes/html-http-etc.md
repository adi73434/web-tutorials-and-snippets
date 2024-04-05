## Content-Type
- Content-Type: https://www.rfc-editor.org/rfc/rfc9110#field.content-type
- Media-Type: https://www.rfc-editor.org/rfc/rfc2046.html#section-1
- Media Types list: https://www.iana.org/assignments/media-types/media-types.xhtml



### Protobuf
Possibilities, in my personal, biased, subjective order of "nicest":
- `Content-Type: application/x-protobuf`
- `Content-Type: application/vnd.google.protobuf`
- `Content-Type: application/protobuf`
- `Content-Type: application/x-google-protobuf`


Alongside this, here are some possibilities for how to specify the protobuf schema. These are not my _prescriptions_, but what I've seen:
- `Content-Type: application/your_choice_here` with additional header: `proto: protobuf_file.package.message`
- - But where do you specify the URI to get the file? Maybe the client is expected to already have them downloaded.
- `Content-Type: application/your_choice_here` with additional header: `X-Protobuf-Schema: uri_to_proto_file`
- - But where do you specify the package/message?
- `Content-Type: application/your_choice_here; desc="http://localhost/Model.desc"; messageType="protobuf_file.package.message"`
- - Why is it `.desc` not `.proto`?



#### I want to be lean
My preferred method, if applicable, is to statically compile the `.proto` files into the client. This saves additional requests for `.proto` files and libraries tend to be more lean. Thusly, you could just specify in a header the `protobuf_file.package.message`, without a URI.

Regarding "more lean", as an example, see [protobufjs](https://github.com/protobufjs/protobuf.js)
- > When working with statically generated code only, see the [minimal library][dist-minimal] (~6.5kb gzipped) that also excludes reflection



#### I want to be lazy
You _could_ ignore headers to some degree:
- At the end of the day, the developer of a client _likely_ needs to know the schema/type at development time, and a different type being sent at runtime would likely be an error state.
- I avise against omitting the barebones `Content-Type: application/x-protobuf`, but you could be nauhty and do so if you control your clients or:
- - Your server _only_ responds with protobuf and only ever will
- - You have **great documentation**



References:
- https://stackoverflow.com/questions/30505408/what-is-the-correct-protobuf-content-type
- https://techkranti.com/what-is-protobuf-explained-for-hackers/
- https://groups.google.com/g/protobuf/c/VAoJ-HtgpAI
- https://www.charlesproxy.com/documentation/using-charles/protocol-buffers/
- https://www.slideshare.net/mokeefe/javaone-2009-ts5276-restful-protocol-buffers