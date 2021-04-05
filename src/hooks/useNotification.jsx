import { Toastme } from 'toastmejs';

const config = {
    timeout: 5000,
    positionY: "bottom", // top or bottom
    positionX: "right", // right left, center
    distanceY: 20, // Integer value
    distanceX: 20, // Integer value
    zIndex: 100, // Integer value
    theme: "dark", // default, ligh or  dark (leave empty for "default" theme)
    duplicates: false // true or false - by default it's false
};

export const notification = new Toastme(config);

export const useNotification = () => {

    const toastSuccess = str => notification.success(str);

    const toastWarning = str => notification.warning(str);

    const toastInfo = str => notification.info(str);

    const toastError = str => notification.error(str);

    const toastSimple = str => notification.default(str);

    return {
        toastSuccess,
        toastWarning,
        toastInfo,
        toastError,
        toastSimple
    };
}
