import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import {Form,Button,Container,Input,Message} from 'semantic-ui-react';
import {Link,Router} from '../../../routes';
import web3 from '../../../ethereum/web3';

class addBattery extends Component{
    
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

    static async getInitialProps(props){
        const {address} = props.query;
        const stationID = await battery.methods.opToStation(address).call();
        return {address,stationID};
    }


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
            await battery.methods.registerBatteryDynamicInfo(batteryID,web3.utils.toWei(price,'ether'),actualChargingCount,actualDischargingCount,parseInt(this.props.stationID))
            .send({from: this.props.address});
            Router.pushRoute(`/accounts/stationOperator/${this.props.address}/showBatteries`);
        } catch(err){
            this.setState({errMessage:err.message});
        }

        this.setState({loading:false});


    }

    render(){
        return(
            <Layout>
                <Container style={{marginTop:"1rem",width:'75%'}}>
                <Button 
                basic 
                color='blue' 
               
                onClick={(e=>{Router.pushRoute(`/accounts/stationOperator/${this.props.address}`)})}>Back</Button>
                <h2 style={{color:'darkblue'}}>Add a new battery for your station</h2>
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
                
                </Container>
                
               
            </Layout>
        );
    }
}

export default addBattery;