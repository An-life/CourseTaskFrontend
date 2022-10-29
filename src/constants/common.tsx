import React from 'react';

import { amber } from '@mui/material/colors';
import AbcIcon from '@mui/icons-material/Abc';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const dataTypesIcons: { [key: string]: JSX.Element } = {
  text: <AbcIcon fontSize="small" sx={{ color: amber[700] }} />,
  textarea: <TextSnippetIcon fontSize="small" sx={{ color: amber[700] }} />,
  data: <InsertInvitationIcon fontSize="small" sx={{ color: amber[700] }} />,
  checkBox: <CheckCircleIcon fontSize="small" sx={{ color: amber[700] }} />,
  number: <FormatListNumberedIcon fontSize="small" sx={{ color: amber[700] }} />,
};
