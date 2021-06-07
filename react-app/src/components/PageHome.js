import React, { Component } from 'react';
import HomeHeader from "./HomeHeader";
import Header from "./Header";
import Auth from './Auth';
import dummy from '../images/dummy.png'

export default class PageParties extends Component{
    isAuth = () => {
        if (Auth.auth!==''){
            // console.log(Auth.auth)
            return (<Header></Header>)
        }else{
            return (<HomeHeader></HomeHeader>)
        }
    }

    render(){
        window.scrollTo(0, 0)
        return(
            <div>
                {this.isAuth()}
                <div style={{marginTop:'8%'}}>
                    <img src={dummy} width='300' height='423.81' style={{margin: '4% auto', display: 'block'}}/>
                </div>
                <div style={{textAlign:'center', width:'50%', margin:'auto'}}>
                    <p style={{
                        fontFamily:'Poppins',
                        fontWeight:300,
                        fontSize:15
                        }}><emph style={{fontWeight:500}}>Aster</emph> met off campus home loner who holds the home party. <emph style={{fontWeight:500}}>Aster</emph> is amazed to realize that he/she quite often feels burdened to talk about subtle upset, regarding home party. So, it’d be game-changing for <emph style={{fontWeight:500}}>Aster</emph> to convey messages (home party manner), preventing conflicts in human relationship.
                        </p>
                </div>
            </div>
        )
    }
}