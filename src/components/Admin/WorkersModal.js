import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function WorkersModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [usability, setUsability] = useState(props.usability || '');
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeUsability = (e) => {
        setUsability(e.target.value);
    };
    return (
        <div>
            <Button type="button" onClick={handleOpen}>
                Змінити
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Змінити ставку у {props.name}</h2>
                        <input type="text" value={usability}
                               onChange={handleChangeUsability}
                        />
                        <Button id="transition-modal-description"
                                onClick={() => props.changeUsability(props.id,usability)}>Змінити</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}