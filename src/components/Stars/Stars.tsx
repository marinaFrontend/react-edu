import React from 'react';
import {Star} from '../Star/Star';

import {range} from '../../helpers/utils';
import {NumRangeModel} from '../../models/numRangeModel';

interface StarsProps {
  count: NumRangeModel;
}

function isValidNumber(num: number) {
  return !!num && Number.isInteger(num) && num > 0 && num < 6;
}

export const Stars = ({count}: StarsProps) => {
  return (
    <ul className="card-body-stars u-clearfix d-flex">
      {isValidNumber(count) &&
        range(1, count).map((star) => (
          <li key={star}>
            <Star />
          </li>
        ))}
    </ul>
  );
};
