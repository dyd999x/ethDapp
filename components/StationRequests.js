import React,{Component} from 'react';
import {Table,Container, Card, Tab} from 'semantic-ui-react';
import web3 from'../ethereum/web3';
import PendingRequests from './PendingRequests';
import TabRequests from './TabRequests';


export default class StationRequests extends Component{

    render(){

        const panes=[
            {
                menuItem: 'Pending',
                render: () => {
                    return(
                        <Tab.Pane attached={false}>
                            <PendingRequests reqPending={this.props.reqPending} address={this.props.address} requestDetails={this.props.requestDetails}/>
                        </Tab.Pane>
                    )
                }
            },
            {
                menuItem:'Accepted',
                render: () =>{
                    return(
                        <Tab.Pane>
                            <TabRequests reqAccepted={this.props.reqAccepted} address={this.props.address} tab='accepted'  requestDetails={this.props.requestDetails}/>
                        </Tab.Pane>
                    )
                }
            },
            {
                menuItem:'Declined',
                render: () =>{
                    return(
                        <Tab.Pane>
                            <TabRequests reqDeclined={this.props.reqDeclined} address={this.props.address} tab='declined'  requestDetails={this.props.requestDetails}/>
                        </Tab.Pane>
                    )
                }
            },
            {
                menuItem:'Confirmed',
                render: () =>{
                    return(
                        <Tab.Pane>
                            <TabRequests reqConfirmed={this.props.reqConfirmed} address={this.props.address} tab='confirmed'  requestDetails={this.props.requestDetails}/>
                        </Tab.Pane>
                    )
                }
            }
        ]
        return(
            <Tab menu={{ pointing: true }} panes={panes} />
        )
       
        
    }

}