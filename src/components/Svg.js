import React, { memo } from 'react';
import { ms } from '@utils/Responsive';

// ICONS
import Chart from '@icons/chart.svg';
import ChartX from '@icons/chart-x.svg';
import Thropy from '@icons/thropy.svg';
// LOGO
import GPPAL_M from '@images/gppal-medium.svg';
import GPPAL_L_WHITE from '@images/gppal-L-white.svg';

const Svg = ({ icon, size = 30, fill, opacity, ...props }) => {
  const icons = {
    // LOGO
    gppal_M: GPPAL_M,
    gppal_L_white: GPPAL_L_WHITE,
    // ICONS
    chart: Chart,
    chartX: ChartX,
    thropy: Thropy,
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
