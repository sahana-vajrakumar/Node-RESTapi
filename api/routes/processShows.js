const express = require('express');
const router = express.Router();
const requestBody = require('./schema');
const validate = require('express-validation');

//validating the input request of type requestBody and processing the request
router.post('/', validate(requestBody), (req, res, next) => {

  const shows = req.body.payload;
  //logic to filter the array of objects which satisfies the condition drm = true and episode count > 0
  const showArray = shows.filter(show => (show.drm === true && show.episodeCount > 0));

  res.status(200).json({
    // looping over the filtered Array to form the response
    response: showArray.map(obj => {
      let rObj = {};

      "image" in obj
        ? rObj.image = obj.image.showImage
        : rObj.image = "null";
      "slug" in obj
        ? rObj.slug = obj.slug
        : rObj.slug = "null";
      "title" in obj
        ? rObj.title = obj.title
        : rObj.title = "null";

      return rObj;

    })

  })
});

module.exports = router;
