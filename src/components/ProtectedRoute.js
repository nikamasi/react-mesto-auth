import { Redirect, Route } from "react-router-dom";
import Header from "./Header";

function ProtectedRoute({ component: Component, onLogout, email, ...props }) {
  const navItems = (
    <>
      <p className="header__nav-element">{email}</p>
      <button
        className="header__nav-element header__nav-element_dark link"
        onClick={onLogout}
      >
        Выйти
      </button>
    </>
  );
  
  return (
    <Route>
      {props.isLogged ? (
        <>
          <Header isLogged={props.isLogged} navItems={navItems} />
          <Component {...props} />
        </>
      ) : (
        <>
          <Header
            onLogout={props.handleLogout}
            email={props.email}
            isLogged={props.isLogged}
            navItems={<></>}
          />
          <Redirect to="/sign-in" />
        </>
      )}
    </Route>
  );
}

export default ProtectedRoute;
