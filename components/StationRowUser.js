import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from '../routes';

class StationRowUser extends Component{

    render(){
        const {Row,Cell} = Table;
        const {id,station,nrOfBatteries,address} = this.props;

        return(
            <Row textAlign='center'>
                <Cell>{id}</Cell>
                <Cell>{station.stationAddress}</Cell>
                <Cell>{nrOfBatteries}</Cell>
                <Cell>
                    <Link route={`/accounts/user/${address}/${id}`}>
                        <a>
                            <Button basic color="blue">View Batteries</Button>
                        </a>
                    </Link>
                </Cell>
            </Row>
        )
    }
}

export default StationRowUser;