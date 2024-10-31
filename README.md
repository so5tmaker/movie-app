# Movie App

This is a simple application for searching and displaying information about movies using the OMDB and TMDB APIs. Users can search for movies, view their details, add them to favorites, and watch trailers.

## Features

- Search for movies by title.
- View detailed information about movies.
- Add/remove movies from favorites.
- Play movie trailers.
- Save the last search query in `localStorage`.

## Technologies

- [React](https://reactjs.org/) - A library for building user interfaces.
- [MobX](https://mobx.js.org/) - A library for state management in applications.
- [Material-UI](https://mui.com/) - A component library for React.
- [Axios](https://axios-http.com/) - An HTTP client for making API requests.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/so5tmaker/movie-app.git
   cd movie-app


2.	Install the dependencies:

In the project directory, you can run:

`npm install`


3.	Create a .env file in the root of the project and add your API keys:

REACT_APP_OMDB_API_KEY=your_omdb_api_key
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_BEARER_TOKEN=your_tmdb_bearer_token


4.	Run the application:

`npm start`


## Usage

1.	On the main page, you can enter the movie title in the search field.
2.	Press Enter to execute the search.
3.	Select a movie from the list to view its details and trailer.
4.	Add the movie to favorites by clicking the “Add to Favorites” button.
5.	In the “Favorites” section, you can view all saved movies.

## Notes

**Make sure you have access to the OMDB and TMDB APIs and replace your_omdb_api_key, your_tmdb_api_key, and your_tmdb_bearer_token in .env with your actual keys.**