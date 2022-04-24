import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationName, setReservationName] = useState("");
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customers.value)
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
                reservations.map((name: string, index) => <ReservationCard name={name} index={index} key={index} />)
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
          <div>
            <h5 className="customer-header">Customers</h5>
            {
              customers.map(({ id, name, food }) => <CustomerCard key={id} id={id} name={name} food={food} />)
            }
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;