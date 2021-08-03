/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next';
// import { sampleUserData } from '../../../utils/sample-data'
import { metadataLom } from '../../../utils/metadata-lom';

const handler = (_req?: NextApiRequest, res?: NextApiResponse) => {
  try {
    if (!Array.isArray(metadataLom)) {
      throw new Error('Cannot find data');
    }
    res.status(200).json(metadataLom);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
