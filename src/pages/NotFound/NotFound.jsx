import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div>
        <iframe src="https://giphy.com/embed/frIc4JbjgzkoqGhWiz" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <h2 className="text-2xl mt-4">
        <b>404 </b>- Page Not Found
      </h2>
      <Button onClick={handleClick} size={"small"} className={"mt-2 "}>
        Back To Home
      </Button>
    </div>
  );
}
