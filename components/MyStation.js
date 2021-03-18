import React, {Component} from 'react';
import web3 from '../ethereum/web3';
import battery from '../ethereum/battery';
import { Card,Container,Button} from 'semantic-ui-react';
import {Link,Router} from '../routes';


export default class MyStation extends Component{

    
        render(){
            const  { Content, Header, Description, Meta} = Card;
            const {address, myStationDetails,myStationBatteries} =this.props;
            return(
                <Container fluid style={{marginTop:'2rem',marginBottom:'2rem'}} raised='true'>
                     <Card fluid>
                        <Content>
                            <Header>
                                My Station
                            </Header>
                            <Card.Description>
                                <h5>Station ID:</h5> {myStationDetails.id}
                                <hr />
                                <h5>Location:</h5> {myStationDetails.stationAddress}
                                <hr />
                                <h5>Operator Address:</h5> {address}
                                <hr />
                                <h5 style={{marginBottom:'0.8rem'}}>Available Batteries:</h5> {myStationBatteries.length}
                            </Card.Description>
                        </Content>
                        <Content extra >
                            <Button 
                                basic
                                color='green'
                                content='Show Batteries'
                                onClick={() =>{Router.pushRoute(`/accounts/stationOperator/${address}/showBatteries`)}}
                            />
                            <Button 
                                basic
                                color='green'
                                content='Show Requests'
                                onClick={() => {Router.pushRoute(`/accounts/stationOperator/${address}/showRequests`)}}
                            />
                            <Button 
                                basic
                                color='green'
                                content='Add Battery'
                                onClick={() =>{Router.pushRoute(`/accounts/stationOperator/${address}/addBattery`)}}
                            />
                        </Content>
                    </Card>
                </Container>
               
            );
        }
}