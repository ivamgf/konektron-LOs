import React from 'react';

import { Mmc } from '../../interfaces/mmc';

let rest: number;

export default function MmcFraction(
    mmcNum1: number, 
    mmcNum2: number
    ) {
        let a = mmcNum1;
        let b = mmcNum2;
        let rest: number;
        while(rest !== 0) {
            rest = a % b;
            a = b;
            b = rest;
        }
        let mmc = (mmcNum1 * mmcNum2) / a;
    
        return mmc;
    
}
