import React,{Component} from 'react';
import BatteryInfoUser from './BatteryInfoUser';
import {Container,Card,Header,Icon,Segment,Grid} from 'semantic-ui-react';
 

export default class BatteriesListUser extends Component{

    renderCards(){
        return this.props.BattInfo.map((info,index) =>{
            return(
                <BatteryInfoUser 
                    key={index}
                    info={info}
                    address={this.props.address}
                    id={this.props.id}
                />
            )
        })
    }

    
    render(){
        if(this.props.BattInfo.length>0){
            return(
                <Grid columns={2} stackable >
                  
                    {this.renderCards()}

                </Grid>
            )
        }else{
            return(
                <Container fluid style={{marginTop:'1rem'}}>
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='content' />
                            No batteries are listed for this station.
                        </Header>
                    </Segment>
                </Container>
            )
        }
        
    }
}