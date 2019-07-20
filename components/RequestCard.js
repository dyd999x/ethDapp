
import React,{Component} from 'react';
import {Container,Card,Button} from 'semantic-ui-react';
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';


export default class RequestCardPending extends Component{
    render(){
        const {request,id} = this.props;
        var reqDate = request.requestDate;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(reqDate*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var reqqDate = day+'/'+month+'/'+year;
        if(this.props.accepted == false){
            return(
                <Card color={`${this.props.color}`}>
                    <Card.Content>
                        <Card.Header>
                            Request ID: {id}
                        </Card.Header>
                        <Card.Meta>
                            Date: {reqqDate}
                        </Card.Meta>
                        <Card.Description>
                            <b>Sender Address:</b> <p style={{fontSize:'0.8rem'}}>{request.sender}</p>
                            <hr />
                            <b>Sender BatteryID:</b> {request.ownerBatteryID}
                            <hr />
                            <b>Requested BatteryID:</b> {request.requestedBatteryID}
                            <hr />
                            <b>Station Cost:</b> {web3.utils.fromWei(request.stationCost,'ether')} ETH
                            <hr />
                            <b>Sender Cost:</b> {web3.utils.fromWei(request.ownerCost,'ether')} ETH
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }else{
            if(request.paid == true && request.ownerCost !=0){
                return(
                    <Card color={`${this.props.color}`}>
                        <Card.Content>
                            <Card.Header>
                                Request ID: {id} - Paid
                            </Card.Header>
                            <Card.Meta>
                                Date: {reqqDate}
                            </Card.Meta>
                            <Card.Description>
                                <b>Sender Address:</b> <p style={{fontSize:'0.8rem'}}>{request.sender}</p>
                                <hr />
                                <b>Sender BatteryID:</b> {request.ownerBatteryID}
                                <hr />
                                <b>Requested BatteryID:</b> {request.requestedBatteryID}
                                <hr />
                                <b>Station Cost:</b> {web3.utils.fromWei(request.stationCost,'ether')} ETH
                                <hr />
                                <b>Sender Cost:</b> {web3.utils.fromWei(request.ownerCost,'ether')} ETH
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
            if(request.paid == false && request.ownerCost !=0){
                return(
                    <Card color={`${this.props.color}`}>
                    <Card.Content>
                        <Card.Header>
                            Request ID: {id} - NOT Paid
                        </Card.Header>
                        <Card.Meta>
                            Date: {reqqDate}
                        </Card.Meta>
                        <Card.Description>
                            <b>Sender Address:</b> <p style={{fontSize:'0.8rem'}}>{request.sender}</p>
                            <hr />
                            <b>Sender BatteryID:</b> {request.ownerBatteryID}
                            <hr />
                            <b>Requested BatteryID:</b> {request.requestedBatteryID}
                            <hr />
                            <b>Station Cost:</b> {web3.utils.fromWei(request.stationCost,'ether')} ETH
                            <hr />
                            <b>Sender Cost:</b> {web3.utils.fromWei(request.ownerCost,'ether')} ETH
                        </Card.Description>
                    </Card.Content>
                </Card>
                )
            }
            if(request.paid == true && request.ownerCost == 0){
                return(
                    <Card color={`${this.props.color}`}>
                        <Card.Content>
                            <Card.Header>
                                Request ID: {id}
                            </Card.Header>
                            <Card.Meta>
                                Date: {reqqDate}
                            </Card.Meta>
                            <Card.Description>
                                <b>Sender Address:</b> <p style={{fontSize:'0.8rem'}}>{request.sender}</p>
                                <hr />
                                <b>Sender BatteryID:</b> {request.ownerBatteryID}
                                <hr />
                                <b>Requested BatteryID:</b> {request.requestedBatteryID}
                                <hr />
                                <b>Station Cost:</b> {web3.utils.fromWei(request.stationCost,'ether')} ETH
                                <hr />
                                <b>Sender Cost:</b> {web3.utils.fromWei(request.ownerCost,'ether')} ETH
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
            
        }
        
    }
}