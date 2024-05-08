import React from 'react';
import { RouteProps } from 'react-router-dom';


interface Route {
  path: string;
  component: React.ComponentType<RouteProps>;
  layout: 'auth' | 'main';
}

const routes: Route[] = [
 
];

export default routes;
