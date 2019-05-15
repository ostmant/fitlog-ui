import React from 'react';
import {Linkki} from './Linkki';
import './test.css';   

export const LinkSet = () =>{
    return (
        <div>
            <table>
                <th>Linkit:</th>
                <tr>
                    <Linkki/>
                </tr>
                <tr>
                    <Linkki/>
                </tr>
                <tr>
                    <Linkki/>
                </tr>
            </table>
        </div>
    )
}