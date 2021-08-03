/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';

import { DataLOs } from '../interfaces';

type ListDetailProps = {
  item: DataLOs;
};

const ListDetail = ({ item: datalos }: ListDetailProps) => (
  <div>
    <h1>Detail for {datalos.name}</h1>
    <p>ID: {datalos.id}</p>
    <p>Version: {datalos.version}</p>
    <p>Author: {datalos.author}</p>
    <p>Institution: {datalos.institution}</p>
    <p>Subject: {datalos.subject}</p>
  </div>
);

export default ListDetail;
