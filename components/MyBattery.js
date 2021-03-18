import React,{Component} from 'react';
import {Card, Segment,Button,Tab,Grid,Form,Input,Message,Header,Icon} from 'semantic-ui-react';
import web3 from'../ethereum/web3';
import Stations from './Stations';
import UpdatePrice from './UpdatePrice';
import MyRequests from './MyRequests';
import battery from '../ethereum/battery';
import {Router} from '../routes';
import { request } from 'http';

export default class MyBattery extends Component{

    state={
        batteryID:'',
        brand:'',
        catalogName:'',
        datasheetLink:'',
        manufacturePrice:'',
        maximumChargingCount:'',
        maximumDischargingCount:'',
        maximumChargingDuration:'',
        maximumDischargingDuration:'',
        manufactureDate:'',
        price:'',
        actualChargingCount:'',
        actualDischargingCount:'',
        errMessage:'',
        loading:false
    };

    onSubmit = async event =>{
        event.preventDefault();
       
        const {batteryID,brand,catalogName,datasheetLink,manufactureDate,maximumChargingCount,
        maximumDischargingCount,maximumChargingDuration,maximumDischargingDuration,manufacturePrice,
        price,actualChargingCount,actualDischargingCount} = this.state;
        
        const dateTime = +new Date(manufactureDate);
        const timestamp = Math.floor(dateTime / 1000);

        this.setState({loading:true,errMessage:''});

        try{
            await battery.methods.registerBatteryStaticInfo(
                batteryID,brand,catalogName,datasheetLink,manufacturePrice,maximumChargingCount,maximumDischargingCount,
                maximumChargingDuration,maximumDischargingDuration,timestamp).send({
                    from: this.props.address
                });
            await battery.methods.registerBatteryDynamicInfo(batteryID,web3.utils.toWei(price,'ether'),actualChargingCount,actualDischargingCount,0)
            .send({from: this.props.address});
            Router.pushRoute(`/accounts/user/${this.props.address}`);
        } catch(err){
            this.setState({errMessage:err.message});
        }

        this.setState({loading:false});


    }
  
    render(){
        const {info,address, requestDetails} = this.props;
        var manDate = info.manufactureDate;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(manDate*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var convdataTime = day+'/'+month+'/'+year;
        const panes = [
            {
                menuItem: 'My Battery', render: () =>{
                    if(this.props.empty == false){
                        return(
                            <Tab.Pane >
                                <Grid columns={2} stackable >
                                <Grid.Row verticalAlign="top" >
                                    <Grid.Column>
                                    <Card fluid color='green'>
                                    <Card.Content >
                                                <Card.Header>
                                                    <h3 style={{marginBottom:'1rem',color:'green'}}>Dynamic Info</h3>
                                                </Card.Header>
                                                <Card.Meta>
                                                    <p style={{fontSize:'12px'}}>{address}</p>
                                                </Card.Meta>
                                                <Card.Description>
                                                    <p><b>Actual Charging Count:</b> {info.actualChargingCount}</p>
                                                    <br/>
                                                    <p><b>Actual Discharging Count:</b> {info.actualDischargingCount}</p>
                                                    <br/>
                                                    <p style={{marginBottom:'1rem'}}><b>Price:</b> ETH  {web3.utils.fromWei(info.price, 'ether')}</p>
                                                </Card.Description>
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
                                    
                                    
                                </Grid>
                                
                            </Tab.Pane>
                            
                        )
                    } else{
                        return(
                            <Tab.Pane>
                                 <h2 style={{color:'darkblue'}}>Please register your battery</h2>
                                <Form style={{marginTop:'2rem',width:'80%'}} onSubmit={this.onSubmit} error={!!this.state.errMessage}> 
                                    <Form.Field >
                                        <label>Battery ID</label>
                                        <Input 
                                            required
                                            placeholder='ex: 123456' 
                                            value={this.state.batteryID}
                                            onChange={event=> this.setState({batteryID:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Battery Brand</label>
                                        <Input 
                                            required
                                            placeholder='ex: Tesla' 
                                            value={this.state.brand}
                                            onChange={event => this.setState({brand:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Catalog Name</label>
                                        <Input 
                                            required
                                            placeholder='ex: BT4635' 
                                            value={this.state.catalogName}
                                            onChange={event => this.setState({catalogName:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Datasheet Link</label>
                                        <Input 
                                            required
                                            placeholder='ex: https://wwww.yourBatteryLink.com' 
                                            value={this.state.datasheetLink}
                                            onChange={event => this.setState({datasheetLink:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Manufacture Price ($)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 3200' 
                                            value={this.state.manufacturePrice}
                                            onChange={event => this.setState({manufacturePrice:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Charging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5000' 
                                            value={this.state.maximumChargingCount}
                                            onChange={event => this.setState({maximumChargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Discharging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5000' 
                                            value={this.state.maximumDischargingCount}
                                            onChange={event => this.setState({maximumDischargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Charging Duration (minutes)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 140' 
                                            value={this.state.maximumChargingDuration}
                                            onChange={event => this.setState({maximumChargingDuration:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Discharging Duration (miles/day of standby)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5' 
                                            value={this.state.maximumDischargingDuration}
                                            onChange={event => this.setState({maximumDischargingDuration:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Manufacture Date</label>
                                        <Input 
                                            required
                                            placeholder='YYYY-MM-DD: 2018-07-02' 
                                            value={this.state.manufactureDate}
                                            onChange={event => this.setState({manufactureDate:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Price (ETH)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 0.2' 
                                            value={this.state.price}
                                            onChange={event => this.setState({price:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Actual Charging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 20' 
                                            value={this.state.actualChargingCount}
                                            onChange={event => this.setState({actualChargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Actual Discharging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5' 
                                            value={this.state.actualDischargingCount}
                                            onChange={event => this.setState({actualDischargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                    
                                <Message error header="Oops" 
                                content={this.state.errMessage} />
                                <Button style={{marginBottom:'3rem'}} primary loading={this.state.loading}>Add</Button>

                            </Form>
                            </Tab.Pane>
                        )
                    }
                    
                }
            },
            {
                menuItem: 'Stations', render: ()=>{
                    if(this.props.stationIDS.length != 0){
                        return(
                            <Tab.Pane>
                                <Stations
                                address={this.props.address}  
                                admin={false}
                                user={true}
                                stationIDS={this.props.stationIDS}
                                stationDetails={this.props.stationDetails}
                                batteriesPerStation={this.props.batteriesPerStation}
                                nrOfBatteries={this.props.nrOfBatteries} />
                            </Tab.Pane>
                            
                        )
                    }else{
                        return(
                            <Tab.Pane>
                                <Segment placeholder>
                                    <Header icon>
                                    <Icon name='file outline' />
                                    No stations added yet
                                    </Header>
                                </Segment>
                            </Tab.Pane>
                        )
                    }
                    
                }
            },
            {
                menuItem: 'Update Battery Price', render: ()=>{
                    if(this.props.empty == false){
                        return(
                            <Tab.Pane>
                                <UpdatePrice address={address} id={info.batteryID}/>
                            </Tab.Pane>
                        )
                    }else{
                        return(
                            <Tab.Pane>
                                 <h2 style={{color:'darkblue'}}>Please register your battery</h2>
                                <Form style={{marginTop:'2rem',width:'80%'}} onSubmit={this.onSubmit} error={!!this.state.errMessage}> 
                                    <Form.Field >
                                        <label>Battery ID</label>
                                        <Input 
                                            required
                                            placeholder='ex: 123456' 
                                            value={this.state.batteryID}
                                            onChange={event=> this.setState({batteryID:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Battery Brand</label>
                                        <Input 
                                            required
                                            placeholder='ex: Tesla' 
                                            value={this.state.brand}
                                            onChange={event => this.setState({brand:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Catalog Name</label>
                                        <Input 
                                            required
                                            placeholder='ex: BT4635' 
                                            value={this.state.catalogName}
                                            onChange={event => this.setState({catalogName:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Datasheet Link</label>
                                        <Input 
                                            required
                                            placeholder='ex: https://wwww.yourBatteryLink.com' 
                                            value={this.state.datasheetLink}
                                            onChange={event => this.setState({datasheetLink:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Manufacture Price ($)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 3200' 
                                            value={this.state.manufacturePrice}
                                            onChange={event => this.setState({manufacturePrice:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Charging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5000' 
                                            value={this.state.maximumChargingCount}
                                            onChange={event => this.setState({maximumChargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Discharging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5000' 
                                            value={this.state.maximumDischargingCount}
                                            onChange={event => this.setState({maximumDischargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Charging Duration (minutes)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 140' 
                                            value={this.state.maximumChargingDuration}
                                            onChange={event => this.setState({maximumChargingDuration:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Maximum Discharging Duration (miles/day of standby)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5' 
                                            value={this.state.maximumDischargingDuration}
                                            onChange={event => this.setState({maximumDischargingDuration:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Manufacture Date</label>
                                        <Input 
                                            required
                                            placeholder='YYYY-MM-DD: 2018-07-02' 
                                            value={this.state.manufactureDate}
                                            onChange={event => this.setState({manufactureDate:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Price (ETH)</label>
                                        <Input 
                                            required
                                            placeholder='ex: 0.2' 
                                            value={this.state.price}
                                            onChange={event => this.setState({price:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Actual Charging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 20' 
                                            value={this.state.actualChargingCount}
                                            onChange={event => this.setState({actualChargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                                    <Form.Field >
                                        <label>Actual Discharging Count</label>
                                        <Input 
                                            required
                                            placeholder='ex: 5' 
                                            value={this.state.actualDischargingCount}
                                            onChange={event => this.setState({actualDischargingCount:event.target.value})}
                                        />
                                    </Form.Field>
                    
                                <Message error header="Oops" 
                                content={this.state.errMessage} />
                                <Button style={{marginBottom:'3rem'}} primary loading={this.state.loading}>Add</Button>

                            </Form>
                            </Tab.Pane>
                        )
                        
                    }
                    
                }
            },
            {
                menuItem: 'My Requests', render: ()=>{
                    if(requestDetails.length !=0){
                        return(
                            <Tab.Pane>
                                <MyRequests requestDetails={requestDetails} address={address}/>
                            </Tab.Pane>
                            
                        )
                    }else{
                        return(
                            <Tab.Pane>
                                 <Segment placeholder>
                                    <Header icon>
                                    <Icon name='file outline' />
                                    You have no requests to show
                                    </Header>
                                </Segment>
                            </Tab.Pane>

                        )
                    }
                    
                }
            }
        ]
        return(
            <Tab menu={{ fluid: true, vertical: true, tabular: true,color: 'green' }} panes={panes} />
        )
    }
}


