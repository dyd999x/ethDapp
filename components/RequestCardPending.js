import React,{Component} from 'react';
import {Container,Card,Button} from 'semantic-ui-react';
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';
import battery from '../ethereum/battery';

export default class RequestCardPending extends Component{
    state={loading:false,errMessage:'',loading2:false}
    render(){
        const {request,id,address} = this.props;
        var reqDate = request.requestDate;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(reqDate*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var reqqDate = day+'/'+month+'/'+year;
        return(
            <Card color='yellow'>
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
                <Card.Content extra>
                    <Button basic color='green' loading={this.state.loading} onClick={async ()=>{
                        this.setState({loading:true,errMessage:'',errMessage2:'',loading2:false});
                        try{
                            await battery.methods.manageRequest(id,true).send({from:address,value:request.stationCost});
                            Router.pushRoute(`/accounts/stationOperator/${address}/showRequests`);
                        }catch(err){
                            this.setState({errMessage:err.message});
                        }
                        this.setState({loading:false});
                    }}>Approve</Button>
                    <Button basic color='red' loading={this.state.loading2} onClick={
                        async ()=>{
                            this.setState({loading2:true,errMessage:''});
                            try{
                                await battery.methods.manageRequest(id,false).send({from:address});
                                Router.pushRoute(`/accounts/stationOperator/${address}/showRequests`);
                            }catch(err){
                                this.setState({errMessage:err.message});
                            }
                            this.setState({loading2:false});
                    }}>Decline</Button>
                    <div style={{color:'red'}}>{this.state.errMessage}</div>
                </Card.Content>
            </Card>
        )
    }
}