import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import MDEditor from '@uiw/react-md-editor';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

import { amber } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import AddAdditionalOptions from '../AddAdditionalOptions';
import Title from '../Title';
import { topicOptions } from '../../../constants/temporary';
import { IAddCollectionInputs, IAddAdditionalOptions, IInitialData } from './types';

import common from './../../../styles/commonStyles.module.scss';
import styles from './styles.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px',
};

function AddCollection({
  initialTitle,
  initialDescription,
  formType,
}: IInitialData): JSX.Element {
  const [description, setDescription] = useState<any>(initialDescription);
  const [uploadedImage, setUploadedImage] = useState<any>();
  const [optionsFields, setOptionsFields] = useState<IAddAdditionalOptions[] | []>([]);

  const deleteImageHandler = (): void => {
    setUploadedImage('');
  };

  const previewFile = (file: any): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUploadedImage(reader?.result);
    };
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setUploadedImage(acceptedFiles[0]);
    previewFile(acceptedFiles[0]);
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
    if (formType === 'add') {
      const addCollectionFormData = {
        title: data.title,
        topic: data.topic,
        description,
        image: uploadedImage,
        additionalOptions: optionsFields,
      };
      console.log(addCollectionFormData);
    } else {
      const changedCollectionFormData = {
        title: data.title,
        topic: data.topic,
        description,
        image: uploadedImage,
      };
      console.log(changedCollectionFormData);
    }
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
        defaultValue={initialTitle}
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
        {topicOptions.map(value => {
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
      {!uploadedImage && (
        <div
          {...getRootProps()}
          className={classNames(styles.dropzone, {
            [styles.active]: isDragActive,
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? <FormattedMessage id="drop" /> : <FormattedMessage id="drag" />}
        </div>
      )}
      {uploadedImage && (
        <div className={styles.container}>
          <img src={uploadedImage} alt="chosen" className={styles.image} />
          <Tooltip title={<FormattedMessage id="image_delete" />}>
            <IconButton onClick={deleteImageHandler}>
              <DeleteIcon fontSize="small" sx={{ color: amber[700] }} />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {formType === 'add' && (
        <AddAdditionalOptions
          optionsFields={optionsFields}
          setOptionsFields={setOptionsFields}
        />
      )}
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
