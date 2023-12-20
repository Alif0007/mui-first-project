import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Autocomplete from '@mui/material/Autocomplete';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { useState } from "react";






//upload bttn

function App() {
  const [fileType, setFileType] = useState("Image");
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(false);
  const [file, setFile] = useState(false);

  const handleclick = (event, name) => {
    if (name === 'image') {
      setImage(true)
      setVideo(false)
      setFile(false)
    } else if (name === 'video') {
      setVideo(true)
      setImage(false)
      setFile(false)
    } else {
      setFile(true)
      setImage(false)
      setVideo(false)
    }
  }

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },];



  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  // export default function getStyles() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  // console.log(personName);

  const [slug, setSlug] = useState('');
  // console.log('slug', slug);

  const [content, setContent] = useState('');
  // console.log('content', content);


  const [tittle, setTittle] = useState('');
  // console.log('tittle', tittle);

  const [inputFiles, setInputFiles] = useState(null);
  // console.log(inputFiles);




  const [featureImage, setFeatureImage] = useState(null);
  // console.log(featureImage);

  // const [oneParent, setOneParent] = useState(null);
  // console.log(oneParent);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  const [checked, setChecked] = React.useState(true);

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };


  console.log('checked', checked);


  return (
    <>
      <div className="bg">
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card
                sx={{
                  padding: '20px',
                  borderRadius: '10px'
                }}>
                <Box
                  sx={{
                    maxWidth: '100%',
                    marginBottom: '30px'
                  }}
                >
                  <TextField fullWidth label="Page Tittle" id="Page Tittle" onChange={(e) => setTittle(e.target.value)} value={tittle} />
                </Box>
                <Box
                  sx={{
                    maxWidth: '100%',
                    marginBottom: '30px'
                  }}
                >
                  <TextField fullWidth label="Page Slug" id="Page Slug" onChange={(e) => setSlug(e.target.value)} value={slug} />
                </Box>
                <Typography variant="h6" component="h5" mt="15px">
                  Content
                </Typography>

                <TextField sx={{
                  width: '100%',
                  height: ''
                }}
                  id="outlined-multiline-flexible"
                  label="Content"
                  multiline
                  maxRows={6}
                  onChange={(e) => setContent(e.target.value)} value={content}
                />
                <Typography variant="h6" component="h5" mt="15px">
                  (Upload Content)
                </Typography>
                <Stack spacing={6} direction="row" mt="15px">
                  <Button sx={{ background: '#01AB55', borderRadius: '8px', ":hover": { bgcolor: "#E5E8EB", color: "black" } }} onClick={(e) => handleclick(e, 'image', setFileType('image'))} disabled={image === true ? true : false} variant="contained" >Images</Button>
                  <Button sx={{ background: '#01AB55', borderRadius: '8px', ":hover": { bgcolor: "#E5E8EB", color: "black" } }} onClick={(e) => handleclick(e, 'video', setFileType('video'))} disabled={video === true ? true : false} variant="contained">Videos</Button>
                  <Button sx={{ background: '#01AB55', borderRadius: '8px', ":hover": { bgcolor: "#E5E8EB", color: "black" } }} onClick={(e) => handleclick(e, 'file', setFileType('file'))} disabled={file === true ? true : false} variant="contained">Files</Button>
                </Stack>
                <Typography sx={{ my: 2 }} >
                  Upload {fileType}
                </Typography>
                <Button sx={{ width: '100%', height: '80px', background: '#FAFAFA', color: 'black', mt: "20px" }} component="label" variant="contained" startIcon={<CloudUploadIcon />} onChange={(e) => setInputFiles(e.target.files[0])}>
                  Click or Drag {fileType} here to Upload
                  <VisuallyHiddenInput type="file" accept={`${fileType}/*`} />
                </Button>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{
                padding: '20px',
                borderRadius: '10px'
              }}>
                <Box className="publish">
                  <Typography variant="h6" component="h5" mt="15px">
                    Publish
                  </Typography>
                  <div style={{ color: 'green' }}>
                    <Switch
                      checked={checked}
                      onChange={handleChangeSwitch}
                      inputProps={{ 'aria-label': 'controlled' }}
                      color="success"
                    />
                  </div>
                </Box>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Select Parent Page" />}
                />
                <div>
                  <FormControl sx={{ mt: '10px', width: '100%' }}>
                    <InputLabel id="demo-multiple-name-label">Page Position</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <Typography variant="h6" component="h5" mt="15px">
                  Featured Images
                </Typography>

                {featureImage === null ? <Box className="drop-div">
                  <div>
                    <Avatar sx={{ height: '50px', width: '50px', padding: '30px' }} alt="Example Image" src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" />

                  </div>
                  <div >
                    <Typography variant="h6" component="h5" mt="15px">
                      Drop or Select Files
                    </Typography>
                    <Typography variant="p" component="p" mt="15px">
                      Drop files here or click
                      <Button sx={{ m: 0, p: 1, fontSize: 11, color: 'green', textDecoration: 'underline' }} component="label" onChange={(e) => setFeatureImage(e.target.files[0])} >
                        browse
                        <VisuallyHiddenInput type="file" />
                      </Button> through your machine
                    </Typography>
                  </div>
                </Box>
                  :
                  <div className="drop-div-1">
                    <div className='img_feature'>

                      <img src={URL.createObjectURL(featureImage)} alt='' width={'50%'} height={'40%'} />
                    </div>
                    <div >
                      <Button className='btn_cancel_features' onClick={(e) => setFeatureImage(null)}>cancel</Button>
                    </div>
                  </div>}
              </Card>
              <div className="btn">
                <Stack spacing={6} direction="row" mt="15px">
                  <Button sx={{ background: 'transparent', color: 'black', fontWeight: '600', borderRadius: '8px' }} variant="contained">Preview</Button>
                  <Button sx={{ background: '#01AB55', borderRadius: '8px', }} variant="contained">Save</Button>
                  <Button sx={{ background: '#01AB55', borderRadius: '8px' }} variant="contained">Post</Button>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </div>
      </div >
    </>
  );
}

export default App;
