import React from 'react';
import { Header,Segment } from 'semantic-ui-react';
import {Link,Router} from '../routes';


export default() =>{

    // static async getInitialProps(){
    //     const stationIDS = await battery.methods.getStationIDs().call();
    //     return {stationIDS};
    // }
        return(
            
            <Segment  inverted color='green' clearing >
                <Header as='h1' style={{margin: '0.5rem'}}>
                <Link route='/'>
                        <a className="item" style={{color:'white'}} >
                            MyBMS
                        </a>
                </Link>
                       
                </Header>
            </Segment>
            
            
        );
    
}



