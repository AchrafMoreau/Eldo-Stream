// Types for TMDB API responses
export interface TMDBMovie {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  release_date: string
  vote_average: number
  genre_ids: number[]
}

export interface TMDBTvShow {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
  overview: string
  first_air_date: string
  vote_average: number
  genre_ids: number[]
}

export interface TMDBMovieResponse {
  page: number
  results: TMDBMovie[]
  total_pages: number
  total_results: number
}

export interface TMDBTvShowResponse {
  page: number
  results: TMDBTvShow[]
  total_pages: number
  total_results: number
}

export interface TMDBContentItem {
  id: number
  title: string // Movie title or TV show name
  posterUrl: string
  backdropUrl: string
  overview: string
  releaseDate: string // Movie release_date or TV first_air_date
  voteAverage: number
  genreIds: number[]
  mediaType: "movie" | "tv"
  originalData: TMDBMovie | TMDBTvShow
}

export interface TMDBState {
  content: TMDBContentItem[]
  isLoading: boolean
  error: Error | null
  lastUpdated: number | null
}

