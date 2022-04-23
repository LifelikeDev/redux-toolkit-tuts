import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationName, setReservationName] = useState("");
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const dispatch = useDispatch();

  const handleAddReservation = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!reservationName) {
      alert("Please enter a valid reservation name");
    }

    dispatch(addReservation(reservationName));
    setReservationName("");
  }

  return (
    <div className="App">

      <div className="container">

        {/* Reservations */}
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((name: string) => <ReservationCard name={name} />)
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <form onSubmit={handleAddReservation}>
              <input value={reservationName} onChange={(e) => setReservationName(e.target.value)} />
              <button className="btn">Add</button>
            </form>
          </div>
        </div>

        {/* Customer Food */}
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Charlex Xavier</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button className="btn">Add</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;