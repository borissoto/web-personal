import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  //console.log(props);

  const user = null;

  if (!user) {
    return (
      // fragment?
      <>
        <Route path='/admin/login' component={AdminSignIn} />
        <Redirect to='/admin/login' />
      </>
    );
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className='layout-admin'
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className='layout-admin__header'>
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className='layout-admin__content'>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className='layout-admin__footer'>Copyright</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  // const {routes} = props; // es lo mismo que hacer en la funcion ({routes})
  //console.log(routes);
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );

  //   return routes.map((route, index) => (
  //     <Route
  //       key={index}
  //       path={route.path}
  //       exact={route.exact}
  //       component={route.component}
  //     />
  //   ));
}
