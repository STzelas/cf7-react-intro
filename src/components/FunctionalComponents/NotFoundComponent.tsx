import { Link } from "react-router"

const NotFoundComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 text-center items-center">
        <h1 className="text-9xl font-bold text-cf-dark-red">404</h1>
        <p className="text-4xl text-cf-dark-gray">Page not found</p>
        <p className="text-lg text-cf-gray">The page you are looking for does not exist</p>
        <Link to="/" className="bg-cf-dark-red hover:bg-red-800  text-white px-4 py-2 rounded w-25">Back</Link>
      </div>
    </>
  )
}

export default NotFoundComponent