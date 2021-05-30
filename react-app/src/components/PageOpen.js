import React, {useState, useEffect, Component} from 'react';
import OpenPartyGuests from './OpenPartyGuests';
import OpenPartyInfo from './OpenPartyInfo';
import OpenPartyNotices from './OpenPartyNotices'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import firebase from './Firebase'

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
    var location_default

    //const location_default
    React.useEffect(()=>{
    userRef.ref('/Mypage/location').on('value',(snapshot) => {

        location_default = snapshot.val();
        //console.log(location_snapshot)
        // for(let location in location_snapshot) {
        //     console.log(location_snapshot, 'location')
        // location_default=location
        // }
    })
    },[])

    const sendInvitation = () => {
        var temp = info
        console.log('send button')
        console.log(temp.name)



        if (temp.location==""){
            console.log(location_default)
            info.location=location_default
            console.log(info)
        }
        if (temp.name==""){
            alert('You need to add your party name')
        }
        else{
            userRef.ref('/Parties/'+info.name).set(info)
        }
        
       
        // console.log(info)
    }
    return(
        <div style={{marginBottom:100}}>
            <OpenPartyInfo info={info} setInfo={setInfo} />
            <OpenPartyNotices info={info} setInfo={setInfo} />
            <OpenPartyGuests info={info} setInfo={setInfo} name={info.name}/>
            <div className='row' style={{width:'100%'}}>
                <div className='col-11'/>
                <div className='col-1'>
                    <ColorButton variant="contained" color="primary" onClick={sendInvitation} >
                        <SendOutlinedIcon style={{color:'#A9A9FF'}}/>
                    </ColorButton>
                </div>
            </div>
        </div>
    )
}

export default PageOpen;