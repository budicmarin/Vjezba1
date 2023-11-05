import { methods } from './handlers/movieHandlers.js';
import express from "express";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api', router);

router.route('/movie/:id')
  .get((req, res) => {
    const id = req.params?.id;
    const movie = methods.getMovie(id);
    res.json(movie);
  });

router.route('/movie')
  .get((req, res) => {
    const rating = req.query?.rating;
    const name = req.query?.name;
    const movies = methods.getMovies(rating, name);
    res.json(movies);
  });
  router.route('/Avg')
  .get((req, res) => {
    const prosjek = methods.calculateAvgRating();
    res.json(prosjek);
  });

router.route('/movie')
  .post((req, res, next) => {
    const movieData = req.body;
    methods.addMovies(movieData);
    res.status(204).json({});
  });

router.route('/movie/:id')
  .put((req, res) => {
    const id = req.params?.id;
    const updatedMovie = req.body;
    const result = methods.updateMovie(id, updatedMovie);
    res.status(200).json(result);
  });

router.route('/movie/:id')
  .patch((req, res) => {
    const id = req.params?.id;
    const movieData = req.body;
    const result = methods.updatePartOfMovie(id, movieData);
    res.status(200).json(result);
  });

router.route('/movie/:id')
  .delete((req, res) => {
    const id = req.params?.id;
    methods.deleteMovie(id);
    res.status(200);
  });
 router.route('/ID')
  .delete((req, res) => {
    const id = req.params?.id;
    methods.deleteMovies(id);
    res.status(200);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})