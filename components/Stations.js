import React, {Component} from 'react';
import web3 from '../ethereum/web3';
import battery from '../ethereum/battery';
import { Table } from 'semantic-ui-react';
import StationRow from './StationRow';
import StationRowOp from './StationRowOp';
import StationRowUser from './StationRowUser';
import {Link} from '../routes';


class RenderStations extends Component{
  
    renderRows(){
        return this.props.stationDetails.map((station,index)=>{
            return(
                <StationRow
                    key={index}
                    id={station.id}
                    station={station}
                    bateries={this.props.batteriesPerStation}
                    nrOfBatteries={this.props.nrOfBatteries[index]}
                    operator={this.props.operators[index]}
                    />
            );
        });
    }

    renderRowsOp(){
        if(this.props.user == false){
            return this.props.stationDetails.map((station,index)=>{
                return(
                    <StationRowOp
                        key={index}
                        id={station.id}
                        station={station}
                        bateries={this.props.batteriesPerStation}
                        nrOfBatteries={this.props.nrOfBatteries[index]}
                        address={this.props.address}
                        />
                );
            });
        }else{
            return this.props.stationDetails.map((station,index)=>{
                return(
                    <StationRowUser
                        key={index}
                        id={station.id}
                        station={station}
                        bateries={this.props.batteriesPerStation}
                        nrOfBatteries={this.props.nrOfBatteries[index]}
                        address={this.props.address}
                        />
                );
            });
        }
        
    }

    render(){
        if(this.props.admin ==true){
            return(
                <Table striped color="blue">
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell>id</Table.HeaderCell>
                            <Table.HeaderCell >Location</Table.HeaderCell>
                            <Table.HeaderCell>Operator</Table.HeaderCell>
                            <Table.HeaderCell>Available Batteries</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                       {this.renderRows()}
                    </Table.Body>
                </Table>
            );
        } else{
            return(
                <Table striped color="blue">
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell>id</Table.HeaderCell>
                            <Table.HeaderCell >Location</Table.HeaderCell>
                            <Table.HeaderCell>Available Batteries</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                       {this.renderRowsOp()}
                    </Table.Body>
                </Table>
            );
        }
      
    }


}

export default RenderStations;