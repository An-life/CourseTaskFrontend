import React from 'react';

import { ITag } from '../types/common';

export const customTagRenderer = (
  tag: ITag,
  size: number,
  color: string,
): JSX.Element => (
  <span
    key={tag.value}
    style={{
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
);
