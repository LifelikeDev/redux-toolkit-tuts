import { Customer } from '../features/customerSlice'

const CustomerCard = ({ id, name, food }: Customer) => {
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {
                        food.map(item => <p>{item}</p>)
                    }
                </div>
                <div className="customer-food-input-container">
                    <input />
                    <button className="btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard