import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { makeStyles} from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Divider, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, DialogTitle, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase'
import Auth from './Auth';

// const data = [
//     { option: 'free Dinner', style: { backgroundColor: '#E6E6FA', textColor: '#222222'} },
//     { option: 'nothing', style: { backgroundColor: '#F3F3FD', textColor: '#222222' } },
//     { option: 'free icecream', style: { backgroundColor: '#ffffff', textColor: '#222222' } },
//     { option: 'clean-up coupon', style: { backgroundColor: '#e6e6fa', textColor: '#222222' } },
//     { option: 'wish coupon', style: { backgroundColor: '#F3F3FD', textColor: '#222222' } },
//     { option: 'test1', style: { backgroundColor: '#ffffff', textColor: '#222222' } },
//     { option: 'test2', style: { backgroundColor: '#e6e6fa', textColor: '#222222' } },
//     { option: 'test3', style: { backgroundColor: '#F3F3FD', textColor: '#222222' } },
//     { option: 'test4', style: { backgroundColor: '#ffffff', textColor: '#222222' } },
//     { option: 'test4', style: { backgroundColor: '#F3F3FD', textColor: '#222222' } }
// ];
// const cost = 2; //demo value

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4%'
    },
    wheel: {
        margin: 'auto',
        maxWidth: '445px',
        minWidth: '445px',
        minHeight: '445px',
        maxHeight: '445px',
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
    },
    divWheel: {
        minWidth: '445px',
        maxWidth: '45%',
        minHeight: '445px',
        maxHeight: '445px',
        margin: '2%',
        overflow: 'hidden'
    },
    divList: {
        minWidth: '445px',
        maxWidth: '45%',
        margin: '2%',
    },
    divTable: {
        minHeight: '380px',
        maxHeight: '380px',
        overflow: 'hidden scroll',
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

    const [cost,setCost] = React.useState(0)
    const [data,setData] = React.useState([{option: null}])

    const roulette_colorSet=['#ffffff','#F3F3FD','#e6e6fa']

    React.useEffect(()=>{
        userRef.ref(Auth.getAuth()+'/Guests/'+props.guestname+'/coupons').on('value',snapshot =>{
            var data= snapshot.val();
            var temp=listData;
            for(let coupon in data){
                temp.push({date:data[coupon].date,desc:data[coupon].desc})
            }
            setListData(temp)
        })
        userRef.ref(Auth.getAuth()).on('value',snapshot => {
            setCost(snapshot.val().cost)
            const prizes = snapshot.val().prizes
            var temp =[];
            var count=0;
            for(let temp in prizes){
                count=count+1;
            }
            for(let prize in prizes){
                var format={};
                format['option']=prizes[prize]
                format['style']={}
                format['style']['backgroundColor']=roulette_colorSet[count%3]
                format['style']['textColor']='#222222'
                count=count-1;
                temp.push(format)
            }
            setData(temp)
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
            },
            secondary:{
                main: "#ABABAB"
            }
        }
    });
    const addValueToList= (value)=>{
        const dateNow = new Date();
        const dateString = `${dateNow.getFullYear()}.${dateNow.getMonth()+1}.${dateNow.getDate()}`;
        let copyList = [...listData];
        copyList.unshift({date: dateString, desc: value});
        userRef.ref(Auth.getAuth()+'/Guests/'+props.guestname).update({coupons: copyList});
        setListData(copyList);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSpin = () => {
        if (props.dataFromParent<cost || mustSpin===true){
            return(<Button variant="outlined" color="secondary" disabled className={classes.SpinButton}>SPIN</Button>)
        }else{
            return(<Button onClick={handleSpinClick} variant="outlined" color="primary" className={classes.SpinButton}>SPIN</Button>)
        }
    }

    const showSpin =() => {
        if(data[0].option!=null){
            return(
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
                />)}
        else{
            return null;
        }
    }

    return(
        <ThemeProvider theme={theme}>
        <div className="container" className={classes.root}>
            <div className="row">
                <div className="col-md-6" className={classes.divWheel}>
                    <div className={classes.wheel}>
                    {showSpin()}
                    </div>
                </div>
                <div className="col-md-6" className={classes.divList}>
                    <div className={classes.Block}>
                        <Typography className={classes.SpinText}>Use {cost} X Petals to play roulette.
                        You have {props.dataFromParent} petals.
                        </Typography>
                        {handleSpin()}
                    </div>
                    <TableContainer className={classes.divTable} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Prize</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
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