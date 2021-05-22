import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const styles = {
    textField: {
    fontSize: 50, //works!
 }
}
var location_default = "52, Rose street, Daejeon"


class OpenPartyInfo extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return  (
        <div>
          <h1
            style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF'}}
            ><b>Open Party</b></h1>
            <h2
            style={{ fontFamily: 'Poppins', marginBottom: 40, color:'#A9A9FF', fontSize: 14}}
            >Fill in the information to open your party.</h2>

            <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Basic Information</b></h2>
            

          <form noValidate>
            <TextField className="custom-input"
              id="standard-basic"
              label="Party Name"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              placeholder="My Party Name"
              //helperText="Full width!"
              fullWidth
              
              //size='large'
              margin="normal"
              inputProps={{style: {fontSize: 18,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              color="#D6D6FF"
              
              inputStyle={styles.textField}
            />
            <TextField
              id="datetime-local"
              label="Date Time"
              type="datetime-local"
              defaultValue="2021-01-01T00:00"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              inputProps={{style: {fontSize: 15,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
            />

              <div class="container">
                  <div class="row">
                      <div class="col-md-2">
                      <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Year
                            </InputLabel>
                            <NativeSelect
                              defaultValue={2021}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>

                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                              <option value={2016}>2016</option>
                              <option value={2017}>2017</option>
                              <option value={2018}>2018</option>
                              <option value={2019}>2019</option>
                              <option value={2020}>2020</option>

                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>

                              
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-2">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Month
                            </InputLabel>
                            <NativeSelect
                              defaultValue={1}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={1}>01 January</option>
                              <option value={2}>02 February</option>
                              <option value={3}>03 March</option>
                              <option value={4}>04 April</option>
                              <option value={5}>05 May</option>
                              <option value={6}>06 June</option>
                              <option value={7}>07 July</option>
                              <option value={8}>08 August</option>
                              <option value={9}>09 September</option>
                              <option value={10}>10 October</option>
                              <option value={11}>11 November</option>
                              <option value={12}>12 December</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-2">
                      <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Day
                            </InputLabel>
                            <NativeSelect
                              defaultValue={1}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={1}>01 </option>
                              <option value={2}>02 </option>
                              <option value={3}>03 </option>
                              <option value={4}>04 </option>
                              <option value={5}>05 </option>
                              <option value={6}>06 </option>
                              <option value={7}>07 </option>
                              <option value={8}>08 </option>
                              <option value={9}>09 </option>
                              <option value={10}>10 </option>
                              <option value={11}>11 </option>
                              <option value={12}>12 </option>
                              <option value={13}>13 </option>
                              <option value={14}>14 </option>
                              <option value={15}>15 </option>
                              <option value={16}>16 </option>
                              <option value={17}>17 </option>
                              <option value={18}>18 </option>
                              <option value={19}>19 </option>
                              <option value={20}>20 </option>
                              <option value={21}>21 </option>
                              <option value={22}>22 </option>
                              <option value={23}>23 </option>
                              <option value={24}>24 </option>
                              <option value={25}>25 </option>
                              <option value={26}>26 </option>
                              <option value={27}>27 </option>
                              <option value={28}>28 </option>
                              <option value={29}>29 </option>
                              <option value={30}>30 </option>
                              <option value={31}>31 </option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-2">
                      <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              AM/PM
                            </InputLabel>
                            <NativeSelect
                              defaultValue={'PM'}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'AM'}>AM</option>
                              <option value={'PM'}>PM</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-2">
                      <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Hour
                            </InputLabel>
                            <NativeSelect
                              defaultValue={0}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={0}>00 :</option>
                              <option value={1}>01 :</option>
                              <option value={2}>02 :</option>
                              <option value={3}>03 :</option>
                              <option value={4}>04 :</option>
                              <option value={5}>05 :</option>
                              <option value={6}>06 :</option>
                              <option value={7}>07 :</option>
                              <option value={8}>08 :</option>
                              <option value={9}>09 :</option>
                              <option value={10}>10 :</option>
                              <option value={11}>11 :</option>
                              <option value={12}>12 :</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-2">
                      <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Minute
                            </InputLabel>
                            <NativeSelect
                              defaultValue={0}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={0}>00</option>
                              <option value={5}>05</option>
                              <option value={10}>10</option>
                              <option value={15}>15</option>
                              <option value={20}>20</option>
                              <option value={25}>25</option>
                              <option value={30}>30</option>
                              <option value={35}>35</option>
                              <option value={40}>40</option>
                              <option value={45}>45</option>
                              <option value={50}>50</option>
                              <option value={55}>55</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </div>
                  </div>
              </div>

              <div class="container">
                <div class="row">
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Year
                            </InputLabel>
                            <NativeSelect
                              defaultValue={2021}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>

                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                              <option value={2016}>2016</option>
                              <option value={2017}>2017</option>
                              <option value={2018}>2018</option>
                              <option value={2019}>2019</option>
                              <option value={2020}>2020</option>

                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>

                              
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Month
                            </InputLabel>
                            <NativeSelect
                              defaultValue={1}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={1}>01 January</option>
                              <option value={2}>02 February</option>
                              <option value={3}>03 March</option>
                              <option value={4}>04 April</option>
                              <option value={5}>05 May</option>
                              <option value={6}>06 June</option>
                              <option value={7}>07 July</option>
                              <option value={8}>08 August</option>
                              <option value={9}>09 September</option>
                              <option value={10}>10 October</option>
                              <option value={11}>11 November</option>
                              <option value={12}>12 December</option>
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Day
                            </InputLabel>
                            <NativeSelect
                              defaultValue={1}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={1}>01 </option>
                              <option value={2}>02 </option>
                              <option value={3}>03 </option>
                              <option value={4}>04 </option>
                              <option value={5}>05 </option>
                              <option value={6}>06 </option>
                              <option value={7}>07 </option>
                              <option value={8}>08 </option>
                              <option value={9}>09 </option>
                              <option value={10}>10 </option>
                              <option value={11}>11 </option>
                              <option value={12}>12 </option>
                              <option value={13}>13 </option>
                              <option value={14}>14 </option>
                              <option value={15}>15 </option>
                              <option value={16}>16 </option>
                              <option value={17}>17 </option>
                              <option value={18}>18 </option>
                              <option value={19}>19 </option>
                              <option value={20}>20 </option>
                              <option value={21}>21 </option>
                              <option value={22}>22 </option>
                              <option value={23}>23 </option>
                              <option value={24}>24 </option>
                              <option value={25}>25 </option>
                              <option value={26}>26 </option>
                              <option value={27}>27 </option>
                              <option value={28}>28 </option>
                              <option value={29}>29 </option>
                              <option value={30}>30 </option>
                              <option value={31}>31 </option>
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                </div>
                <div class="row">
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              AM/PM
                            </InputLabel>
                            <NativeSelect
                              defaultValue={'PM'}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'AM'}>AM</option>
                              <option value={'PM'}>PM</option>
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Hour
                            </InputLabel>
                            <NativeSelect
                              defaultValue={0}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={0}>00 :</option>
                              <option value={1}>01 :</option>
                              <option value={2}>02 :</option>
                              <option value={3}>03 :</option>
                              <option value={4}>04 :</option>
                              <option value={5}>05 :</option>
                              <option value={6}>06 :</option>
                              <option value={7}>07 :</option>
                              <option value={8}>08 :</option>
                              <option value={9}>09 :</option>
                              <option value={10}>10 :</option>
                              <option value={11}>11 :</option>
                              <option value={12}>12 :</option>
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                    <div class="col-md-4"><Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:16 }} variant="standard" htmlFor="uncontrolled-native">
                              Minute
                            </InputLabel>
                            <NativeSelect
                              defaultValue={0}
                              style={{ fontFamily: 'Poppins', marginBottom: 15, fontSize:15 }} 
                              inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={0}>00</option>
                              <option value={5}>05</option>
                              <option value={10}>10</option>
                              <option value={15}>15</option>
                              <option value={20}>20</option>
                              <option value={25}>25</option>
                              <option value={30}>30</option>
                              <option value={35}>35</option>
                              <option value={40}>40</option>
                              <option value={45}>45</option>
                              <option value={50}>50</option>
                              <option value={55}>55</option>
                            </NativeSelect>
                          </FormControl>
                        </Box></div>
                </div>
              </div>
            <TextField className="custom-input"
              id="standard-basic"
              label="Location"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              placeholder= {location_default}
              fullWidth
              
              margin="normal"
              inputProps={{style: {fontSize: 18,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            <TextField className="custom-input"
              id="standard-basic"
              label="Memo"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 35}}
              placeholder="Dresscode, menu, etc"
              fullWidth
              margin="normal"
              inputProps={{style: {fontSize: 18,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            
          </form>
          
            
        </div>
      );
    }
  }

  export default OpenPartyInfo