import React, {useState, useEffect, Component} from 'react';
import OpenPartyGuests from './OpenPartyGuests';
import OpenPartyInfo from './OpenPartyInfo';
import OpenPartyNotices from './OpenPartyNotices'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { FormatAlignCenter } from '@material-ui/icons';
import firebase from './Firebase'
import Header from './header';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
  }))(Button);

const PageOpen = () => {
    const [info,setInfo] = useState({}); 
    //should be form of {name: 'HBD Sehoon',location:'busan',memo:'blah',dateTime:'2021-11-06T19:00', notices:{0:"don't sleep"}}
    const userRef=firebase.database()
    const sendInvitation = () => {
        userRef.ref('/Parties/'+info.name).set(info)
        // console.log(info)
    }
    return(
        <div style={{marginBottom:100}}>
            <Header></Header>
            <br/>
            <OpenPartyInfo info={info} setInfo={setInfo} />
            <OpenPartyNotices info={info} setInfo={setInfo} />
            <OpenPartyGuests info={info} setInfo={setInfo} name={info.name}/>
            <div className='row' style={{width:'100%'}}>
                <div className='col-11'/>
                <div className='col-1'>
                    <ColorButton variant="contained" color="primary" onClick={sendInvitation} >
                        <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF'}}/>
                    </ColorButton>
                </div>
            </div>
        </div>
    )
}

export default PageOpen;