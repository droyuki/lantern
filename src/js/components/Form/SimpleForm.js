import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['appName', 'dataType', 'framework'];
class SimpleForm extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };


    render() {
        const {
            fields: {appName, dataType, framework},
            handleSubmit,
            resetForm,
            submitting
            } = this.props;
        return (
            <div className="ui container">
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui blue image header">
                            <div className="content">
                                Create Service
                            </div>
                        </h2>
                        <form className="ui large form" onSubmit={handleSubmit}>
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left labeled input">
                                        <a className="ui label">App Name</a>
                                        <input type="text" placeholder="App Name" {...appName}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left labeled input">
                                        <a className="ui label">Framework</a>
                                        <select type="select" {...framework} defaultValue="none"
                                                className="ui dropdown">
                                            <option value="spark">Spark</option>
                                            <option value="storm">Storm</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="inline fields ui left labeled input">
                                    <a className="ui label">Data Type</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" {...dataType} value="stream"
                                                   checked={dataType.value === 'stream'}
                                            />
                                            <label>Stream</label>
                                        </div>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" {...dataType} value="nonStream"
                                                   checked={dataType.value === 'nonStream'}
                                            />
                                            <label>Non-Stream</label>
                                        </div>

                                    </div>
                                </div>

                                <div className="ui buttons middle aligned">
                                    <button disabled={submitting} onClick={handleSubmit} bsStyle="info"
                                            className="ui large blue submit button">
                                        {submitting ? <i/> : <i/>}Submit
                                    </button>
                                    <div className="or"></div>
                                    <button disabled={submitting} onClick={resetForm} bsStyle="default"
                                            className="ui button">
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="ui message">
                            Need some help ? <a href="#">Help</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'simple',
    fields
})(SimpleForm);