import React from 'react';
import SelectGuestDialog from './SelectGuestDialog';
import {Single_guest} from './Single_guest';

class OpenPartyGuests extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            objectData: {},
            listData: []
        }
    }
    
    parentCallback = (dataFromChild) => {
        let data = [];
        for (let i in dataFromChild){
            data.push(i);
        }
        this.setState({
            objectData: dataFromChild,
            listData: data
        })
    }

    dataSorting = () => {
        let resultData = [];
        for (let i=0;i<this.state.listData.length;i++){
            resultData.push({
                key: this.state.listData[i],
                label: this.state.listData[i]
            })
        }
        return resultData;
    }

    render(){
        const setInfo = this.props.setInfo;
        
        const fillGuests = (data) => {
            let info = this.props.info;
            if (data.length!==0 && this.state.listData.length!==0){
                let guests = {};
                for (let i in data){
                    guests[i] = false;
                };
                info['guests'] = guests;
                setInfo(info);
                return this.state.listData.map((guest)=>(
                    <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={guest}>
                        <Single_guest num={data[guest].blob_num} fill={data[guest].blob_fill} key={guest} name={guest} showCoin={false} coins={data[guest].coins}/>
                    </div>
                ))
            }
        }

        return(
            <div >
                <h2
                style={{fontFamily: 'Poppins', fontSize: 16, color:'#222222', marginTop:25}}
                ><b>Guests</b></h2>
                
                <div className="container" style={{borderBottom: '1px solid #EAEAEA', marginBottom:35} }>
                    <div className="row">
                        <div align='center' style={{paddingTop:'2%', paddingBottom:'2%'}} className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={0}>
                            <SelectGuestDialog dataFromParent={this.dataSorting()} callbackFromParent={this.parentCallback}/>
                        </div>
                        {fillGuests(this.state.objectData)}
                    </div>
                </div>
            </div>

        )
    }
}

export default OpenPartyGuests