import React, { Component } from "react";
import Course from "./components/Course";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import items from "./mocks/task";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items,
        };
    }

    render() {
        console.log(this.state.items);
        let items = this.state.items;
        return (
            <div className="row">
                <Title />
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                <Form />
                {/* FORM : END */}
                {/* LIST : START */}
                <List items={items} />
            </div>
        );
    }
}

export default App;
