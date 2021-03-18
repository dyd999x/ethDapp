import React, {Component} from 'react';
import {Form,Input,Button,Message} from 'semantic-ui-react';
import battery from '../ethereum/battery';
import { Router } from '../routes';

export default class UpdatePrice extends Component{

    state={
        value:'',loading:false,errMessage:''
    }

    onCLICK= async()=>{
        this.setState({loading:true,errMessage:'',value:''});
        const {address,id} = this.props;
        try{
            await battery.methods.updatePrice(parseInt(id),parseInt(this.state.value)).send({from: address});
            this.setState({value:''})
            Router.pushRoute(`/accounts/user/${address}`);
        }catch(err){
            this.setState({errMessage:err.message});
        }
        this.setState({loading:false,errMessage:''});
    }
    render(){
        return(
            <div>
                <h3>Please enter below the new price for your battery</h3>
                <Input 
                    error={!!this.state.errMessage}
                    label='wei'
                    labelPosition='right'
                    placeholder='New Price'
                    value={this.state.operator}
                    onChange={event => this.setState({value:event.target.value})}
                />
                <br />
                <br />
                <Button primary type='submit' onClick={this.onCLICK} loading={this.state.loading}>Change</Button>
                <Message hidden={!this.state.errMessage}>{this.errMessage}</Message>
            </div>
            
        )
    }
}