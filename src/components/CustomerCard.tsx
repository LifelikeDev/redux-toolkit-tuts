import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer, AddFoodToCustomer, Customer } from '../features/customerSlice'

const CustomerCard = ({ id, name, food }: Customer) => {
    const [customerFood, setCustomerFood] = useState("");
    const dispatch = useDispatch();

    const populateCustomerFood = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!customerFood) {
            alert("Please enter a valid customer name");
        }

        let payload: AddFoodToCustomer = {
            id,
            food: customerFood
        }

        dispatch(addFoodToCustomer(payload));
        setCustomerFood("");
    }


    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {
                        food.map((item, index) => <p key={index} className='item'>{item}</p>)
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