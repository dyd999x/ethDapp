import React,{Component} from 'react';
import {Table,Container, Card, Tab} from 'semantic-ui-react';
import web3 from'../ethereum/web3';
import RequestCard from './RequestCard';

export default class TabRequests extends Component{

    renderCardsAcc(){
        return this.props.reqAccepted.map((request,index)=>{
            return(
                <RequestCard
                    id={request[0]}
                    key={index}
                    request={request}
                    address={this.props.address}
                    color='orange'
                    accepted={true}
                />
            );
        });
    }

    renderCardsDec(){
        return this.props.reqDeclined.map((request,index)=>{
            return(
                <RequestCard
                    id={request[0]}
                    key={index}
                    request={request}
                    address={this.props.address}
                    color='red'
                    accepted={false}
                />
            );
        });
    }

    renderCardsCon(){
        return this.props.reqConfirmed.map((request,index)=>{
            return(
                <RequestCard
                    id={request[0]}
                    key={index}
                    request={request}
                    address={this.props.address}
                    color='green'
                    accepted={false}
                />
            );
        });
    }

    render(){
        if(this.props.tab == 'accepted'){
            return(
                <Card.Group>
                    {this.renderCardsAcc()}
                </Card.Group>
            )
        }
        if(this.props.tab == 'declined'){
            return(
                <Card.Group>
                    {this.renderCardsDec()}
                </Card.Group>
            )
        }
        if(this.props.tab == 'confirmed'){
            return(
                <Card.Group>
                    {this.renderCardsCon()}
                </Card.Group>
            )
        }
        
    }
}