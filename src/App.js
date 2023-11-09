import React, { Component } from "react";
import Course from "./components/Course";
class App extends Component {
    render() {
        const items = [
            {
                name: "ReacJS",
                time: "30h",
                free: true,
            },
            {
                name: "PHP",
                time: "31h",
                free: false,
            },
            {
                name: "NodeJS",
                time: "32h",
                free: true,
            },
            {
                name: "My SQL",
                time: "33h",
                free: true,
            },
        ];

        const elmCoure = items.map((item, index) => (
            <Course
                key={index}
                name={item.name}
                time={item.time}
                free={item.free}
            />
        ));
        return <div className="row">{elmCoure}</div>;
    }
}

export default App;
