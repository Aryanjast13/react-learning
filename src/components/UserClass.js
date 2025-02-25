import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    // console.log("child constructor");
  }
  componentDidMount() {
    //  console.log("child component did Mount");
    this.setState({
      count: "one",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("component updated");
  }

  componentWillUnmount() {
    // console.log("component unmount");
  }

  render() {
    //    console.log("child render called");

    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          count Inc
        </button>
        <h2>Name:{name}</h2>
        <div>
          logged InUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Location:haryana</h2>
      </div>
    );
  }
}
export default UserClass;
