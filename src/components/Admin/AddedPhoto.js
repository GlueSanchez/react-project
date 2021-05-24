import React from 'react';
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({

    media: {
        height: '150px',
    },
    imgItem: {
        padding: 5,
        display: 'flex',
        alignItems: 'center'
    }
}));

const AddedPhoto = ({img,handleDelete}) => {
    const classes = useStyles();
    return (
        <div className={classes.imgItem} key={img.id}>
            <div>
                <FormControlLabel control={<Checkbox name="checkedC"/>} />
            </div>
            <div>
                <img
                    className={classes.media}
                    src={img.imagePreviewUrl}/>
            </div>
            <div>
                <FormControlLabel control={<Checkbox name="checkedC"/>} label="Одинарний"/>
                <FormControlLabel control={<Checkbox name="checkedD"/>} label="Двойний"/>
                <FormControlLabel control={<Checkbox name="checkedD"/>} label="Елітний"/>

            </div>
            <div>
               <Button onClick={()=>handleDelete(img.id)}>
                   <DeleteIcon/>
               </Button>
            </div>
        </div>
    );
};

export default AddedPhoto;
