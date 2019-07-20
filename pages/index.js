import React, {Component} from 'react';
import { Header, Icon, Container, Card,Segment,Message,Button } from 'semantic-ui-react';
import Head from 'next/head';
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';
import battery from '../ethereum/battery';


class BatteryIndex extends Component {
    state={
        errMessage:'Select an option',
        err: false,
        admin:false,
        op:false
    }

    onAdmin = async () =>{
        this.setState({errMessage:""});
        try{

            const accounts = await web3.eth.getAccounts();
            const manager = await battery.methods.systemManager().call();
            if(accounts[0] == manager){
                this.setState({errMessage:"",admin:true,err:false});
                Router.pushRoute('/accounts/administrator');
            } else{
                this.setState({errMessage:"Only the system manager can access this page",err:true});
                this.setState({admin:false});
            }
        } catch (err){
            this.setState({errMessage:err.message});
        }
        
    }

    onSO = async () =>{
        this.setState({errMessage:""});
        try{
           
            const accounts = await web3.eth.getAccounts();
            const stationID = await battery.methods.opToStation(accounts[0]).call();
            if(stationID != 0 && this.state.admin == false){
                this.setState({errMessage:"",op:true,err:false});
                Router.pushRoute(`/accounts/stationOperator/${accounts[0]}`);
            } else{
                this.setState({errMessage:"Only a station operator can access this page",err:true});
                this.setState({op:false});
            }
        } catch (err){
            this.setState({errMessage:err.message});
        }
    }

    onUser = async () =>{
        this.setState({errMessage:""});
        if(this.state.admin == false && this.state.op == false){
            try{
                const accounts = await web3.eth.getAccounts();
                this.setState({errMessage:"",err:false});
                Router.pushRoute(`/accounts/user/${accounts[0]}`);
            } catch(err) {
                this.setState({errMessage:err.message});
            }
            
        }
    }


    render() {
        return(
            <div >
                <Head>
                <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                />
            </Head>
            <Segment inverted color='green' clearing>
                <Header as='h1' style={{margin: '0.5rem'}}>
                    <Link route="/">
                        <a className="item" style={{color:'white'}}>
                            MyBMS
                        </a>
                    </Link>
                </Header>
            </Segment>
            <Container style={{width: '250px'}}>
                <Header as='h2' icon textAlign='center'>
                     <Icon name='users'  color='green' />
                    <Header.Content>Welcome</Header.Content>
                </Header>
                <Card.Group>
                    <Card fluid color='red' header='Administrator' onClick={this.onAdmin} />
                    <Card fluid color='orange' header='Station Operator' onClick={this.onSO}/>
                    <Card fluid color='yellow' header='User' onClick={this.onUser}/>
                </Card.Group>
            </Container>
            <Message error={this.state.err} content={this.state.errMessage} />
           
            
            </div>
           
        );
    }
}

export default BatteryIndex;

//onClick={()=> Router.pushRoute('/accounts/administrator/index')}
