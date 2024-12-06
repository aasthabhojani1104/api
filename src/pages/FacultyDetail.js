import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function FacultyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  let [Faculty, setfaculty] = useState({});
  let [subId, setsubId] = useState({});
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/" + id;
  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setfaculty(res));
  }, []);
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <div className="col-4 my-2">
        <div class="card">
         
          <div class="card-body">
            <h5 class="card-title">{Faculty.subjectName}</h5>
            <p class="card-text">{Faculty.subjectCode}</p>
            <p class="card-text">{Faculty.subjectFaculty}</p>
            <Link to="/Card" class="btn btn-primary">
              Back to Profile
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                fetch(apiUrl, { method: "DELETE" })
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
}

export default FacultyDetail;
