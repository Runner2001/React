// const Post = ({ match }) => {
//   return (
//     <>
//       <h2>Get Info From Parameter = {match.params.id}</h2>
//     </>
//   );
// };
// export default Post;

import { useLocation, useParams } from "react-router";

const Post = () => {
  let { id } = useParams();
  console.log(useLocation());
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <h2>Get Info From Parameter = {id}</h2>
      <h3>{query.get("first")}</h3>
    </>
  );
};

export default Post;
