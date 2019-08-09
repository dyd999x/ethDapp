import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import MyBattery from '../../../components/MyBattery';

class UserIndex extends Component{

    static async getInitialProps(props) {
        const {address} = props.query;
        const myBatteryID = await battery.methods.owners(address).call();
        const myBatteryStatic = await battery.methods.batteriesStaticInfo(myBatteryID).call();
        const myBatteryDynamic = await battery.methods.batteriesDynamicInfo(myBatteryID).call();
        let stationIDS = await battery.methods.getStationIDs().call();
        //stationIDS.reverse();
        let myRequestsIDS = await battery.methods.getMyRequests(address).call();
        myRequestsIDS.reverse();
        let requestDetails = await Promise.all(
            Array(parseInt(myRequestsIDS.length)).
            fill().map((el,index)=>{return battery.methods.requests(myRequestsIDS[index]).call();})
        );
        for(var i=0;i<myRequestsIDS.length;i++){
            requestDetails[i] = {...requestDetails[i],...myRequestsIDS[i]};
        }
        const len = stationIDS.length;
        const stationDetails = await Promise.all(
            Array(parseInt(len)).
            fill().map((el,index)=>{return battery.methods.stationDetails(index).call();})
        );
        const batteriesPerStation = await Promise.all(
            Array(parseInt(len))
                .fill()
                .map((el,index)=>{return battery.methods.getBatteriesFromStation(stationIDS[index]).call(); })
        );
        let empty =false;
        if(myBatteryID==0){
            empty = true;
        }
        const myBattInfo = {...myBatteryStatic,...myBatteryDynamic};
        return {stationIDS,stationDetails,batteriesPerStation,address,myBattInfo,requestDetails,empty};
    }

    render(){
        let nrOfBatteries=[];
        for(var i=0;i<this.props.batteriesPerStation.length;i++){
            nrOfBatteries.push(this.props.batteriesPerStation[i].length);
        }
        console.log(this.props.batteriesPerStation,nrOfBatteries);
        return(
            
            <Layout>
                 <h3 style={{marginTop: '0.5rem'}} >
                    Welcome
                </h3>
                <MyBattery info={this.props.myBattInfo} address={this.props.address} 
                    admin={false}
                    user={true}
                    stationIDS={this.props.stationIDS}
                    stationDetails={this.props.stationDetails}
                    batteriesPerStation={this.props.batteriesPerStation}
                    nrOfBatteries={nrOfBatteries}
                    requestDetails={this.props.requestDetails}
                    empty={this.props.empty}
                    />
               
            </Layout>
        );
    }
}

export default UserIndex;