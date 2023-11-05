const axios = require("axios");
const { response } = require("express");
const port = 3000;
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function getMovie() {
  //obican
  axios
    .get(dataServiceBaseUrl + "/api/movie")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      debugger;
      console.error("Error: ", error);
    });
}

function getMovieById() {
  //request params
  axios
    .get(dataServiceBaseUrl + "/api/movie/1")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function getMovieByRatingOrName() {
  //with query params
  const rating = 8;
  const name = "Pulp Fiction";
  axios
    .get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function wontGetAnythingJustForShow() {
  //s ekstra headerima
  const config = {
    headers: {
      Authorization: "Bearer YourAuthToken",
      Accept: "application/json",
    },
  };
  axios
    .get(dataServiceBaseUrl + "/api", config)
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//POST REQUEST
function addMovie() {
  const postData = {
    id: 11,
    title: "Forrest Gump",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .post(dataServiceBaseUrl + "/api/movie", postData, { headers: headers })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      debugger;
      console.error("Error:", error);
    });
}

//PUT REQUEST
function changeMovieInfo() {
  const updatedMovieData = {
    id: 1,
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    year: 1994,
    rating: 9.5,
  };

  axios
    .put(dataServiceBaseUrl + "/api/movie/1", updatedMovieData)
    .then((response) => {
      debugger;
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//PATCH REQUEST
function changePartOfMovieInfo() {
  const partialMovieData = {
    rating: 9.6,
  };

  axios
    .patch(dataServiceBaseUrl + "/api/movie/1", partialMovieData)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//DELETE REQUEST
function deleteMovie() {
  axios
    .delete(dataServiceBaseUrl + "/api/movie/")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function deleteMovies(ids) {
  ids.forEach((id) => {
    axios
      .delete(dataServiceBaseUrl + "/api/movie/" + id)
      .then((response) => {
        console.log("Success: ", response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  });
}

// Call the function with your array of IDs
const arrayId = [10, 5, 7, 3];
deleteMovies(arrayId);

//MAIN
//-------------------------------------- GET
getMovie();

function getAvregeMovieRating() {
  axios
    .get(dataServiceBaseUrl + `/api/Avg`)
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error.response.data);
    });
}
getAvregeMovieRating();
//getMovieById();}
//getMovieByRatingOrName();
//wontGetAnythingJustForShow();

//-------------------------------------- POST
//addMovie();

//-------------------------------------- PUT
//changeMovieInfo();

//-------------------------------------- PATCH
//changePartOfMovieInfo();

//-------------------------------------- DELETE
//deleteMovie();
