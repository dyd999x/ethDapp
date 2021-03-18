import React,{Component} from 'react';
import {Card, Segment} from 'semantic-ui-react';
import web3 from'../ethereum/web3';

export default class BatteryInfo extends Component{


    render(){
        const {info} = this.props;
        var manDate = info.manufactureDate;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(manDate*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var convdataTime = day+'/'+month+'/'+year;
        return(
            <Card fluid raised={true} color='green'>
                <Segment.Group horizontal>
                    <Segment color='green'>
                        <Card.Content fluid="true">
                            <Card.Header>
                               <h3 style={{marginBottom:'1rem'}}> Static Info</h3>
                            </Card.Header>
                            <Card.Description>
                                <h5>Battery ID</h5>{info.batteryID}
                                <hr />
                                <h5>Brand</h5>{info.brand}
                                <hr />
                                <h5>Catalog Name</h5>{info.catalogName}
                                <hr />
                                <h5>Datasheet Link</h5>{info.datasheetLink}
                                <hr />
                                <h5>Manufacture Price</h5>${info.manufacturePrice}
                                <hr />
                                <h5>Maximum Charging Count</h5>{info.maximumChargingCount}
                                <hr />
                                <h5>Maximum Discharging Count</h5>{info.maximumDischargingCount}
                                <hr />
                                <h5>Maximum Charging Duration</h5>{info.maximumChargingDuration} minutes
                                <hr />
                                <h5>Maximum Discharging Duration</h5>{info.maximumDischargingDuration} standby days
                                <hr />
                                <h5 style={{marginBottom:'1rem'}}>Manufacture Date</h5>{convdataTime}
                            </Card.Description>
                        </Card.Content>
                    </Segment>
                       
                    <Segment color='green'>
                        <Card.Content fluid="true">
                            <Card.Header>
                                <h3 style={{marginBottom:'1rem'}}>Dynamic Info</h3>
                            </Card.Header>
                            <Card.Description>
                                <h5>Owner Account Address</h5>{info.ownerAddress}
                                <hr />
                                <h5>Actual Charging Count</h5>{info.actualChargingCount}
                                <hr />
                                <h5>Actual Discharging Count</h5>{info.actualDischargingCount}
                                <hr />
                                <h5>Station ID</h5>{info.stationID}
                                <hr />
                                <h5 style={{marginBottom:'1rem'}}>Price</h5>ETH  {web3.utils.fromWei(info.price, 'ether')}
                            </Card.Description>
                        </Card.Content>
                    </Segment>
                </Segment.Group>
            </Card>
          
        )
    }
}
