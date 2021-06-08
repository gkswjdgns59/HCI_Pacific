import React from 'react'
import {TextField, List, Input, Box, Button, Typography} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase.js'
import Auth from './Auth';


const theme = createMuiTheme({
  typography :{
      fontFamily:"Poppins",
      fontSize: 16,
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
  },
  status: {
        use: '#A9A9FF',
        fontSize: 200
      },
})

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'primary',
    '&$checked': {
      color: 'primary',
      fontSize: 14
    },
    fontSize: 14
  },
}));



const OpenPartyNotices = ({info,setInfo, partyname}) => {
    const [data,setData] = React.useState({})
    const userRef=firebase.database();
    const classes = useStyles();

    React.useEffect(() => {
      userRef.ref(Auth.getAuth()+'/Parties/'+partyname+'/notices').on('value', snapshot=>{
        var res=snapshot.val();
        var temp={}
        var last=-1;
        for(let key in res){
          var temp_form={}
          temp_form['name']=res[key];
          temp_form['key']=key
          temp[key]=temp_form
          last=key;
        }
        var temp_data={}
        temp_data['name']=''
        temp_data['key']=parseInt(last)+1
        temp[parseInt(last)+1]=temp_data
        setData(temp)
        var temp_info=info;
        temp_info['notices']=snapshot.val()
        setInfo(temp_info)
      })
      
    },[])

    const onFilledChange = (event, key) => {
        var temp={};
        var temp_info=info
        var last;
        last=-1;
        for(let notice in data){
            temp[notice]=data[notice]
            if(notice==key){
                temp[notice].name=event.target.value
            }
            last=notice;
        }
        console.log(data)
        if(temp[last].name!=''){
            var temp_data={}
            temp_data['name']=''
            temp_data['key']=parseInt(last)+1
            temp[parseInt(last)+1]=temp_data
        }
        setData(temp)
        last=0;
        var info_data={};
        for(let key in data){
          last=key;
        }
        for(let key in data){
          if(key!=last)
            info_data[key]=data[key].name
        }
        temp_info['notices']=info_data;
        setInfo(temp_info)
    }

    const onFilledBlur = (event,key) => {
        var cnt=0;
        var last;
        for(let obj in data){
            cnt=cnt+1;
        }
        if(event.target.value==='' && cnt>1){
            var temp={}
            for(let notice in data){
                if(notice==key){
                    continue
                }
                else{
                    temp[notice]=data[notice]
                    last=notice;
                }
            }
            if(temp[last].name!=''){
                var temp_data={}
                temp_data['name']=''
                temp_data['key']=parseInt(last)+1
                temp[parseInt(last)+1]=temp_data
            }
            setData(temp)
            last=0;
            var temp_info=info
            var info_data={};
            for(let key in temp){
              last=key;
            }
            for(let key in temp){
              if(key!=last)
                info_data[key]=data[key].name
            }
            temp_info['notices']=info_data;
            setInfo(temp_info)
        }
    }

    const filled_input_helper = (notice) => {
        return(
            <ThemeProvider theme={theme}>
              <Input 
              placeholder='Type in your Notices and Wishes'
              value={notice.name}
              fullWidth
              style={{ margin: 8, fontFamily: 'Poppins'}}
              onChange = {event => onFilledChange(event,notice.key)}
              onBlur = {event => onFilledBlur(event,notice.key)}
              className={classes.root}
              />
            </ThemeProvider>
        )
    }

    const filled_input = () => {
        var res = [];
        for(let notice in data){
            res.push(filled_input_helper(data[notice]))
        }
        return res;
    }
    return (
        <ThemeProvider theme={theme}>
          <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Notices and Wishes</b>
          </h2>
          <div style={{paddingLeft:15, paddingRight:15}}>
              {filled_input()}
          </div>
        </ThemeProvider>
    )
}

export default OpenPartyNotices