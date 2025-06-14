import {Component} from "react";

/**
 * Δε χρησιμοποιείτε πια αυτή η λογική
 * με το extends και το render.
 * Τώρα ποια έχουμε FunctionalComponents
 */
class ClassComponent extends Component {
    render() {
        const title = "Is a Class Component"
        return <h1 className={"text-center mt-12 text-xl font-bold"}>{title}</h1>
    }
}

export default ClassComponent