/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import SimpleForm from './SimpleForm'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import '../../../../node_modules/sweetalert/dist/sweetalert.css';
import swal from '../../../../node_modules/sweetalert/dist/sweetalert.min';
import './form.css'
const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'. See note below.
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);
import './main.css'
export default class Form extends React.Component {
    handleSubmit(data) {
        const cmd = (JSON.stringify(data, undefined, 2))
        console.log("submit" + cmd);
        swal("Success!", cmd, "success");
    }

    render() {
        return (
            <div className="form_css ui main text container">
                <Provider store={store}>
                    <SimpleForm onSubmit={this.handleSubmit.bind(this)}/>
                </Provider>
            </div>
        )
    }
}

//ReactDOM.render(<Form/>, document.getElementById("app"))