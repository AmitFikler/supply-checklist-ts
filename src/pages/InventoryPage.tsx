import { useNavigate } from 'react-router';
import AddItem from '../components/AddItem';
import InventoryList from '../components/InvetoryList';

function InventoryPage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/submit');
  };
  return (
    <>
      <InventoryList />
      <AddItem />
      <button className="submit-form" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default InventoryPage;
