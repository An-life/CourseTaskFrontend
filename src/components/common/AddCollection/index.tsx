import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import MDEditor from '@uiw/react-md-editor';
import { useForm } from 'react-hook-form';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import AddAdditionalOptions from '../AddAdditionalOptions';
import Title from '../Title';
import { IAddCollectionInputs } from './types';

import common from './../../../styles/commonStyles.module.scss';
import styles from './styles.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px',
};

const options = ['Sport', 'Games', 'Films'];

function AddCollection(): JSX.Element {
  const [description, setDescription] = useState<any>('');
  const [uploadedImage, setUploadedImage] =
    useState<
      <T extends File>(
        acceptedFiles: T[],
        fileRejections: FileRejection[],
        event: DropEvent,
      ) => void
    >();
  console.log(uploadedImage);

  const onDrop = useCallback((acceptedFiles: any) => {
    setUploadedImage(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    multiple: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddCollectionInputs>();

  const isFetching = false;

  const onSubmitHandler = (data: IAddCollectionInputs): void => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={style}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Title>
        <FormattedMessage id="user_page_add" />
      </Title>
      <TextField
        label="Title"
        variant="outlined"
        {...register('title', {
          required: true,
          minLength: {
            value: 3,
            message: 'Title too short',
          },
        })}
      />
      {errors.title != null && (
        <span className={common.errorMessage}>
          {errors.title.message?.length !== 0
            ? errors.title.message
            : 'This field is required'}
        </span>
      )}
      <TextField
        select
        fullWidth
        label="Topic"
        defaultValue=""
        inputProps={register('topic', {
          required: 'Please enter topic',
        })}
      >
        {options.map(value => {
          return (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          );
        })}
      </TextField>
      <div>
        <MDEditor value={description} onChange={setDescription} />
      </div>
      <div
        {...getRootProps()}
        className={classNames(styles.dropzone, {
          [styles.active]: isDragActive,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? <FormattedMessage id="drop" /> : <FormattedMessage id="drag" />}
      </div>
      <AddAdditionalOptions />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" type="submit" size="large">
          <FormattedMessage id="registration_send" />
        </Button>
      )}
    </Box>
  );
}

export default AddCollection;
