import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../../redux/actions/userActions";

export default function Alert() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { alert } = user;

  useEffect(() => {
    setTimeout(() => dispatch(hideAlert()), 3000);
  }, []);

  return (
    <div className="alert-container">
      <div className="alert">
        <p>{alert}</p>

        <div className="close" onClick={() => dispatch(hideAlert())}>
          X
        </div>
      </div>
    </div>
  );
}
