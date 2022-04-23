import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";

function App() {

  const reservations = useSelector((state: RootState) => state.reservations.value)

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
            <input />
            <button className="btn">Add</button>
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