import React, {useState} from 'react';
import {StepsTableItem} from '../models/stepsTableItem';
import {StepsForm} from './StepsForm/StepsForm';
import {StepsTable} from './StepsTable/StepsTable';

export const StepsView = () => {
  const labels = [
    {
      key: 'date',
      text: 'Дата (ДД.ММ.ГГ)',
    },
    {
      key: 'distance',
      text: 'Пройдено, км',
    },
  ];
  const [table, setTable] = useState<StepsTableItem[]>([]);

  const handleAddItem = (item: StepsTableItem) => {
    setTable((prevTable) => [...prevTable, item]);
  };

  const handleRemoveItem = (id: string) => {
    setTable((prevTable) => prevTable.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="my-5">
        <StepsForm labels={labels} onSubmit={handleAddItem} />
      </div>
      <StepsTable headers={labels} items={table} onRemoveItem={handleRemoveItem} />
    </>
  );
};
