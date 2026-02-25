// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="max-w-4xl mx-auto">
      <ul className="space-y-2">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store && store.todos?.map((item) => {
          return (
            <li
              key={item.id}  // React key for list items.
              className="flex justify-between items-center p-4 bg-gray-100 rounded"
              style={{ background: item.background }}>

              {/* Link to the detail page of this todo. */}
              <Link to={"/single/" + item.id} className="text-blue-600 hover:text-blue-800">Link to: {item.title} </Link>

              <p className="text-sm text-gray-600">Open file ./store.js to see the global store that contains and updates the list of colors</p>

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => dispatch({
                  type: "add_task",
                  payload: { id: item.id, color: '#ffa500' }
                })}>
                Change Color
              </button>
            </li>
          );
        })}
      </ul>
      <br />

      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Back home</button>
      </Link>
    </div>
  );
};
