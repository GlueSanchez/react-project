import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {Button, CardMedia, Checkbox, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import AddedPhoto from "./AddedPhoto";
import { v4 as uuid } from 'uuid';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    input: {
        display: 'none',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    imageBox:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const AddPhotoForm = () => {
    const [uploadImages, setUploadImgages] = useState([]);
    // const [uploadImg, setUploadImg] = useState({file: '', imagePreviewUrl: ''});
    const classes = useStyles();

    const handleSetImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setUploadImgages([...uploadImages,
                {
                    file: file,
                    imagePreviewUrl: reader.result,
                    id: uuid()
                }]);
        };

        reader.readAsDataURL(file)
    };
    const handleDelete=(id)=>{
        setUploadImgages(uploadImages.filter(img=>img.id !== id));
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.box}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleSetImage}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
               <div className={classes.imageBox}>
                   {uploadImages.map(img =>  <AddedPhoto handleDelete={handleDelete} img={img}/>)}
               </div>
                <Button color='primary' variant="contained">
                    Завантажити
                </Button>
            </div>
        </form>
    );
};

export default AddPhotoForm;
