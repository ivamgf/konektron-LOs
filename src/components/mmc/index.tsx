import React from 'react';

import { Mmc } from '../../interfaces/mmc';

let mmcNum1: number;
let mmcNum2: number;
let rest: number;
let mmc: number;

export default function MmcFraction(
    mmcNum1: number, 
    mmcNum2: number, 
    rest: number, 
    mmc : Mmc[]
) {
    const Mmc = (a, b) => {
        mmcNum1 = a;
        mmcNum2 = b;
    
        while(mmcNum2 !== 0) {
            rest = mmcNum1 % mmcNum2;
            mmcNum1 = mmcNum2;
            mmcNum2 = rest;
        }
        this.mmc = (mmcNum1 * mmcNum2) / mmcNum1;
    
        return { mmcNum1, mmc };
    }
}
