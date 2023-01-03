import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const { logIn } = require("./actions/user");
const { userSlice } = require("./reducers/userSlice");

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loadings, setLoadings] = useState({
    123213123: { type: "LOGIN_LOADING" },
    645655622: { type: "LOGOUT_LOADING" },
    765756241: { type: "ERROR_LOADING" },
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState({});

  const onClick = useCallback(async () => {
    setLoadings((prev) => ({
      ...prev,
      [new Data().valueOf()]: { type: "LOGIN_LOADING" },
    }));
    try {
      const response = await axiox.post("/login");
      setDone(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onChangeEmail = useCallback((e) => {
    dispatch(userSlice.actions.setEmail(e.target.value));
  }, []);

  const onChangePassword = useCallback((e) => {
    dispatch(userSlice.actions.setPassword(e.target.value));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        userSlice.actions.setLoginForm({
          email,
          password,
        })
      );
    },
    [dispatch, email, password]
  );

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
      <form onSubmit={onSubmit}>
        <input type="email" onChange={onChangeEmail} />
        <input type="password" onChange={onChangePassword} />
      </form>
    </div>
  );
};

export default App;
