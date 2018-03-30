# Project Title
A small JSON-based web service to which you can post JSON data for certain format and it will filter the data based on condition with DRM enabled (drm: true) and at least one episode (episodeCount > 0)

URL: https://api-code-challenge.herokuapp.com/shows.

# Request example
{
    "payload": [
        {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        }
        ],
  "skip": 0,
  "take": 10,
  "totalRecords": 75
}

### Installing

```
npm install
```

## Running the tests

npm test

## Running application locally

npm start

## Built With

* node.js , Express
* joi library for schema validation
* mocha and chai for unit testing

##Author
Sahana Vajrakumar
