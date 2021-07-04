import React from 'react';

import { Mdc } from '../../interfaces/mdc';

let mdcNum1: number;
let mdcNum2: number;
let rest: number;
let mdc: number;

export default function MdcFraction( mdcNum1, mdcNum2, rest, mdc : Mdc[]) {
    const Mdc = (c: number, d: number) => {
    mdcNum1 = c;
    mdcNum2 = d;

    while(mdcNum2 !== 0) {
        rest = mdcNum1 % mdcNum2;
        mdcNum1 = mdcNum2;
        mdcNum2 = rest;
    }
    mdc = mdcNum1;

    return mdc;
    }
}
