import { useParams } from "react-router";

const Detail = () => {
  const { postid } = useParams();
  console.log(postid);
  return <div>This is details for {postid} </div>;
};
export default Detail;
