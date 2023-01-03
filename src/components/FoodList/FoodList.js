import { useQuery } from '@tanstack/react-query';
import FoodDetails from '../FoodDetails/FoodDetails';
import './FoodList.css'

const FoodList = () => {

    const {data: items = [], isLoading, refetch} = useQuery({
        queryKey: ['items'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/items');
            const data = await res.json();
            return data;
        }
    });
    refetch();
    return (
        <div className='foodList'>

            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Food name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <FoodDetails
                        key={item._id}
                        item={item}
                        refetch={refetch}
                        ></FoodDetails> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FoodList;