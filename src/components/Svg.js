import React, { memo } from 'react';
import { ms } from '@utils/Responsive';

//menu icon
import Chart from '@icons/chart.svg';

// ILLUSTRATION
// import IllustrationLogin from '../assets/images/illustration-2.svg'

// LOGO
// import Logo from '../assets/icons/logo.svg'
// import LogoSplash from '../assets/icons/logo-splash.svg'
// import LogoGoogle from '@icons/google.svg'
// import LogoFacebook from '../assets/icons/facebook.svg'

const Svg = ({ icon, size = 30, fill, opacity, ...props }) => {
  const icons = {
    // home: Home,
    // favorite: Favorite,
    // profile: Profile,
    // LOGO
    // logo: Logo,
    // logoSplash: LogoSplash,
    // logoGoogle: LogoGoogle,
    // logoFacebook: LogoFacebook,
    // ILLUSTRATION
    // illustrationLogin: IllustrationLogin,

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
