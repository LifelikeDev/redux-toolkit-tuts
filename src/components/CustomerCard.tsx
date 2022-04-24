import { useState } from 'react'
import { Customer } from '../features/customerSlice'

const CustomerCard = ({ id, name, food }: Customer) => {
    const [customerFood, setCustomerFood] = useState("");

    const populateCustomerFood = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        console.log(customerFood);
    }


    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {
                        food.map((item, index) => <p key={index}>{item}</p>)
                    }
                </div>
                <div className="customer-food-input-container">
                    <form onSubmit={populateCustomerFood}>
                        <input value={customerFood} onChange={(e) => setCustomerFood(e.target.value)} />
                        <button type="submit" className="btn">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard