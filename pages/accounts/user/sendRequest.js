import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import {Button,Segment,Header,Icon} from 'semantic-ui-react';
import {Router} from '../../../routes';

export default class SendRequest extends Component{

    state={
        mess:'',
        loading:false,
        myRequestsDetails:[]
    }


    static async getInitialProps(props){
        const {address,id,batteryID} = props.query;
        const myRequestsIDS = await battery.methods.getMyRequests(address).call();
        const requestDetails = await Promise.all(
            Array(parseInt(myRequestsIDS.length)).
            fill().map((el,index)=>{return battery.methods.requests(myRequestsIDS[index]).call();})
        );
        let alreadyReq = false;
        for(var i=0;i<requestDetails.length;i++){
            if(requestDetails[i].requestedBatteryID == batteryID
                && requestDetails.confirmed == false){
                alreadyReq = true;
                break;
            }
        }
        return {address,id,batteryID,myRequestsIDS,requestDetails,alreadyReq};
    }

    onCLICK = async () =>{
        if(!this.props.alreadyReq){
            this.setState({mess:'',loading:false});
            try{
                this.setState({loading:true});
                await battery.methods.sendSwapRequest(this.props.batteryID,this.props.id).send({from: this.props.address});
                Router.pushRoute(`/accounts/user/${this.props.address}/${this.props.id}`);
            }catch(err){
                this.setState({mess:err.message});
            }
            this.setState({loading:false});
        }else{
            this.setState({mess:'Error: You already requested this battery!'})
        }
        
    }

    render(){
        return(
            <Layout>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='send' />
                        Do you want to request this battery?
                    </Header>
                    <Segment.Inline>
                        <Button positive onClick={this.onCLICK} loading={this.state.loading}>YES</Button>
                        <Button negative onClick={()=>{Router.pushRoute(`/accounts/user/${this.props.address}/${this.props.id}`);}}>NO</Button>
                    </Segment.Inline>
                    <div style={{margin:'2rem',fontSize:'1rem',color:'red'}}>
                        {this.state.mess}
                    </div>
                </Segment>
            </Layout>
        )
    }
}