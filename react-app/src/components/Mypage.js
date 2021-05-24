import React, { Component } from 'react';
import {TextField, List} from "@material-ui/core";
import firebase from "./Firebase"

const styles = {
    textField: {
    fontSize: 50, //works!
 }
}



const init_notice = [""]
const init_wishlist = [""]

export default function Mypage() {
    const [notice, setNotice] = React.useState(init_notice);
    const onNoticeChange = (value) => {
      console.log(value);
      setNotice(value);
    }
    const handleNotice = (event) => {
      const inputText = event.target.value.trim();
      const copyList = [...notice];
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        onNoticeChange(copyList);
      }else if (inputText.length===0){
        // console.log(parseInt(event.target.name));
        // console.log(copyList);
        copyList.splice(parseInt(event.target.name), 1);
        // console.log(copyList);
        onNoticeChange(copyList);
      }
    }
    const onblurnotice = (event) => {
      console.log("focus out")
      const copyList = [...notice];
      setNotice(copyList);
    }

    const [wishlist, setWishlist] = React.useState(init_wishlist);
    const onWishlistChange = (value) => {
      setWishlist(value);
    }
    const handleWishlist = (event) => {
      const inputText = event.target.value.trim();
      const copyList = [...wishlist];
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        onWishlistChange(copyList);
      }
    }


      return  (
        <div>
            <h2 style={{ margin: 8 ,fontFamily: 'Poppins', marginBottom: 30}}>Fill in the blocks to set default of party.</h2>
            <form noValidate>
            <h4 style={{ margin: 8 ,fontFamily: 'Poppins'}}>Notice.</h4>
            <List>
              {notice.map((guest, index)=>(
                <TextField className="custom-input"
                id="standard-basic"
                name={String(index)}
                style={{ margin: 8, fontFamily: 'Poppins'}}
                placeholder="Notice"
                defaultValue={guest}
                fullWidth
                size='large'
                margin="normal"
                onChange={handleNotice}
                // onBlur={onblurnotice}
                inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
                InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
                color="#D6D6FF"
                inputStyle={styles.textField}
              />
              ))}
            </List>
            <h4 style={{ margin: 8 ,fontFamily: 'Poppins'}}>Location.</h4>
            <TextField className="custom-input"
              id="standard-basic"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              placeholder= "location_default"
              fullWidth
              margin="normal"
              inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 14, fontFamily: 'Poppins' }, shrink: true, }}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            <h4 style={{ margin: 8 ,fontFamily: 'Poppins'}}>Wish List.</h4>
            <List>
              {wishlist.map((guest, index)=>(
                <TextField className="custom-input"
                id="standard-basic"
                name={String(index)}
                style={{ margin: 8, fontFamily: 'Poppins'}}
                placeholder="Not-To-dos"
                defaultValue={guest}
                fullWidth
                size='large'
                margin="normal"
                onChange={handleWishlist}
                inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
                InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
                color="#D6D6FF"
                inputStyle={styles.textField}
              />
              ))}
            </List>          
          </form>
        </div>
      );
  }
