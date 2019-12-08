run: npm i.

run: npm start.

run: npm test, for test the api.

The default route is the posts.
Click post button to post.
Click comment to give comment
There three routes.

In the list, it should have new post. I see that the response is successful. The API should refresh and send the request. So I add an alert to tell the post is successful.

The default is userId = 1 at top, but there is no date. So I can't rank the posts.

It maybe not the issue on API. It is for security. Although it tells the successful post, but I cannot show it in the posts list. It may reduce the stress of the server. The response is 201. In HTTP protocol, 201 created is a code for successful response. It means the request is addressed, and it creates a new resource.