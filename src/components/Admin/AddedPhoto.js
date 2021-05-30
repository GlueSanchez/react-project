import React from 'react';
import {Button, Checkbox, FormControlLabel, TableCell, TableRow} from "@material-ui/core";
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
        <TableRow style={{width: '100%'}}>
            {/*<TableCell>*/}
            {/*    <FormControlLabel control={<Checkbox name="checkedC"/>} />*/}
            {/*</TableCell>*/}
            <TableCell align={'left'}>
                <img
                    className={classes.media}
                    src={img.imagePreviewUrl}/>
            </TableCell>
            <TableCell align={'center'}>
                <FormControlLabel control={<Checkbox name="checkedC"/>} label="Одинарний"/>
                <FormControlLabel control={<Checkbox name="checkedD"/>} label="Двойний"/>
                <FormControlLabel control={<Checkbox name="checkedD"/>} label="Елітний"/>

            </TableCell>
            <TableCell align={'right'}>
               <Button onClick={()=>handleDelete(img.id)}>
                   <DeleteIcon/>
               </Button>
            </TableCell>
        </TableRow>
    );
};

export default AddedPhoto;
