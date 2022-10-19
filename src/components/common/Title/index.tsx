import React, { useContext } from 'react';
import classNames from 'classnames';

import { Context } from '../../../context/settingsContext';
import { Theme } from '../../../types/common';
import { TitleProps } from './types';

import common from './../../../styles/commonStyles.module.scss';

function Title({ title }: TitleProps): JSX.Element {
  const { theme } = useContext(Context);
  return (
    <h2
      className={classNames({
        [common.darkTitles]: theme === Theme.LightTheme,
        [common.lightTitles]: theme === Theme.DarkTheme,
      })}
    >
      {title}
    </h2>
  );
}

export default Title;
