import { StyleSheet } from 'react-native'
import { xs, ms } from './Responsive'
import {
    main, primary, warning, secondary, danger, success,
    light, grey, grey1, grey2, orange, orange1, red,
    homeBackground
} from './Color'

export const createShadow = (elevation = 3) => {
    elevation = Number(elevation)
    let offset = elevation / 3
    let shadowOpacity = offset * 0.22
    let shadowRadius = shadowOpacity * 10
    return {
        backgroundColor: '#fff',
        elevation,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: offset,
        },
        shadowOpacity,
        shadowRadius,
    }
}

export const createFont = (size) => ({
    ['_' + size]: {
        fontSize: ms(size)
    }
})

//position Helper
export const p = StyleSheet.create({
    absolute: {
        position: 'absolute'
    },
    relative: {
        position: 'relative'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row'
    },
    rowExtend: {
        flexDirection: 'row',
        marginHorizontal: xs(-8)
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    textVerticalCenter: {
        textAlignVertical: 'center'
    },
    wrap: {
        flexWrap: 'wrap'
    }
})
//color Helper
export const c = StyleSheet.create({
    // text color
    primary: {
        color: primary
    },
    secondary: {
        color: secondary
    },
    success: {
        color: success
    },
    warning: {
        color: warning
    },
    danger: {
        color: danger
    },
    light: {
        color: light
    },
    grey: {
        color: grey
    },
    grey1: {
        color: grey1
    },
    grey2: {
        color: grey2
    },
    orange: {
        color: orange
    },
    orange1: {
        color: orange1
    },
    main: {
        color: main
    },

    // background
    bgLight: {
        backgroundColor: light
    },
    bgGrey1: {
        backgroundColor: grey1
    },
    bgGrey2: {
        backgroundColor: grey2
    },
    bgSuccess: {
        backgroundColor: success
    },
    bgRed: {
        backgroundColor: red
    },
    bgMain: {
        backgroundColor: main
    },
    homeBackground: {
        backgroundColor: homeBackground
    },
})

// font Helper
export const f = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    normal: {
        fontWeight: 'normal'
    },
    thin: {
        fontWeight: '100'
    },
    italic: {
        fontStyle: 'italic'
    },
    underline: {
        textDecorationLine: 'line-through'
    },
    ...createFont(8),
    ...createFont(10),
    ...createFont(12),
    ...createFont(14),
    ...createFont(16),
    ...createFont(18),
    ...createFont(20),
    ...createFont(24),
    ...createFont(32),
    ...createFont(46),
    ...createFont(54),
    gotham: {
        fontFamily: 'Gotham-Book'
    },
    gothamBold: {
        fontFamily: 'Gotham Bold'
    },
    openSans: {
        fontFamily: "OpenSans"
    },
    openSansBold: {
        fontFamily: "OpenSans-Bold"
    },
    openSansLight: {
        fontFamily: "OpenSans-Light",
    }
})

//box helper
const loopStyle = (key, value) => ({
    [key + 0]: {
        [value]: xs(0)
    },
    [key + 1]: {
        [value]: xs(5)
    },
    [key + 2]: {
        [value]: xs(10)
    },
    [key + 3]: {
        [value]: xs(15)
    },
    [key + 4]: {
        [value]: xs(20)
    },
    [key + 5]: {
        [value]: xs(25)
    },
    [key + 16]: {
        [value]: xs(16)
    },
    [key + 8]: {
        [value]: xs(8)
    },
})
export const b = StyleSheet.create({
    ...loopStyle('mb', 'marginBottom'),
    ...loopStyle('mt', 'marginTop'),
    ...loopStyle('mr', 'marginRight'),
    ...loopStyle('ml', 'marginLeft'),
    ...loopStyle('mx', 'marginHorizontal'),
    ...loopStyle('my', 'marginVertical'),
    ...loopStyle('pb', 'paddingBottom'),
    ...loopStyle('pt', 'paddingTop'),
    ...loopStyle('pl', 'paddingLeft'),
    ...loopStyle('pr', 'paddingRight'),
    ...loopStyle('px', 'paddingHorizontal'),
    ...loopStyle('py', 'paddingVertical'),
    ...loopStyle('p', 'padding'),
    ...loopStyle('m', 'margin'),
    bordered: {
        borderWidth: 1,
        borderColor: '#dadada'
    },
    noBorder: {
        borderWidth: 0
    },
    borderBottom: {
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: "#dadada"
    },
    container: {
        flex: 1
    },
    noRounded: {
        borderRadius: 0
    },
    roundedLow: {
        borderRadius: xs(5)
    },
    rounded: {
        borderRadius: xs(10)
    },
    roundedHigh: {
        borderRadius: xs(20)
    },
    roundedTop: {
        borderTopRightRadius: xs(35),
        borderTopLeftRadius: xs(35),
    },
    roundedLowBottom: {
        borderBottomRightRadius: xs(23),
        borderBottomLeftRadius: xs(23),
    },
    roundedBottom: {
        borderBottomRightRadius: xs(35),
        borderBottomLeftRadius: xs(35),
    },
    shadow: createShadow(2),
    shadowLow: createShadow(1),
    shadowHigh: createShadow(3),
    visible: {
        display: 'flex'
    },
    hidden: {
        display: 'none',
        position: 'relative'
    },
    w50: {
        width: '50%'
    },
    w100: {
        width: '100%'
    },
    h100: {
        height: '100%'
    }
})