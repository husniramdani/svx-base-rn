import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ms } from '@utils/Responsive'
import { primary, light, grey } from '@utils/Colors'
import { b } from '@utils/StyleHelper'

const Button = ({
  disabled, link, block, children, color = primary,
  width, height, sm = false, lg = false, outline = false,
  textColor = light, style, textStyle, ...props
}) => {
  const s = StyleSheet.create({
    container: {
      height: sm ? ms(25) : lg ? ms(44) : height ? ms(height) : ms(30),
      width: block ? '100%' : width ? ms(width) : null,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: ms(10)
    },
    outline: {
      borderWidth: ms(1),
      borderColor: disabled ? grey : color
    },
    fill: {
      backgroundColor: disabled ? grey : color
    },
    link: {
      backgroundColor: "pink",
      paddingVertical: 2,
      paddingHorizontal: 10,
      ...b.roundedLow
    },
    text: {
      color: link || outline ? color : textColor,
      fontSize: ms(lg ? 16 : 12),
    }
  })
  return (
    <TouchableOpacity
      disabled={disabled}
      style={link ? [s.link, style] : [s.container, b.roundedLow, outline ? s.outline : s.fill, style]}
      {...props}
    >
      {typeof children == 'string' && <Text style={[s.text, textStyle]}>
        {children}
      </Text>
      }
      {typeof children != 'string' && <>{children}</>}
    </TouchableOpacity>
  )
}

export default memo(Button)