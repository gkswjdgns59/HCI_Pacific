import React, { Component } from 'react'
import { Wheel } from 'react-custom-roulette'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Divider, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Hidden, DialogTitle, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase'

const data = [
    { option: 'free Dinner', style: { backgroundColor: '#E6E6FA', textColor: '#222222'} },
    { option: 'nothing', style: { backgroundColor: '#FAECE6', textColor: '#222222' } },
    { option: 'free icecream', style: { backgroundColor: '#E6F3FA', textColor: '#222222' } },
    { option: 'clean-up coupon', style: { backgroundColor: '#E7FAE6', textColor: '#222222' } },
    { option: 'wish coupon', style: { backgroundColor: '#FAF8E6', textColor: '#222222' } }
];
const cost = 2; //demo value
const rows=[
    // {date:'2021.05.24', value:'wish coupon'}
];
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 25
    },
    wheel: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        overflow: 'hidden'
    },
    Block: {
        marginBottom: '10%'
    },
    SpinButton:{
        display: 'inline',
        marginLeft: '5%'
    },
    SpinText: {
        display: 'inline'
    }

}));
export default function Roulette(props) {
    const [mustSpin, setMustSpin] = React.useState(false);
    const [prizeNumber, setPrizeNumber] = React.useState(0);
    const [listData, setListData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const callbackFunction = props.callbackFromParent;
    const userRef= firebase.database();

    React.useEffect(()=>{
        userRef.ref('/Guests/'+props.guestname+'/coupons').on('value',snapshot =>{
            var data= snapshot.val();
            var temp=listData;
            for(let coupon in data){
                temp.push({date:data[coupon].date,desc:data[coupon].desc})
            }
            setListData(temp)
        })
    }, [])

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
        callbackFunction(cost);
    }
    const theme = createMuiTheme({
        typography :{
            fontFamily:"Poppins",
            fontSize: 18,
            fontWeight:300,
            color: "#222222"
        },
        palette :{
            primary: {
                main: "#A9A9FF"
            }
        }
    });
    const addValueToList= (value)=>{
        const dateNow = new Date();
        const dateString = `${dateNow.getFullYear()}.${dateNow.getMonth()+1}.${dateNow.getDate()}`;
        let copyList = [...listData];
        copyList.unshift({date: dateString, desc: value});
        userRef.ref('/Guests/'+props.guestname).update({coupons: copyList});
        setListData(copyList);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(props.dataFromParent)
    return(
        <ThemeProvider theme={theme}>
        <div className="container" className={classes.root}>
            <div className="row">
                <div className="col-md-6">
                    <div className={classes.wheel}>
                    <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    radiusLineWidth='0'
                    radiusLineColor='#222222'
                    outerBorderWidth='1'
                    outerBorderColor='#222222'
                    fontSize= '16'
                    onStopSpinning={() => {
                        setMustSpin(false)
                        addValueToList(data[prizeNumber].option)
                        handleOpen()
                    }}
                    />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.Block}>
                        <Typography className={classes.SpinText}>Use {cost} X Coins to play roulette.
                        You have {props.dataFromParent} coins.
                        </Typography>
                        <Button onClick={handleSpinClick} variant="outlined" color="primary" className={classes.SpinButton}>SPIN</Button>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Prize</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listData.map((row)=>(
                                    <TableRow key={row.date+row.desc+String(Math.floor(Math.random()*1000))}>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.desc}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
            <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth={true}>
                <DialogTitle>You won {data[prizeNumber].option}!</DialogTitle>
                <Divider />
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}