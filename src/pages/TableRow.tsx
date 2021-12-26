import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Equipment } from '../types/equipment';

const TableRow = ({ item, i }: { item: Equipment; i: number }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const dispatch = useDispatch();

  const removeItem = (index: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };
  useEffect(() => {
    dispatch({
      type: 'UPDATE_MISSING',
      index: i,
      missing: item.fullQuantity - currentQuantity,
    });
  }, [currentQuantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuantity(Number(e.target.value));
  };
  return (
    <tr style={{ backgroundColor: i % 2 ? '#508991' : '#95C5DA' }}>
      <td>{i}</td>
      <td>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          min={0}
          defaultValue={0}
          type="number"
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td>
        {item.fullQuantity - currentQuantity < 0
          ? 0
          : item.fullQuantity - currentQuantity}
      </td>
      {item.owner ? (
        <td>
          <button
            onClick={() => {
              removeItem(i);
            }}
          >
            <i className="fas fa-trash-alt"></i>{' '}
          </button>
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default TableRow;
