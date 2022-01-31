import { scale, moderateScale, verticalScale } from 'react-native-size-matters/extend'
export const xs = (number) => scale(number)
export const vs = (number) => verticalScale(number)
export const ms = (number) => moderateScale(number, 0.25)