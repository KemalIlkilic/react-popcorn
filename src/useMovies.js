import { useEffect, useState } from 'react'

const KEY = 'a739a08'

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(
    function () {
      const controller = new AbortController()

      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          )
          if (!res.ok) {
            throw new Error('Response not okay')
          }
          const data = await res.json()
          if (data.Response === 'False') {
            throw new Error('Couldnt find Movie')
          }
          setMovies(data.Search)
          setError('')
        } catch (error) {
          if (error.name !== 'AbortError') {
            console.error(error.message)
            setError(error.message)
          }
        } finally {
          setIsLoading(false)
        }
      }
      if (query.length < 3) {
        setMovies([])
        setError('')
        return
      }

      //handleCloseMovie()
      fetchMovies()

      return function () {
        controller.abort()
      }
    },
    [query]
  )
  return { movies, isLoading, error }
}
