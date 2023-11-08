import React, { Component } from "react";

class Hello extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">ReactJS</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">Item 1</li>
                                <li className="list-group-item">Item 2</li>
                                <li className="list-group-item">Item 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hello;
