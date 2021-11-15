import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Card, CardContent} from "@material-ui/core";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.color}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Детальна інформація
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Фото</TableCell>
                                        <TableCell>Ідентифікатор</TableCell>
                                        <TableCell align="center">Висота</TableCell>
                                        <TableCell align="center">Довжина</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow key={row.idMaterial}>
                                        <TableCell component="th" scope="row">
                                            <img
                                                src="https://www.fredericiahistorie.dk/sites/fredericiahistorie.subsites.fredericia.dk/files/styles/body-center-img_phone/public/img_20463_1.jpg?itok=g1ydNYbP"
                                                alt=""/>
                                        </TableCell>
                                        <TableCell>{row.idMaterial}</TableCell>
                                        <TableCell align="center">{row.height}</TableCell>
                                        <TableCell align="center">
                                            {row.length}
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function Monuments() {
    const [monuments, setMonuments] = useState([
        {
            idMaterial: '19',
            name: 'Куб',
            color: 'Червоний',
            status: 'Очікується оплата',
            height: '5',
            length: '8',
            price: '4500',
            number: '60',
        },
        {
            idMaterial: '19',
            name: 'Куб',
            color: 'Червоний',
            status: 'Очікується оплата',
            height: '5',
            length: '8',
            price: '4500',
            number: '60',
        },
        {
            idMaterial: '19',
            name: 'Куб',
            color: 'Червоний',
            status: 'Очікується оплата',
            height: '5',
            length: '8',
            price: '4500',
            number: '60',
        },
    ]);
    useEffect(() => {
        fetch('https://localhost:44352/api/admin/monument', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setMonuments((prevState) => [...prevState, ...data]))
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, [])
    return (
        <Card>

            <Typography variant={'h5'} gutterBottom align={'center'}>
                Список памятників в роботі
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Матеріал</TableCell>
                            <TableCell align="center">Кількість матеріалу</TableCell>
                            <TableCell align="center">Ціна</TableCell>
                            <TableCell align="center">Статус</TableCell>
                            <TableCell align="center">Колір</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {monuments.map((row) => (
                            <Row key={row.idMaterial} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Card>
    );
}
