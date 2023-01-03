import './App.css';
import FoodList from './components/FoodList/FoodList';
import ItemForm from './components/ItemForm/ItemForm';

function App() {
  return (
    <div className='container'>
      <ItemForm></ItemForm>
      <FoodList></FoodList>
    </div>
  );
}

export default App;
