export default function *() {
    this.on('action.Form.submit', function *(appName, service, dataType) {
        var obj = {
            "appName": appName,
            "service": service,
            "dataType": dataType
        }
        var message = JSON.stringify(obj, undefined, 2)
        console.log("action get msg: " + message)
        this.dispatch('store.Form.submit', appName,service,dataType);
    });
};