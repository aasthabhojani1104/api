import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Card = () => {
 
  let [faculties, setfacilities] = useState([]);
  const navigate = useNavigate();
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/";
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setfacilities(res));
  }, [isUpdated]);

  const MyCard = faculties.map((fac) => {
    return (
      <>
        <div className="col-4 my-2">
          <div class="card">
            <h5 class="card-title">{fac.subjectName}</h5>
            <div class="card-body">
              <Link class="btn btn-primary" to={"/Card/" + fac.id}>
                View
              </Link>
              <Link class="btn btn-info" to={"/Card/InsertDetail/" + fac.id}>
                Edit
              </Link>
              {/* <button
                className="btn btn-warning"
                onClick={() => {
                  fetch(apiUrl + fac.id, { method: "GET" })
                    .then((res) => res.json())
                    .then((res) => {
                      navigate("/Card/InsertDetail/"+fac.id);
                    });
                }}
              >
                Edit
              </button> */}
              <button
                className="btn btn-danger"
                onClick={() => {
                  fetch(apiUrl + fac.id, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((res) => {
                      setIsUpdated(!isUpdated);
                      navigate("/Card");
                    });
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="Container">
        <div className="row my-2">
         
        </div>
        <Link to="/Card/InsertDetail"className="btn btn-primary">Add</Link>
        <div className="row my-2">{MyCard}</div>
      </div>
    </>
  );
};

export default Card;
