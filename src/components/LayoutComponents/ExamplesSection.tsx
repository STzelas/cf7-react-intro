import {NavLink} from "react-router";

const ExamplesSection = () => {
  return (
    <>
      <div className="bg-gray-200 py-5">
        <h1 className="text-center font-semibold text-lg">EXAMPLES</h1>
        <ul className="container mx-auto mt-4 flex justify-center space-x-4">
          <li>
            <NavLink
              to="/examples/name-changer"
              className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-2" : "text-cf-gray"}
            >
              Name Changer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/examples/online-status"
              className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-2" : "text-cf-gray"}
            >
              Online Status
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/examples/uncontrolled-input"
              className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-2" : "text-cf-gray"}
            >
              Uncontrolled Input
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ExamplesSection;