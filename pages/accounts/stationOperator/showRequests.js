import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import {Form,Button,Container,Input,Message,Segment,Header,Icon} from 'semantic-ui-react';
import {Link,Router} from '../../../routes';
import web3 from '../../../ethereum/web3';
import StationRequests from '../../../components/StationRequests';

export default class showRequests extends Component{


    static async getInitialProps(props){
        const {address} =props.query;
        const stationID = await battery.methods.opToStation(address).call();
        const myRequestsIDS = await battery.methods.getRequestsFromStation(stationID).call();
        let requestDetails = await Promise.all(
            Array(parseInt(myRequestsIDS.length)).
            fill().map((el,index)=>{return battery.methods.requests(myRequestsIDS[index]).call();})
        );
        for(var i=0;i<myRequestsIDS.length;i++){
            requestDetails[i] = {...requestDetails[i],...myRequestsIDS[i]};
        }
        let reqPending=[];
        let reqAccepted=[];
        let reqDeclined=[];
        let reqConfirmed=[];
        for(var i=requestDetails.length-1; i>=0;i--){
            if(requestDetails[i].managed == false)reqPending.push(requestDetails[i]);
            if(requestDetails[i].managed == true && requestDetails[i].accepted == true && requestDetails[i].confirmed == false)reqAccepted.push(requestDetails[i]);
            if(requestDetails[i].managed == true && requestDetails[i].accepted == false)reqDeclined.push(requestDetails[i]);
            if(requestDetails[i].managed == true && requestDetails[i].accepted == true && requestDetails[i].confirmed == true)reqConfirmed.push(requestDetails[i]);
        }

        return {address,requestDetails,reqPending,reqAccepted,reqDeclined,reqConfirmed};
       
    }

    render(){
        if(this.props.requestDetails.length !=0){
            return(
                <Layout>
                    <Link route={`/accounts/stationOperator/${this.props.address}`}>
                        <Button primary style={{marginBottom:'1rem'}}>Back</Button>
                    </Link>
                    
                    <StationRequests requestDetails={this.props.requestDetails} 
                    reqPending={this.props.reqPending}
                    reqAccepted={this.props.reqAccepted}
                    reqDeclined={this.props.reqDeclined}
                    reqConfirmed={this.props.reqConfirmed}
                    address={this.props.address}
                    />
                </Layout>
            )
        }else{
            return(
                <Layout>
                     <Segment placeholder>
                            <Header icon>
                                <Icon name='file outline' />
                                You have no requests to show
                            </Header>
                            <Link route={`/accounts/stationOperator/${this.props.address}`}>
                                <Button primary >
                                    Back
                                </Button>
                            </Link>
                        </Segment>
                </Layout>
            )
        }
        
    }
}