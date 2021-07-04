import React from 'react';

let mmcNum1: number;
let mmcNum2: number;
let rest: number;
let mmc: number;

const Mmc = (a, b) => {
    mmcNum1 = a;
    mmcNum2 = b;

    while(mmcNum2 !== 0) {
        rest = mmcNum1 % mmcNum2;
        mmcNum1 = mmcNum2;
        mmcNum2 = rest;
    }
    mmc = (mmcNum1 * mmcNum2) / mmcNum1;

    return { mmcNum1, mmc };
}


export default Mmc;