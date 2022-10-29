import React, { useContext } from 'react';
import classNames from 'classnames';

import { Context } from '../../../context/settingsContext';
import { Theme } from '../../../types/settings';
import { TitleProps } from './types';

import common from './../../../styles/commonStyles.module.scss';

function Title({ children }: TitleProps): JSX.Element {
  const { theme } = useContext(Context);

  return (
    <h2
      className={classNames({
        [common.darkTitles]: theme === Theme.LightTheme,
        [common.lightTitles]: theme === Theme.DarkTheme,
      })}
    >
      {children}
    </h2>
  );
}

export default Title;
