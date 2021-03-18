import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import BatteriesList from '../../../components/BatteriesList';
import {Button} from 'semantic-ui-react';
import { Router } from '../../../routes';

export default class batteriesInfo extends Component{

    static async getInitialProps(props) {
        const {id} = props.query; 
        const StationBatteries = await battery.methods.getBatteriesFromStation(id).call();
        const BattStaticInfo = await Promise.all(
            Array(parseInt(StationBatteries.length))
                .fill()
                .map((el,index)=>{return battery.methods.batteriesStaticInfo(StationBatteries[index]).call();})
        )
        const BattDynamicInfo = await Promise.all(
            Array(parseInt(StationBatteries.length))
                .fill()
                .map((el,index)=>{return battery.methods.batteriesDynamicInfo(StationBatteries[index]).call();})
        )
        let BattInfo = [];
        for(var i=0;i<StationBatteries.length;i++){
            BattInfo[i] = {...BattStaticInfo[i],...BattDynamicInfo[i]};
        }
        return {BattInfo,id};
    }

  
    render(){
        console.log(this.props.id);
        console.log(this.props.BattInfo);
        return(
            <Layout>
 
                    <Button
                        basic 
                        color='blue' 
                        floated='left'
                        style={{marginBottom:'1rem'}}
                        onClick={(e=>{Router.pushRoute('/accounts/administrator')})}>Back
                    </Button>
                <BatteriesList BattInfo={this.props.BattInfo} />
            </Layout>
        );
    }
}