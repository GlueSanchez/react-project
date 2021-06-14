import React, {useState} from 'react';
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
import {Button} from "@material-ui/core";
import WorkersModal from "./WorkersModal";


const workersList = [
    {
        name: 'Олег',
        age: 25,
        price: 6500,
        days: 23,
        usability: 0.8,
        id: uuid(),
    },
    {
        name: 'Василь',
        age: 45,
        price: 3200,
        days: 20,
        usability: 0.5,
        id: uuid()
    },
    {
        name: 'Олександр',
        age: 18,
        price: 100000,
        days: 2,
        usability: 0,
        id: uuid()
    },
    {
        name: 'Андрій',
        age: 36,
        price: 5200,
        days: 32,
        usability: 1,
        id: uuid()
    },
    {
        name: 'Ростислав',
        age: 19,
        price: 4900,
        days: 25,
        usability: 0.8,
        id: uuid()
    },
    {
        name: 'Володимир',
        age: 12,
        price: 12.50,
        days: 31,
        usability: 0.1,
        id: uuid()
    },
    {
        name: 'Іван',
        age: 41,
        price: 4100,
        days: 25,
        usability: 0.95,
        id: uuid()
    },
    {
        name: 'Петро',
        age: 65,
        price: 5600,
        days: 26,
        usability: 0.99,
        id: uuid()
    },
    {
        name: 'Мейсон',
        age: 99,
        price: 999999,
        days: 1,
        usability: -1,
        id: uuid()
    },
    {
        name: 'Людмила',
        age: 22,
        price: 32000,
        days: 3,
        usability: 10,
        id: uuid()
    },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {id: 'name', numeric: false, disablePadding: true, label: 'ПІБ'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Зарплата'},
    {id: 'age', numeric: true, disablePadding: false, label: 'Вік'},
    {id: 'days', numeric: true, disablePadding: false, label: 'Дні роботи'},
    {id: 'usability', numeric: true, disablePadding: false, label: 'Ставка'},
    {id: 'edit', numeric: false, disablePadding: false, label: ''},
];

function EnhancedTableHead(props) {
    const {classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{'aria-label': 'select all desserts'}}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const {numSelected} = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} вибрано
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Працівники
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete"
                                onClick={props.deleteSelectedItems}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
};


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
}));

const Workers = () => {
    const classes = useStyles();
    const [workers, setWorkers] = useState([...workersList]);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('price');
    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(false);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = workers.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;
    const deleteSelectedItems = () => {
        console.log(selected)
        setWorkers((prevState) => {
            return [...prevState.filter(worker => !selected.includes(worker.id))];
        });
        setSelected([]);
    };
    const changeUsability = (id, value) => {

        setWorkers((prevState) => {
            return [...prevState.filter(worker => {
                    if (worker.id === id) {
                        worker.usability = value
                    }
                }
            ), ...prevState];
        });
    };
    return (
        <div className={classes.root}>

                <EnhancedTableToolbar numSelected={selected.length}
                                      deleteSelectedItems={deleteSelectedItems}/>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={workers.length}
                        />
                        <TableBody>
                            {workers.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                let id = row.id;
                                let usability = row.usability;
                                let name = row.name;
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.age}</TableCell>
                                        <TableCell align="right">{row.days}</TableCell>
                                        <TableCell align="right">{row.usability}</TableCell>
                                        <TableCell align="right">
                                            <Button>
                                                <WorkersModal {...{id, usability, changeUsability, name}}/>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                додати нового

        </div>
    );
};
export default Workers;