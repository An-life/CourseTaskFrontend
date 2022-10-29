import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { amber } from '@mui/material/colors';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

import { Context } from '../../../context/settingsContext';
import { dataTypesIcons } from '../../../constants/common';
import { IAddAdditionalOptions } from './types';
import { options } from './constants';
import { Theme } from '../../../types/settings';

import common from './../../../styles/commonStyles.module.scss';

const style = {
  width: 350,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '5px',
};

function AddAdditionalOptions(): JSX.Element {
  const { theme } = useContext(Context);
  const [optionsFields, setOptionsFields] = useState<IAddAdditionalOptions[] | []>([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  const onSubmitHandler = (): void => {
    const chekedOptions = optionsFields.filter(item => item.title !== title);

    setOptionsFields([{ type, title }, ...chekedOptions]);
  };
  console.log(optionsFields);
  const removeOptionHandler = (optionTitle: string): void => {
    const filteredOptions = optionsFields?.filter(item => item.title !== optionTitle);
    setOptionsFields(filteredOptions);
  };
  return (
    <div>
      <div
        className={classNames({
          [common.darkTitles]: theme === Theme.LightTheme,
          [common.lightTitles]: theme === Theme.DarkTheme,
        })}
      >
        <FormattedMessage id="item_options" />
      </div>
      {optionsFields?.map(item => {
        return (
          <div key={item.title}>
            {dataTypesIcons[type]}
            {item.title}
            <Tooltip title={<FormattedMessage id="item_field_delete" />}>
              <IconButton onClick={() => removeOptionHandler(item.title)}>
                <RemoveCircleOutlineIcon fontSize="small" sx={{ color: amber[700] }} />
              </IconButton>
            </Tooltip>
          </div>
        );
      })}
      <Box sx={style}>
        <TextField
          select
          fullWidth
          label="Type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {options.map(({ value, optionTitle }) => {
            return (
              <MenuItem value={value} key={value}>
                {optionTitle}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <Tooltip title={<FormattedMessage id="item_field" />}>
          <IconButton onClick={onSubmitHandler}>
            <LibraryAddIcon fontSize="medium" sx={{ color: amber[700] }} />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
}

export default AddAdditionalOptions;
