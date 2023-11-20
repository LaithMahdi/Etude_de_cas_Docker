import Image from 'next/image'


const getMovies = async () => {
  const data = await fetch("http://localhost:8080/");
  const movies = await data.json();
  return movies;
};

interface Movie {
  id: number,
  name: String,
  description: String
}


export default async function Home() {
  const movies = await getMovies();
  console.log(movies);
  return (
    <main className="container mx-auto my-4">
      <h1 className='mb-2 text-2xl' >Movies</h1>
      <table className='table-auto border-collapse border border-slate-400'>
        <thead>
          <tr>
            <th className='border border-slate-300 w-12'>ID</th>
            <th className='border border-slate-300'>Name</th>
            <th className='border border-slate-300'>Descrption</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: Movie) => (
            <tr key={movie.id}>
              <td className='border border-slate-300'>
                {movie.id}
              </td>

              <td className='border border-slate-300'>
                {movie.name}
              </td>

              <td className='border border-slate-300'>
                {movie.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}
