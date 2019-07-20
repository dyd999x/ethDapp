import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from '../routes';
import web3 from '../ethereum/web3';
import battery from '../ethereum/battery';
import {Router} from '../routes'

class RequestRowUser extends Component{
    state={loading:false,errMessage:''}

    render(){
       
        const {Row,Cell} = Table;
        const {id,request,address} = this.props;
        var reqDate = request.requestDate;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(reqDate*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var convdataTime = day+'/'+month+'/'+year;
        let status='';
        let color=''
        if(request.accepted == true && request.confirmed == true){
            status="Accepted and Confirmed";
            color='lightgreen';
        }
        if(request.accepted == true && request.confirmed == false){
            status="Accepted and NOT Confirmed";
            color='orange';
        }
        if(request.managed == false){
            status="Pending";
            color='yellow';
        }
        if(request.accepted==false && request.managed == true){
            status="Declined";
            color='red';
        }
        let dis=false;
        if(request.ownerCost == 0 && request.accepted == false){
            dis = true;
        }
        if(request.paid == true){
            dis=true;
        }
        return(
            <Row textAlign='center' style={{backgroundColor:`${color}`}}>
                <Cell collapsing>
                    <Button 
                        fluid 
                        basic 
                        content='Pay Swap' 
                        color='black' 
                        loading={this.state.loading}
                        disabled={dis} 
                        onClick={async ()=>{
                            this.setState({loading:true,errMessage:''});
                            try{
                                await battery.methods.paySwap(id).send({from:address,value:request.ownerCost});
                                Router.pushRoute(`/accounts/user/${address}`);
                            }catch(err){
                                this.setState({errMessage:err.message});
                            }
                            this.setState({loading:false});
                        }}/>
                        <div>
                            {this.state.errMessage}
                        </div>
                </Cell>
                <Cell>{id}</Cell>
                <Cell>{request.stationID}</Cell>
                <Cell>{request.requestedBatteryID}</Cell>
                <Cell>{status}</Cell>
                <Cell>{convdataTime}</Cell>
                <Cell>ETH  {web3.utils.fromWei(request.ownerCost, 'ether')}</Cell>
            </Row>
           
        )
    }
}

export default RequestRowUser;