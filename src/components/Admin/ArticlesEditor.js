import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import {v4 as uuid} from 'uuid';
import {Button, Drawer, TextField} from "@material-ui/core";
import ShowMoreText from 'react-show-more-text';
import ArticlesModal from "./ArticlesModal";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    articlesEditorForm: {
        padding: '5px',
        marginBottom: '15px'
    },
    input: {
        margin: '10px 0'
    },
}));

const ArticlesEditor = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([
        {
            idArticle: '19',
            title: 'About us',
            contents: 'hgfh fghf ghfghfgh fghfhfgh fghfhfghf ghfghf f hfgh f  f hfghfghf ghfhfgh fghff h fgfg'
        },
        {
            idArticle: '21',
            title: 'About us', contents: 'lorem'
        }, {
            idArticle: '22',
            title: 'About us', contents: 'lorem'
        },
    ]);
    useEffect(() => {
        fetch('https://localhost:44352/api/home/ArticleGetAll', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setArticles((prevState) => [...prevState, ...data]))
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, [])
    const [inputValue, setInputValue] = useState({
        title: '',
        contents: '',
    });
    const handleChangeInput = (e) => {
        setInputValue({title: e.target.value, contents: inputValue.contents});
    };
    const handleChangeTextArea = (e) => {
        setInputValue({contents: e.target.value, title: inputValue.title});
    };
    const handleSend = () => {
        if (inputValue.title !== '' && inputValue.contents !== '') {
            setArticles(prevState => [...prevState, inputValue]);
            setInputValue({
                title: '',
                contents: '',
                idArticle: uuid(),
            });
        }

    };
    const handleDelete = (id) => {
        setArticles(articles.filter(item => item.idArticle !== id));
    };
    const handleChangeValue = (itemChanged) => {
        setArticles(articles.filter(item => item.idArticle !== itemChanged.idArticle))
        setArticles(prevState => [...prevState, itemChanged])
    };
    return (
        <div className={classes.root}>
            <div className={classes.articlesEditorForm}>

                <Typography variant={'h4'}>
                    Додати статтю
                </Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Заголовок статті"
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    onChange={handleChangeInput}
                    value={inputValue.title}
                    required
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Текст статті"
                    multiline
                    rows={10}
                    fullWidth
                    variant="outlined"
                    className={classes.input}
                    onChange={handleChangeTextArea}
                    value={inputValue.contents}
                    required
                />
                <Button
                    onClick={handleSend}
                    color={'primary'}
                    variant="contained"
                    type={'button'}>Додати статтю</Button>

            </div>
            <Drawer/>
            <Typography variant={'h5'}>
                Список статтей
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Заголовок</TableCell>
                            <TableCell align="center">текст</TableCell>
                            <TableCell align="center">Змінити</TableCell>
                            <TableCell align="center">Видалити</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles ? articles.map((row) => {
                                let id = row.idArticle;
                                let text = row.contents;
                                let title = row.title;
                                return (
                                    <TableRow key={row.idArticle}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center" style={{maxWidth: '200px'}}>
                                            <ShowMoreText
                                                /* Default options */
                                                lines={1}
                                                more='Show more'
                                                less='Show less'
                                                className='content-css'
                                                anchorClass='my-anchor-css-class'
                                                expanded={false}
                                                keepNewLines={true}
                                                width={350}>
                                                {row.contents}
                                            </ShowMoreText>
                                        </TableCell>
                                        <TableCell align="center">
                                            <ArticlesModal {...{id, text, title, handleChangeValue}}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleDelete(row.idArticle)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                )
                            }
                            )

                            : ''}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default ArticlesEditor;