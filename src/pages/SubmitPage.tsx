import { useAppSelector } from '../app/hooks';

const SubmitPage = () => {
  const worker = useAppSelector((state) => state.worker);
  const fullEquipmentList = useAppSelector((state) => state.inventory);

  const missingEquipment = fullEquipmentList.filter(
    (item) => item.missing! > 0
  );
  return (
    <>
      <div className="submitting">
        <h1>Thank you for submitting!</h1>
        <div className="missing-items">
          {missingEquipment.length ? (
            missingEquipment.map((item) => {
              return (
                <li className="missing">
                  Missing <span className="missing-num">{item.missing}</span>{' '}
                  {item.name}
                </li>
              );
            })
          ) : (
            <h1 style={{ color: 'green' }}>
              All equipment is found and ready for shift!
            </h1>
          )}
        </div>
        <div>
          <br />
          {worker.fullName} <br />
          {worker.date} <br />
        </div>
      </div>
    </>
  );
};

export default SubmitPage;
