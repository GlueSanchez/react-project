import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button, IconButton, TextField} from "@material-ui/core";
import {v4 as uuid} from "uuid";
import EditIcon from "@material-ui/icons/Edit";

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
    input: {
        margin: '10px 0'
    },

}));

export default function ArticlesModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [articleChange, setArticleChange] = useState({
        title: props.title,
        contents: props.text,
        idArticle: props.id,
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleChangeInput = (e) => {
        setArticleChange({title: e.target.value, contents: articleChange.contents, idArticle: articleChange.idArticle});
    };
    const handleChangeTextArea = (e) => {
        setArticleChange({contents: e.target.value, title: articleChange.title, idArticle: articleChange.idArticle});
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handlesend = () => {
        props.handleChangeValue(articleChange);
        setOpen(false);
    };
    return (
        <div>
            <IconButton type="button" onClick={handleOpen}>
                <EditIcon/>
            </IconButton>
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
                        <h2 id="transition-modal-title">Змінити наповнення </h2>
                        {/*<input type="text" value={props.title}*/}
                        {/*       onChange={handleChangeUsability}*/}
                        {/*/>*/}
                        <TextField
                            id="outlined-multiline-static"
                            label="Заголовок статті"
                            fullWidth
                            variant="outlined"
                            className={classes.input}
                            value={articleChange.title}
                            onChange={handleChangeInput}
                            required
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Текст статті"
                            multiline
                            rows={10}
                            fullWidth
                            className={classes.input}
                            variant="outlined"
                            value={articleChange.contents}
                            onChange={handleChangeTextArea}
                            required
                        />
                        <Button variant={'contained'} color={'primary'} id="transition-modal-description"
                                onClick={handlesend}>Змінити</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}