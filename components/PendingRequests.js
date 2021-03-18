import React,{Component} from 'react';
import {Table,Container, Card, Segment,Header,Icon} from 'semantic-ui-react';
import RequestCardPending from './RequestCardPending'

export default class PendingRequests extends Component{

    renderCards(){
        return this.props.reqPending.map((request,index)=>{
            return(
                <RequestCardPending
                    id={request[0]}
                    key={index}
                    request={request}
                    address={this.props.address}
                />
            );
        });
    }

    render(){
        if(this.props.reqPending.length !=0){
            return(
                <Card.Group>
                    {this.renderCards()}
                </Card.Group>
            )
        }else{
            return(
                <Segment placeholder>
               <Header icon>
               <Icon name='file outline' />
               You have no pending requests
               </Header>
                </Segment>
            )
            
     
        }
        
    }
}