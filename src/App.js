import React from 'react';
import './App.css';
import FormCode from "./components/FormCode";

class App extends React.Component {
    submit = (values) => {
        alert("submitted");
        console.log(values);
    }
    render() {
        return (
            <div className="container">
                <h3 className="jumbotron">Redux Form Validation</h3>
                <FormCode onSubmit={this.submit} />
            </div>

        )
    }
}

export default App;