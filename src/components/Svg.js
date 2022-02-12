import React, { memo } from 'react';
import { ms } from '@utils/Responsive';

// ICONS
import Chart from '@icons/chart.svg';
// LOGO
import GPPAL_large from '@images/gppal-large.svg';

const Svg = ({ icon, size = 30, fill, opacity, ...props }) => {
  const icons = {
    // LOGO
    gppal_large: GPPAL_large,
    // ICONS
    chart: Chart,
  };

  const Icon = icons[icon]
  return (
    <Icon
      width={ms(size)}
      fill={fill || null}
      height={ms(size)}
      fillOpacity={opacity || 1}
      {...props}
    />
  );
}
export default memo(Svg)
