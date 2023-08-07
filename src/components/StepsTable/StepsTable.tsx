import React from 'react';
import {StepsTableItem, StepsLabelItem} from '../../models/stepsTableItem';

interface StepsTableProps {
  headers: StepsLabelItem[];
  items: StepsTableItem[];
  onRemoveItem: (id: string) => void;
}

export const StepsTable = ({headers, items, onRemoveItem}: StepsTableProps) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key} scope="col">
              {header.text}
            </th>
          ))}
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.distance}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemoveItem(item.id)}
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
