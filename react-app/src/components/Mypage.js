
import React, { Component } from 'react';
import {TextField, List} from "@material-ui/core";
import firebase from "./Firebase"

const styles = {
    textField: {
    fontSize: 50, //works!
 }
}

var init_location = ""
var init_notice = [""]
var init_wishlist = [""]

export const Mypage = () => {
  React.useEffect(()=>{
    firebase.database().ref('/Mypage/location').on('value',(snapshot) => {
      
    })
    firebase.database().ref('/Mypage/notices').once('value').then((snapshot)=>{
      for(let obj in snapshot.val()){
        var onerow = String(snapshot.val()[obj]);
        // if(onerow!==null){
        //   init_notice.push(onerow)
        // }  
        init_notice[init_notice.length-1]=onerow
        init_notice.push("")
      }
    })
  },[])
  console.log(init_location)

  const [notice, setNotice] = React.useState(init_notice);
  const handleNotice = (event) => {
    const inputText = event.target.value.trim();
    let copyList = [...notice];
    if (inputText.length>0){
      copyList[parseInt(event.target.name)]=inputText;
      if (copyList[copyList.length-1]!==""){
        copyList.push("");
      }
      setNotice(copyList);
    }else if (inputText.length===0){
      copyList.splice(parseInt(event.target.name), 1);
      setNotice(copyList);
      const idx = event.target.name
      firebase.database().ref('Mypage/notices'+idx).set
    }
  }
  const onblurnotice = (event) => {
    const idx = event.target.name
    const inputText = event.target.value.trim();
    firebase.database().ref('/Mypage/notices').update({[idx] : inputText})
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

  const onblurLocation = (event) => {
    const inputText = event.target.value.trim();
    firebase.database().ref('/Mypage/').update({
      location: inputText
    })
  }
    return  (
      <div>
          <h2 style={{ margin: 8 ,fontFamily: 'Poppins', color:"#A9A9FF", marginBottom: 30}}>Fill in the blocks to set default of party.</h2>
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
              onBlur={onblurnotice}
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
            defaultValue = {init_location}
            onBlur={onblurLocation}
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
              placeholder="Wishlist"
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