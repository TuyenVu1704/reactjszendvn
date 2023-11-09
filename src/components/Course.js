import React, { Component } from "react";
import Lesson from "./Lesson";

class Course extends Component {
    showButtonFree() {
        const isFree = this.props.free;
        if (isFree === true) {
            return (
                <div>
                    <button type="button" class="btn btn-warning">
                        View
                    </button>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>
                    <div className="panel-body">
                        <p>{this.props.time}</p>
                        <ul className="list-group">
                            <Lesson />
                            <Lesson />
                            <Lesson />
                        </ul>
                    </div>
                    {this.showButtonFree()}
                </div>
            </div>
        );
    }
}

export default Course;
