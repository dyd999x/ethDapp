import React,{Component} from 'react';
import {Card, Grid,Segment,Button} from 'semantic-ui-react';
import web3 from'../ethereum/web3';
import battery from '../ethereum/battery';
import { Router } from '../routes';


export default class BatteryInfoUser extends Component{




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
                
                <Grid.Row verticalAlign="top" >
                                <Grid.Column>
                                <Card fluid color='green'>
                                <Card.Content >
                                            <Card.Header>
                                                <h3 style={{marginBottom:'1rem',color:'green'}}>Dynamic Info</h3>
                                            </Card.Header>
                                            <Card.Meta>
                                                <p style={{fontSize:'12px'}}>{info.ownerAddress}</p>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p><b>Actual Charging Count:</b> {info.actualChargingCount}</p>
                                                <br/>
                                                <p><b>Actual Discharging Count:</b> {info.actualDischargingCount}</p>
                                                <br/>
                                                <p style={{marginBottom:'1rem'}}><b>Price:</b> ETH  {web3.utils.fromWei(info.price, 'ether')}</p>
                                            </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button basic color='green' 
                                        onClick={()=>{Router.pushRoute(`/accounts/user/${this.props.address}/${this.props.id}/${info.batteryID}/sendRequest`)}}>
                                            Request Battery
                                        </Button>
                                    </Card.Content>
                                </Card>
                                </Grid.Column>
                                <Grid.Column>
                                <Card fluid color='green'>
                                <Card.Content>
                                <Card.Header>
                               <h3 style={{marginBottom:'1rem',color:'green'}}> Static Info</h3>
                                </Card.Header>
                            <Card.Description>
                                <p><b>Battery ID:</b> {info.batteryID}</p>
                             
                                <p><b>Brand:</b> {info.brand}</p>
                               
                                <p><b>Catalog Name: </b>{info.catalogName}</p>
                               
                                <p><b>Datasheet Link:</b> {info.datasheetLink}</p>
                               
                                <p><b>Manufacture Price:</b> ${info.manufacturePrice}</p>
                               
                                <p><b>Maximum Charging Count:</b> {info.maximumChargingCount}</p>
                                
                                <p><b>Maximum Discharging Count:</b> {info.maximumDischargingCount}</p> 
                               
                                <p><b>Maximum Charging Duration:</b> {info.maximumChargingDuration} minutes</p> 
                              
                                <p><b>Maximum Discharging Duration</b> {info.maximumDischargingDuration} standby days</p>
                                
                                <p style={{marginBottom:'1rem'}}><b>Manufacture Date: </b>{convdataTime}</p>
                            </Card.Description>
                        </Card.Content>
                                </Card>
                                </Grid.Column>
                            </Grid.Row>
                           
                            
                                
          
        )
    }
}
