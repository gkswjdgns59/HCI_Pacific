import React, {Component} from 'react';
import OpenPartyGuests from './OpenPartyGuests';
import OpenPartyInfo from './OpenPartyInfo';
import OpenPartyNotices from './OpenPartyNotices'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { FormatAlignCenter } from '@material-ui/icons';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
  }))(Button);

export default class OpenNewParty extends Component{
    render(){
        return(
            <div style={{marginBottom:100}}>
                <OpenPartyInfo/>
                <OpenPartyNotices/>
                <OpenPartyGuests/>
                <div className='row' style={{width:'100%'}}>
                    <div className='col-11'/>
                    <div className='col-1'>
                        <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >
                            <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF'}}/>
                        </ColorButton>
                    </div>
                </div>
            </div>
        )
    }
}