import React,{Component} from 'react';
import BatteryInfo from './BatteryInfo';
import {Container,Card,Header,Icon,Segment} from 'semantic-ui-react';
 

export default class BatteriesList extends Component{

    renderCards(){
        return this.props.BattInfo.map((info,index) =>{
            return(
                <BatteryInfo 
                    key={index}
                    info={info}
                />
            )
        })
    }

    
    render(){
        if(this.props.BattInfo.length>0){
            return(
                <Container style={{width:'75%'}}>
                    <Card.Group style={{marginTop:'3rem',marginBottom:'3rem'}}>
                       {this.renderCards()}
                    </Card.Group>
                </Container>
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