import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Android',
  description: 'Android integration guide.',
  target: ApplicationType.Native,
  sample: {
    repo: 'kotlin',
    path: 'android-sample-kotlin',
  },
  fullGuide: 'android',
});

export default metadata;
