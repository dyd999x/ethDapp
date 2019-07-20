import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from '../routes';

class StationRow extends Component{

    render(){
        const {Row,Cell} = Table;
        const {id,station,batteriesPerStation,nrOfBatteries,operator} = this.props;
        return(
            <Row textAlign='center'>
                <Cell>{id}</Cell>
                <Cell>{station.stationAddress}</Cell>
                <Cell>{operator}</Cell>
                <Cell>{nrOfBatteries}</Cell>
                <Cell>
                    <Link route={`/accounts/administrator/${id}`}>
                        <a>
                            <Button basic color="blue">View Batteries</Button>
                        </a>
                    </Link>
                </Cell>
            </Row>
        )
    }
}

export default StationRow;