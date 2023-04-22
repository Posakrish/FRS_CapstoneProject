import React, { useEffect, useState } from "react";
import { API } from "../service/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./GetFlights.css"
function GetFlights() {
  const [flight, setFlight] = useState([]);

  const nav = useNavigate();

  const rout = () => {
    nav("/addflight");
  };

  useEffect(() => {
    API.get().then((res) => {
      setFlight(res);
    });
  }, []);
  console.log(flight);

  const deleteFlight = (id) => {
    let flight = window.confirm(`do you want delete${id}`);
    if (flight) {
      API.deleteFlight(id).then((res) => {
        setFlight(flight.filter((item) => item.flightID !== id));
      });
    } else {
      return;
    }
  };

  return (
    <div className="g">

   
    <div >
      <button className="bu" onClick={rout}>ADD FLIGHT</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Flight Name</th>
            <th>Seating Capacity</th>
            <th>Reservation Capacity</th>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {flight.map((flights) => (
            <tr key={flights.flightID}>
              <td>{flights.flightID}</td>
              <td>{flights.flightName}</td>
              <td>{flights.seatingCapacity}</td>
              <td>{flights.reservationCapacity}</td>
              <td>
                <Link to={`/editFlight/${flights.flightID}`}>Edit</Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteFlight(flights.flightID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default GetFlights;
