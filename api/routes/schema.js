const Joi = require('joi');

const bodySchema = {
  body: {
    payload: Joi.array().items(Joi.object({

      country: Joi.string(),
      description: Joi.string(),
      drm: Joi.boolean(),
      episodeCount: Joi.number(),
      genre: Joi.string(),
      image: Joi.object({showImage: Joi.string()}),
      language: Joi.string(),
      nextEpisode: Joi.object({channel: Joi.string().allow(null), channelLogo: Joi.string().allow(null), date: Joi.string().allow(null), html: Joi.string().allow(null), url: Joi.string().allow(null)}).allow(null),
      primaryColour: Joi.string(),
      seasons: Joi.array().items(Joi.object({slug: Joi.string()})).allow(null),
      slug: Joi.string(),
      title: Joi.string(),
      tvChannel: Joi.string()
    })).required().min(1),
    skip: Joi.number(),
    take: Joi.number(),
    totalRecords: Joi.number()
  }

}
module.exports = bodySchema;
