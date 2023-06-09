import React, { Suspense, useEffect } from "react";
// import React, { Component, , lazy } from "react";
// import { Route, Routes } from "react-router-dom";
import Login from "./user-pages/Login";
import Register from "./user-pages/Register";
import Spinner from "../app/shared/Spinner";
import Dashboard from "./dashboard/Dashboard";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { navigate, useLocation, useRouter } from "wouter";
import Edit from "../components/Edit";
// const Dashboard = lazy(() => import("./dashboard/Dashboard"));

// const Buttons = lazy(() => import("./basic-ui/Buttons"));
// const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

// const BasicElements = lazy(() => import("./form-elements/BasicElements"));

// const BasicTable = lazy(() => import("./tables/BasicTable"));

// const Mdi = lazy(() => import("./icons/Mdi"));

// const ChartJs = lazy(() => import("./charts/ChartJs"));

// const Login = lazy(() => import("../components/Login"));
// const Register = lazy(() => import("./user-pages/Register"));

// class AppRoutes extends Component {
//   render() {
//     let navigate = useNavigate();
//     return (
//       <Suspense fallback={<Spinner />}>
//         <Switch>
//           <Route exact path="/" component={Dashboard} />

//           {/* <Route path="/basic-ui/buttons" component={ Buttons } /> */}
//           {/* <Route path="/basic-ui/dropdowns" component={ Dropdowns } /> */}

//           {/* <Route path="/form-Elements/basic-elements" component={ BasicElements } /> */}

//           {/* <Route path="/tables/basic-table" component={ BasicTable } /> */}

//           {/* <Route path="/icons/mdi" component={ Mdi } /> */}

//           {/* <Route path="/charts/chart-js" component={ ChartJs } /> */}

//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />

//           <Route path="/error-pages/error-404" component={Error404} />
//           <Route path="/error-pages/error-500" component={Error500} />

//           <Redirect to="/" />
//         </Switch>
//       </Suspense>
//     );
//   }
// }

// export default AppRoutes;

// import React from "react";

const AppRoutes = () => {
  const getLocaldata = localStorage.getItem("signUP");
  // const Error404 = lazy(() => import("./error-pages/Error404"));
  // const Error500 = lazy(() => import("./error-pages/Error500"));
  
  const [location, setLocation] = useLocation();

  if (location == "/") {
    if (getLocaldata) {
      setLocation("/");
    } else {
      setLocation("/register");
    }
  }
  // else {
  //   setLocation("/");
  // }

  // if (location == "/register") {
  //   withRouter(Register)
  // } else if (location == "/login") {
  //   return <Login />;
  // }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/edit/:id" component={Edit} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRoutes;
