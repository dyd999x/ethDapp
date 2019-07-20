import React, {Component} from 'react';
import {Container,Segment,Icon,Header,Button} from 'semantic-ui-react';
import {Link} from '../routes';

export default class NoStations extends Component{

    render(){
        return(
            <Segment placeholder>
                <Header icon>
                <Icon name='file outline' />
                No stations added yet
                </Header>
                <Link route='/accounts/administrator/newStation'>
                        <Button primary style={{marginBottom:'1rem'}}>
                            Add station
                        </Button>
                </Link>
            </Segment>
        )
    }
}