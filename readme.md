## User Email Enrichment

A free, open source alternative to FullContact, Clearbit etc. that relies only on information that has been shared publicly by the user. No authentication is required.


### FAQs

#### Is this rate limited?
This library is subject to the rate limits of the downstream services it calls (GitHub and Gravatar to begin with). GitHub for example will lift the rate limit slightly higher if you provide an API key. This may be supported in a future version.

#### This seems creepy!
Not really a question, but okay! Keep in mind this only searching for publicly shared information by the user themselves. There are no secret, proprietary databases and backroom dealings. I do not host/own any of this information. It has not been scraped from address books, electoral rolls or CRMs.

#### It didn't find resolve the email address correctly?
As per the above, the accuracy is only as good as the publicly accessible information about a particular user. It makes a series of guesses and dynamically reprioritises results based on perceived accuracy (Pending release).