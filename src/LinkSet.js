import React from 'react';
import {Linkki} from './Linkki';
import {Table} from 'react-bootstrap';


export const LinkSet = () =>{
 
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                    <th>Linkit:</th>
                    </tr>
                
                </thead>
                <tbody>  
                <tr>
                    <td>Kohde:</td>
                    <td>
                    <Linkki target="https://turkuamk.fi"/>
                    </td>
                </tr>
                <tr>
                <td>
                    <Linkki/>
                    </td>
                </tr>
                <tr>
                <td>
                    <Linkki/>
                </td>
                </tr>
                </tbody> 
            </Table>
        </div>
    )
}