import React from 'react'

interface ReservationType {
  name: string
}

const ReservationCard = ({ name }: ReservationType) => {
  return (
    <div className="reservation-card-container">{name}</div>
  )
}

export default ReservationCard