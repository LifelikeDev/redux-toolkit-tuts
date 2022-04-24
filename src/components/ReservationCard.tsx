import { useDispatch } from 'react-redux'
import { removeReservation } from "../features/reservationSlice";
import { AiOutlineClose } from "react-icons/ai";
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from "uuid";

interface ReservationType {
  name: string,
  index: number
}

const ReservationCard = ({ name, index }: ReservationType) => {
  const dispatch = useDispatch();

  const deleteReservation = () => {
    dispatch(removeReservation(index));
  }

  const includeCustomer = () => {
    let payload = {
      id: uuid(),
      name,
      food: ["", ""]
    }
    dispatch(addCustomer(payload));
  }

  return (
    <div className="reservation-card-container" onClick={includeCustomer} >
      <p>{name}</p>
      <AiOutlineClose size={12} opacity={.4} onClick={deleteReservation} />
    </div>
  )
}

export default ReservationCard