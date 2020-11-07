export const FILM_SCHEMA = 'films';
export const FilmSchema = {
  name: FILM_SCHEMA,
  properties: {
    title: 'string',
    episode_id: 'int',
    opening_crawl: 'string',
    director: 'string',
    producer: 'string',
    release_date: 'date',
    created: 'date',
    edited: 'date',
    url: 'string',
  },
};
