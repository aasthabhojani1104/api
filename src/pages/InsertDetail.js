import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function InsertDetail() {
  const { id } = useParams();
  const [subUpdated, setsubUpdated] = useState({});
  let [sub, setSub] = useState({
    subjectName: "",
    subjectCode: "",
    subjectFaculty: "",
  });
  let navigate = useNavigate();
 
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/";
  const [isUpdated, setIsUpdated] = useState(false);
  //this is api version
  // checking main branch
  useEffect(()=>{
    fetch(apiUrl + id)
      .then((res) => res.json())
      .then((res) => setsubUpdated(res))
   },[id]
  );
  return (
    <>
      <table>
        <tr>
          <td>Name:</td>
          <td>
            {id != null ? (
              <>
                <input
                  type="text"
                  value={subUpdated.subjectName}
                  onChange={(e) => {
                    setsubUpdated({
                      ...subUpdated,
                      subjectName: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={sub.subjectName}
                  onChange={(e) => {
                    setSub({
                      ...sub,
                      subjectName: e.target.value,
                    });
                  }}
                />
              </>
            )}
          </td>
        </tr>
        <tr>
          <td>Code:</td>
          <td>
            {id != null ? (
              <>
                <input
                  type="text"
                  value={subUpdated.subjectCode}
                  onChange={(e) => {
                    setsubUpdated({
                      ...subUpdated,
                      subjectCode: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={sub.subjectCode}
                  onChange={(e) => {
                    setSub({
                      ...sub,
                      subjectCode: e.target.value,
                    });
                  }}
                />
              </>
            )}
          </td>
        </tr>
        <tr>
          <td>Faculty:</td>
          <td>
            {id != null ? (
              <>
                <input
                  type="text"
                  value={subUpdated.subjectFaculty}
                  onChange={(e) => {
                    setsubUpdated({
                      ...subUpdated,
                      subjectFaculty: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={sub.subjectFaculty}
                  onChange={(e) => {
                    setSub({
                      ...sub,
                      subjectFaculty: e.target.value,
                    });
                  }}
                />
              </>
            )}
          </td>
        </tr>
        <tr>
          <td>
            {id!=null ? <>
              <button className="btn btn-info"  onClick={() => {
                fetch(apiUrl+id, {
                  method: "PUT",
                  body: JSON.stringify(subUpdated),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    // setSub(res);
                    navigate("/Card")
                    
                  });
              }}>
              Edit
            </button>
            </>:<>
            <button
              className="btn btn-info"
              onClick={() => {
                fetch(apiUrl, {
                  method: "POST",
                  body: JSON.stringify(sub),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    setIsUpdated(!isUpdated);
                    setSub({
                      subjectName: "",
                      subjectCode: "",
                      subjectFaculty: "",
                    });
                  });
              }}
            >
              Submit
            </button>
            </>}
            
           
            <Link to="/Card" className="btn btn-danger">
              Cancel
            </Link>
          </td>
        </tr>
      </table>
    </>
  );
}

export default InsertDetail;
