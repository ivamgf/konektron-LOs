import React from 'react';

import { Mdc } from '../../interfaces/mdc';

let mdcNum1: number;
let mdcNum2: number;
let rest: number;
let mdc: [];

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
