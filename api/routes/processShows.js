const express = require('express');
const router = express.Router();


router.post('/', (req, res, next) => {

  const shows = req.body.payload;
  // console.log(shows);

  console.log(shows.length);
  const showArray = shows.filter(show => (show.drm === true && show.episodeCount > 0));
  console.log(showArray);
  console.log(showArray.length);


  res.status(200).json({
    message: 'Handling POST requests to /shows',
    response: showArray.map(obj => {
      let rObj = {};
      rObj.image = obj.image.showImage;
      rObj.slug = obj.slug;
      rObj.title = obj.title;

      return rObj;

    })

  })
});

module.exports = router;
