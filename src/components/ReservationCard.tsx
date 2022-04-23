import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from "../features/reservationSlice";
import { AiOutlineClose } from "react-icons/ai";

interface ReservationType {
  name: string,
  index: number
}

const ReservationCard = ({ name, index }: ReservationType) => {
  const dispatch = useDispatch();

  const deleteReservation = () => {
    dispatch(removeReservation(index));
  }

  return (
    <div className="reservation-card-container" >
      <p>{name}</p>
      <AiOutlineClose size={12} opacity={.4} onClick={deleteReservation}/>
    </div>
  )
}

export default ReservationCard