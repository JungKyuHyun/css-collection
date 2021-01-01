import React, { memo } from 'react';
import { AnimatedBanner1 } from './AnimatedBanner1';
import { BannerTypes } from './type';

const BANNERS_LOOKUP_TABLE = {
  [BannerTypes.Animated1]: AnimatedBanner1,
};

export interface BannersProps {
  type?: BannerTypes;
}

export const Banners = memo<BannersProps>(({ type }) => {
  if (type === undefined) {
    return null;
  }
  return React.createElement(BANNERS_LOOKUP_TABLE[type]);
});
