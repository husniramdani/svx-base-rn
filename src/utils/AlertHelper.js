import {
    ToastAndroid,
    Platform,
    Alert,
} from 'react-native'

export const Toast = (msg) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        Alert.alert(msg);
    }
}