import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("paent constructor");
  }

  componentDidMount() {
    // console.log("Parent component did Mount"); //main then
  }

  render() {
    // console.log("prent render called");

    return (
      <div className="about">
        <h1>About</h1>
        <UserClass name="first child (UserClass)" />
      </div>
    );
  }
}

export default About;
