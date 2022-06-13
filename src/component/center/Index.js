import React from "react";
import { useDispatch } from "react-redux";
import {
  addMessage,
  removeMessage,
  showAlert,
} from "../../redux/actions/userActions";
import "../../App.css";

export default function Index() {
  const datas = [
    { id: 1, data: "this is the january month" },
    { id: 2, data: "this is the february month" },
    { id: 3, data: "this is the march month" },
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {datas.map((e) => (
          <div className="flex items" key={e.id}>
            <h1>
              {e.id}
              {e.data}
            </h1>
            <div className="btn">
              <button
                onClick={() => {
                  dispatch(addMessage());
                  dispatch(showAlert("Message Added"));
                }}
              >
                accept
              </button>
              <button onClick={() => dispatch(removeMessage())}>reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
