/**
 * Created by WeiChen on 2016/1/23.
 */
export default function *() {
    // 初始化一個 state 用來存放 store 的資料
    var store = this.getState('Form', {
        appName: '',
        service: '',
        dataType:''
    });

    this.on('store.Form.submit', function *(appName, service, dataType) {
        try {
            var res = yield this.request
                .post('/kafka')
                .send({
                    appName: appName,
                    service: service,
                    dataType: dataType
                });
            if (res.status != 200) {
                return;
            }
        } catch(e) {
            console.log(e);
        }

        // Updating store
        store.appName = appName;
        store.service = service;
        store.dataType = dataType;

        // State(Store) 已經更新，React 元件會被觸發更新
        this.dispatch('state.Form');

    });
};