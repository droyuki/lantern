import React from 'react';
import { Link } from 'react-router';
import {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import I18n from 'Extension/I18n.jsx';
// Decorators
import { router, flux, i18n } from 'Decorator';
//import SweetAlert from 'sweetalert-react';
// Components
import Header from '../Header.jsx';

@router
@flux
@i18n
class Test extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.submit = this.submit.bind(this);
        this.state = {
            appName: '',
            service: '',
            dataType: ''
        };
    }

    componentWillMount = () => {
        this.flux.on('state.Form', this.flux.bindListener(this.onChange));
    };

    componentWillUnmount = () => {
        this.flux.off('state.Form', this.onChange);
    };

    onChange = () => {
        var store = this.flux.getState('Form');
        this.setState({
            appName: store.appName,
            service: store.service,
            dataType: store.dataType
        });
    };


    submit(e) {
        e.preventDefault();
        var appName = this.state.appName
        var service = this.state.service
        var dataType = this.state.dataType
        //this.setState({showAlert: true})
        this.flux.dispatch('action.Form.submit',
            appName, service, dataType);
        this.props.history.pushState(null, '/');
    };

    handleChange(field, e) {
        var change = {}
        change[field] = e.target.value
        this.setState(change)
    }

    render() {

        return (
            <div className='main-page'>
                <Header />
                <div className={'ui basic center aligned padded segment'}>
                    <div className='ui hidden divider'></div>
                    <div className='ui hidden divider'></div>

                    <div className='ui two column centered stackable grid'>
                        <div className='column'>
                            <h1 className="ui image header">
                                <i className='setting icon'/>
                                <div className="content">
                                    啟動服務
                                </div>
                            </h1>

                            <div className={'ui basic segment'}>


                                <form className='ui form' onSubmit={this.submit}>
                                    <div className="field">
                                        <div className="ui left labeled input">
                                            <a className="ui label">服務名稱</a>
                                            <input type="text" placeholder="App Name" autoFocus={true}
                                                   onChange={this.handleChange.bind(this, "appName")}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left labeled input">
                                            <a className="ui label">可用服務</a>
                                            <select type="select" defaultValue="none"
                                                    className="ui dropdown"
                                                    onChange={this.handleChange.bind(this, "service")}>
                                                <option value="none">None</option>
                                                <option value="twitter">Twitter 文字分析</option>
                                                <option value="stockTA">台股技術指標</option>
                                                <option value="optionTA">台指期貨技術指標</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="inline fields ui left labeled input">
                                        <a className="ui label">資料型態</a>
                                        <select type="select" defaultValue="none" ref="dataType"
                                                className="ui dropdown"
                                                onChange={this.handleChange.bind(this, "dataType")}>
                                            <option value="none">None</option>
                                            <option value="stream">Streaming</option>
                                            <option value="nonStream">Non-Streaming</option>
                                        </select>
                                    </div>

                                    <div className="ui buttons fluid middle center aligned">
                                        <button bsStyle="info"
                                                className="ui large blue submit button"
                                                type="submit">
                                            Submit
                                        </button>
                                        <div className="or"></div>
                                        <button bsStyle="default"
                                                className="ui button">
                                            Clear
                                        </button>
                                    </div>


                                </form>
                            </div>
                            <div className='field ui blue message'>
                                <div><Link to='/forgot'><I18n sign='sign_in.forgot_password'>Forgot your
                                    password?</I18n></Link></div>
                                <div><I18n sign='sign_in.no_account_yet'>No Account yet?</I18n></div>
                            </div>
                            <div className='ui horizontal divider header'><I18n sign='sign_in.or_login_with'>Or Login
                                With</I18n></div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Test;
