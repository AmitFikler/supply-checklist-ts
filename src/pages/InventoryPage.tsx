import { useAppSelector } from '../app/hooks';
import { Equipment } from '../types/equipment';
import TableRow from './TableRow';

const InventoryList = () => {
  const fullEquipmentList = useAppSelector((state) => state.inventory);
  const worker = useAppSelector((state) => state.worker);
  return (
    <div>
      <h1>Hello {worker.fullName}!</h1>
      <h3>Please check the equipment before entering the shift.</h3>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item's name</th>
              <th>Full quantity</th>
              <th>Current quantity</th>
              <th>Missing</th>
            </tr>
          </thead>
          <tbody>
            {fullEquipmentList.map((item: Equipment, i) => {
              return [<TableRow item={item} i={i} key={i} />];
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
