import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import Stations from '../../../components/Stations';
import MyStation from '../../../components/MyStation';


class SOIndex extends Component{


    static async getInitialProps(props) {
        const {address} = props.query; 
        const stationIDS = await battery.methods.getStationIDs().call();
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
        const operators = await Promise.all(
            Array(parseInt(len)).fill().map((el,index)=>{return battery.methods.employeeList(stationIDS[index]).call(); })
        )
        const myStationID = await battery.methods.opToStation(address).call();
        const myStationBatteries = await battery.methods.getBatteriesFromStation(myStationID).call();
        let myStationDetails;
        for(var i=0 ;i<stationDetails.length;i++){
            if(stationDetails[i].id == myStationID){
                myStationDetails = stationDetails[i];
                break;
            }
        }
        return {stationIDS,stationDetails,batteriesPerStation,operators,myStationDetails,address,myStationBatteries};
    }   

    render(){
       
        let nrOfBatteries=[];
        for(var i=0;i<this.props.batteriesPerStation.length;i++){
            nrOfBatteries.push(this.props.batteriesPerStation[i].length);
        }
        console.log(this.props.batteriesPerStation,nrOfBatteries);
        return(
            <Layout >
                 <MyStation 
                    address={this.props.address}
                    myStationDetails={this.props.myStationDetails}
                    myStationBatteries={this.props.myStationBatteries}
                />
                <h3 style={{marginTop: '0.5rem'}} >
                    All Stations
                </h3>
               
                <Stations
                    address={this.props.address}  
                    admin={false}
                    user={false}
                    stationIDS={this.props.stationIDS}
                    stationDetails={this.props.stationDetails}
                    batteriesPerStation={this.props.batteriesPerStation}
                    nrOfBatteries={nrOfBatteries} />

            </Layout>
        );
    }
}
export default SOIndex;