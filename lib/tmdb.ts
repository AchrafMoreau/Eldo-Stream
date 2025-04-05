'use server'
export async function getPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY;
  console.log(apiKey)
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('TMDB API Error:', error);
    return { results: [] };
  }
}

export async function getPopularTvShow() {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('TMDB API Error:', error);
    return { results: [] };
  }
}
