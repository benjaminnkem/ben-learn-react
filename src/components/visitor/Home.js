import { useParams } from "react-router-dom";

const VisitorHome = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hello visitor with id: {id}</h1>
    </div>
  );
};

export default VisitorHome;
