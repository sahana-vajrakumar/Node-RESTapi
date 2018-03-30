'use strict';

const chai = require('chai');

const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /shows', function() {

  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {});

  after(function() {});

  // GET - List all colors

  it('should return 404', function() {

    return chai.request(app).get('/shows').then(function(res) {

      expect(res).to.have.status(404);

    });

  });

  it('should return 200 when post is made for /shows', function() {

    return chai.request(app).post('/shows').send({payload: [{}]}).then(function(res) {

      expect(res).to.have.status(200);

      expect(res).to.be.json;

    });

  });

  it('should return 400 BAD request when post is made for /shows with invalid json', function() {

    return chai.request(app).post('/shows').send({payload: []}).then(function(res) {

      expect(res).to.have.status(400);

      expect(res).to.be.json;

    });

  });

  it('should return 400 BAD request when post is made for /shows with invalid json and should have error key', function() {

    return chai.request(app).post('/shows').send({payload: []}).then(function(res) {

      expect(res).to.have.status(400);

      expect(res).to.have.property('error')

    });

  });

  it('should return json with the length of one and valid response', function() {

    return chai.request(app).post('/shows').send({

      payload: [
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
      ]

    }).then(function(res) {

      expect(res).to.have.status(200);

      expect(res).to.be.json;

      expect(res.body.response).to.be.an('array').lengthOf(1);
      expect(res.body.response).to.have.nested.property("[0].slug", "show/16kidsandcounting");
      expect(res.body.response).to.have.nested.property("[0].image", "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg");
      expect(res.body.response).to.have.nested.property("[0].title",);
      expect(res.body.response).to.have.nested.property("[0].title", "16 Kids and Counting");
      // expect(res.body.response).that.includes("image");

    });

  });

});
