import React from 'react'
import {TextField, List, Input, Box, Button, Typography} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


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



const Texttest = () => {
    const [data,setData] = React.useState({0:{name: 'Test 1', key: 0},1:{name:'Test 2', key:1},2:{name:'',key:2}})

    const classes = useStyles();
    const onFilledChange = (event, key) => {
        var temp={};
        var last;
        for(let notice in data){
            temp[notice]=data[notice]
            if(notice==key){
                temp[notice].name=event.target.value
            }
            last=notice;
        }
        if(temp[last].name!=''){
            var temp_data={}
            temp_data['name']=''
            temp_data['key']=last+1
            temp[last+1]=temp_data
        }
        setData(temp)
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
                temp_data['key']=last+1
                temp[last+1]=temp_data
            }
            setData(temp)
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
        <div>
            {filled_input()}
        </div>
    )
}

export default Texttest