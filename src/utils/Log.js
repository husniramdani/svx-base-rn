import config from '../../config'
const Log = {
    debug(first, second) {
        if (!config.production) {
            if (second !== undefined)
                console.debug(first, second)
            else
                console.debug(first)
        }
    }
}
export default Log