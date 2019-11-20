# StatusCage

### Intro
Use this API to return a Nicolas Cage image in the body of your HTTP responses.

### Website
[statuscage.com](https://statuscage.com)

### Usage
Simply append the three digit status code to the end of the API base url.

```curlrc
https://statuscage.com/{status}
```

For example a GET on the following endpoint:

```curlrc
https://statuscage.com/429
```

will produce the following image:

![StatusCage picture](https://statuscage.com/429)

### About the Service
This API is hosted on an AWS CloudFront distribution and is completely serverless. It is intentionally lean so as to be as performant as possible.

### Want to Contribute?
Awesome! There are plenty of status codes missing at this time, so if you come across the perfect Nic Meme for a status code, create an issue and send it my way!
Additionally, this API could use an AWS S3/CloudFront deploy script.
