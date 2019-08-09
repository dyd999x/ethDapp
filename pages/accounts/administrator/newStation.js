import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import battery from '../../../ethereum/battery';
import {Form,Button,Container,Input,Message} from 'semantic-ui-react';
import {Link,Router} from '../../../routes';
import web3 from '../../../ethereum/web3';

class NewStation extends Component{
    
    state={
        id:'',
        stationAddress:'',
        operator:'',
        errMessage:'',
        loading:false
    };


    onSubmit = async event =>{
        event.preventDefault();
       
        const {id,stationAddress,operator} = this.state;

        this.setState({loading:true,errMessage:''});

        try{
            const accounts = await web3.eth.getAccounts();
            await battery.methods.registerStation(id,stationAddress,operator).send({
                from: accounts[0]
            });
            Router.pushRoute('/accounts/administrator');
        } catch(err){
            this.setState({errMessage:err.message});
        }

        this.setState({loading:false});


    }

  

    render(){
       
        return(
            <Layout>
                <Container style={{marginTop:"1rem",width:'75%'}}>
                <Link route="/accounts/administrator">
                    <a><h4>Back</h4></a>
                </Link>
                <h2 style={{color:'darkblue'}}>Register a new station</h2>
                <Form style={{marginTop:'2rem',width:'80%'}} onSubmit={this.onSubmit} error={!!this.state.errMessage}> 
                    <Form.Field >
                        <label>Station ID</label>
                        <Input 
                            placeholder='Station ID' 
                            value={this.state.id}
                            onChange={event=> this.setState({id:event.target.value})}
                            />
                    </Form.Field>
                    <Form.Field >
                        <label>Station Location</label>
                        <Input 
                            placeholder='Station Address' 
                            value={this.state.stationAddress}
                            onChange={event => this.setState({stationAddress:event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field >
                        <label>Operator Account Address</label>
                        <Input 
                            placeholder='Operator Account Address' 
                            value={this.state.operator}
                            onChange={event => this.setState({operator:event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops" 
                    content="Please check again that the ID is an integer and has not been used before and the address is a valid string" />
                    <Button primary loading={this.state.loading}>Register</Button>

                </Form>
                
                </Container>
                
               
            </Layout>
        );
    }
}

export default NewStation;