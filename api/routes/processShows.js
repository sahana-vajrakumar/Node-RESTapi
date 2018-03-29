const express = require('express');
const router = express.Router();
const requestBody = require('./schema');
const validate = require('express-validation');

router.post('/', validate(requestBody), (req, res, next) => {

  const shows = req.body.payload;
  // console.log(shows);

  console.log(shows.length);
  const showArray = shows.filter(show => (show.drm === true && show.episodeCount > 0));
  console.log(showArray);
  console.log(showArray.length);

  res.status(200).json({

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
