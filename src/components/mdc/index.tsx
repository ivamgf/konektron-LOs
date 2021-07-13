import React from 'react';

import { Mdc } from '../../interfaces/mdc';

let rest: number;

export default function MdcFraction( 
    mdcNum1: number, 
    mdcNum2: number
    ) {
        while(mdcNum2 !== 0) {
            rest = mdcNum1 % mdcNum2;
            mdcNum1 = mdcNum2;
            mdcNum2 = rest;
        }
        let mdc = mdcNum1;
    
        return mdc;        
}
