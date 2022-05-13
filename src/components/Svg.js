import React, { memo } from 'react';
import { ms } from '@utils/Responsive';

// LOGO
import GPPAL_M from '@images/gppal-medium.svg';
import GPPAL_L_WHITE from '@images/gppal-L-white.svg';
// VECTORS
import VECTOR_RED_1 from '@images/vector-red-1.png';
// ICONS
import Chart from '@icons/chart.svg';
import ChartX from '@icons/chart-x.svg';
import Thropy from '@icons/thropy.svg';
import Standing from '@icons/standing.svg';
import Setting from '@icons/setting.svg';
// FLAGS
import QA from '@icons/flags/QA.svg';
import ID from '@icons/flags/ID.svg';
import AR from '@icons/flags/AR.svg';
import AT from '@icons/flags/AT.svg';
import AU from '@icons/flags/AU.svg';
import DE from '@icons/flags/DE.svg';
import ES from '@icons/flags/ES.svg';
import FI from '@icons/flags/FI.svg';
import FR from '@icons/flags/FR.svg';
import GB from '@icons/flags/GB.svg';
import IT from '@icons/flags/IT.svg';
import JP from '@icons/flags/JP.svg';
import MY from '@icons/flags/MY.svg';
import NL from '@icons/flags/NL.svg';
import PT from '@icons/flags/PT.svg';
import TH from '@icons/flags/TH.svg';
import US from '@icons/flags/US.svg';

const Svg = ({ icon, size = 30, fill, opacity, ...props }) => {
  const icons = {
    // LOGO
    gppal_M: GPPAL_M,
    gppal_L_white: GPPAL_L_WHITE,
    // VECTORS
    vector_red_1: VECTOR_RED_1,
    // ICONS
    chart: Chart,
    chartX: ChartX,
    thropy: Thropy,
    standing: Standing,
    setting: Setting,
    // FLAGS
    QA: QA,
    ID: ID,
    AR: AR,
    AT: AT,
    AU: AU,
    DE: DE,
    ES: ES,
    FI: FI,
    FR: FR,
    GB: GB,
    IT: IT,
    JP: JP,
    MY: MY,
    NL: NL,
    PT: PT,
    TH: TH,
    US: US,
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
