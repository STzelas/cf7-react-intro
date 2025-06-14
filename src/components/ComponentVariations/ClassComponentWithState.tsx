import { Component } from "react";

type State = {
  count: number;
}

// Δεν έχουμε Props οπότε βάζουμε αγκύλες
class ClassComponentWithState extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increaseByOne = () => {
    this.setState({count: this.state.count + 1});
  }

  reset = () => {
    this.setState({count: 0});
  }

  render() {
    return (
      <>
        <div className="space-y-8 pt-12">
          <h1 className="text-center text-2xl font-semibold">Count is {this.state.count}</h1>
          <div className="text-center space-x-4">
            <button
              onClick={this.increaseByOne}
              className={"bg-green-700 text-white py-2 px-4 rounded-xl"}>
              Increase
            </button>
            <button
              className="bg-red-700 text-white py-2 px-4 rounded-xl"
              onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default ClassComponentWithState;