import React,{Component} from 'react';
import {Table,Container} from 'semantic-ui-react';
import web3 from'../ethereum/web3';
import RequestRowUser from './RequestRowUser';

export default class MyRequests extends Component{

    renderRows(){
        return this.props.requestDetails.map((request,index)=>{
            return(
                <RequestRowUser
                    key={index}
                    id={request[0]}
                    request={request}
                    address={this.props.address}
                    />
            );
        });
    }

    render(){
       
        return(
            <Container fluid>
               <Table compact celled definition>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Request ID</Table.HeaderCell>
                            <Table.HeaderCell>Station ID</Table.HeaderCell>
                            <Table.HeaderCell>Requested Battery ID</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Request Date</Table.HeaderCell>
                            <Table.HeaderCell>Cost</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                       {this.renderRows()}
                    </Table.Body>
                </Table> 
            </Container>
        )
    }

}