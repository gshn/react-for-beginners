import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await response.json()
    console.log(json.data)
    setMovie(json.data.movie)
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description_full}</p>
    </div>
  )
}

export default Detail
