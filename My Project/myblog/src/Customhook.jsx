import Blog from "./Blog";
import useFetch from "./useFetch";

const Customhook = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="container">
      <h2 className="m-4">This Is My Blog</h2>
      {error && <div>{error}</div>}
      {loading && <div>Loading Data...</div>}
      {blogs && <Blog blog={blogs} />}
    </div>
  );
};
export default Customhook;
