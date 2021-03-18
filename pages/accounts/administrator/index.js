import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import Stations from '../../../components/Stations';
import battery from '../../../ethereum/battery';
import {Container,Button,Segment,Header} from 'semantic-ui-react';
import {Link} from '../../../routes';
import NoStations from '../../../components/NoStations';

class AdminIndex extends Component{

    static async getInitialProps() {
        const stationIDS = await battery.methods.getStationIDs().call();
        let noStations = false;
        if(stationIDS.length == 0){
            noStations = true;
            return {noStations};
        } else{
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
            return {stationIDS,stationDetails,batteriesPerStation,operators,noStations};
        }
        
    }

    render(){
        if(this.props.noStations ==false){
            let nrOfBatteries=[];
            for(var i=0;i<this.props.batteriesPerStation.length;i++){
                nrOfBatteries.push(this.props.batteriesPerStation[i].length);
            }
            return(
            
                <Layout folder="administrator">
                    <h1 style={{marginTop: '0.5rem'}} >
                        Stations
                    </h1>
                    <Link route='/accounts/administrator/newStation'>
                        <Button floated='right' basic color='green' style={{marginBottom:'1rem'}}>
                            Add new station
                        </Button>
                    </Link>
                    <Stations 
                        admin={true}
                        user={false}
                        stationIDS={this.props.stationIDS}
                        stationDetails={this.props.stationDetails}
                        batteriesPerStation={this.props.batteriesPerStation}
                        nrOfBatteries={nrOfBatteries}
                        operators={this.props.operators}
                    />
                    
                
                </Layout>
            );
        }else{
            return(
                <Layout>
                    <NoStations />
                </Layout>
                
            )
        }
        
    }
}

export default AdminIndex;