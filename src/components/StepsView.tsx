import React, {useState} from 'react';
import {StepsTableItem} from '../models/stepsTableItem';
import {StepsForm} from './StepsForm/StepsForm';
import {StepsTable} from './StepsTable/StepsTable';
import {sortByDate} from '../helpers/utils';

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
    if (table.find((row) => row.date === item.date)) {
      setTable(
        table.map((row) =>
          row.date === item.date
            ? {...row, distance: Number(row.distance) + Number(item.distance)}
            : row
        )
      );
    } else setTable((prevTable) => [...prevTable, item]);

    setTable((prevTable) => sortByDate(prevTable, 'date'));
  };

  const handleRemoveItem = (id: string) => {
    setTable((prevTable) => prevTable.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="my-5">
        <StepsForm labels={labels} onSubmit={handleAddItem} />
      </div>
      {table.length ? (
        <StepsTable headers={labels} items={table} onRemoveItem={handleRemoveItem} />
      ) : (
        <div>Добавьте свою первую запись! :)</div>
      )}
    </>
  );
};
