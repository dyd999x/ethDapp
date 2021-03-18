import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import BatteriesList from '../../../components/BatteriesList';
import {Button} from 'semantic-ui-react';
import { Router } from '../../../routes';

export default class showBatteries extends Component{

    static async getInitialProps(props) {
        const {address} = props.query; 
        const myStationID = await battery.methods.opToStation(address).call();
        const myStationBatteries = await battery.methods.getBatteriesFromStation(myStationID).call();
        const BattStaticInfo = await Promise.all(
            Array(parseInt(myStationBatteries.length))
                .fill()
                .map((el,index)=>{return battery.methods.batteriesStaticInfo(myStationBatteries[index]).call();})
        )
        const BattDynamicInfo = await Promise.all(
            Array(parseInt(myStationBatteries.length))
                .fill()
                .map((el,index)=>{return battery.methods.batteriesDynamicInfo(myStationBatteries[index]).call();})
        )
        let BattInfo = [];
        for(var i=0;i<myStationBatteries.length;i++){
            BattInfo[i] = {...BattStaticInfo[i],...BattDynamicInfo[i]};
        }
        return {address,myStationBatteries,BattStaticInfo,BattDynamicInfo,BattInfo};
    }


    render(){
        return(
            <Layout>
                <Button 
                basic 
                color='blue' 
               
                onClick={(e=>{Router.pushRoute(`/accounts/stationOperator/${this.props.address}`)})}>Back</Button>
                <Button 
                basic 
                color='blue' 
                onClick={(e=>{Router.pushRoute(`/accounts/stationOperator/${this.props.address}/addBattery`)})}>Add Battery</Button>
                <BatteriesList BattInfo={this.props.BattInfo} />
            </Layout>
        );
    }
}