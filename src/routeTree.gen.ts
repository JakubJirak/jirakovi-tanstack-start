/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as WeatherRouteRouteImport } from './routes/weather/route'
import { Route as TodologgedRouteRouteImport } from './routes/todologged/route'
import { Route as LoginRouteRouteImport } from './routes/login/route'
import { Route as CalendarRouteRouteImport } from './routes/calendar/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as OthersIndexRouteImport } from './routes/others/index'
import { Route as DemoTanstackQueryRouteImport } from './routes/demo/tanstack-query'
import { Route as OthersSpalickyRouteRouteImport } from './routes/others/spalicky/route'
import { Route as OthersPokemonsRouteRouteImport } from './routes/others/pokemons/route'
import { Route as OthersGradesRouteRouteImport } from './routes/others/grades/route'
import { Route as DemoStartServerFuncsRouteImport } from './routes/demo/start.server-funcs'
import { Route as DemoStartApiRequestRouteImport } from './routes/demo/start.api-request'
import { ServerRoute as ApiDemoNamesServerRouteImport } from './routes/api.demo-names'

const rootServerRouteImport = createServerRootRoute()

const WeatherRouteRoute = WeatherRouteRouteImport.update({
  id: '/weather',
  path: '/weather',
  getParentRoute: () => rootRouteImport,
} as any)
const TodologgedRouteRoute = TodologgedRouteRouteImport.update({
  id: '/todologged',
  path: '/todologged',
  getParentRoute: () => rootRouteImport,
} as any)
const LoginRouteRoute = LoginRouteRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const CalendarRouteRoute = CalendarRouteRouteImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const OthersIndexRoute = OthersIndexRouteImport.update({
  id: '/others/',
  path: '/others/',
  getParentRoute: () => rootRouteImport,
} as any)
const DemoTanstackQueryRoute = DemoTanstackQueryRouteImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRouteImport,
} as any)
const OthersSpalickyRouteRoute = OthersSpalickyRouteRouteImport.update({
  id: '/others/spalicky',
  path: '/others/spalicky',
  getParentRoute: () => rootRouteImport,
} as any)
const OthersPokemonsRouteRoute = OthersPokemonsRouteRouteImport.update({
  id: '/others/pokemons',
  path: '/others/pokemons',
  getParentRoute: () => rootRouteImport,
} as any)
const OthersGradesRouteRoute = OthersGradesRouteRouteImport.update({
  id: '/others/grades',
  path: '/others/grades',
  getParentRoute: () => rootRouteImport,
} as any)
const DemoStartServerFuncsRoute = DemoStartServerFuncsRouteImport.update({
  id: '/demo/start/server-funcs',
  path: '/demo/start/server-funcs',
  getParentRoute: () => rootRouteImport,
} as any)
const DemoStartApiRequestRoute = DemoStartApiRequestRouteImport.update({
  id: '/demo/start/api-request',
  path: '/demo/start/api-request',
  getParentRoute: () => rootRouteImport,
} as any)
const ApiDemoNamesServerRoute = ApiDemoNamesServerRouteImport.update({
  id: '/api/demo-names',
  path: '/api/demo-names',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/calendar': typeof CalendarRouteRoute
  '/login': typeof LoginRouteRoute
  '/todologged': typeof TodologgedRouteRoute
  '/weather': typeof WeatherRouteRoute
  '/others/grades': typeof OthersGradesRouteRoute
  '/others/pokemons': typeof OthersPokemonsRouteRoute
  '/others/spalicky': typeof OthersSpalickyRouteRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/others': typeof OthersIndexRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/calendar': typeof CalendarRouteRoute
  '/login': typeof LoginRouteRoute
  '/todologged': typeof TodologgedRouteRoute
  '/weather': typeof WeatherRouteRoute
  '/others/grades': typeof OthersGradesRouteRoute
  '/others/pokemons': typeof OthersPokemonsRouteRoute
  '/others/spalicky': typeof OthersSpalickyRouteRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/others': typeof OthersIndexRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/calendar': typeof CalendarRouteRoute
  '/login': typeof LoginRouteRoute
  '/todologged': typeof TodologgedRouteRoute
  '/weather': typeof WeatherRouteRoute
  '/others/grades': typeof OthersGradesRouteRoute
  '/others/pokemons': typeof OthersPokemonsRouteRoute
  '/others/spalicky': typeof OthersSpalickyRouteRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/others/': typeof OthersIndexRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/calendar'
    | '/login'
    | '/todologged'
    | '/weather'
    | '/others/grades'
    | '/others/pokemons'
    | '/others/spalicky'
    | '/demo/tanstack-query'
    | '/others'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/calendar'
    | '/login'
    | '/todologged'
    | '/weather'
    | '/others/grades'
    | '/others/pokemons'
    | '/others/spalicky'
    | '/demo/tanstack-query'
    | '/others'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  id:
    | '__root__'
    | '/'
    | '/calendar'
    | '/login'
    | '/todologged'
    | '/weather'
    | '/others/grades'
    | '/others/pokemons'
    | '/others/spalicky'
    | '/demo/tanstack-query'
    | '/others/'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CalendarRouteRoute: typeof CalendarRouteRoute
  LoginRouteRoute: typeof LoginRouteRoute
  TodologgedRouteRoute: typeof TodologgedRouteRoute
  WeatherRouteRoute: typeof WeatherRouteRoute
  OthersGradesRouteRoute: typeof OthersGradesRouteRoute
  OthersPokemonsRouteRoute: typeof OthersPokemonsRouteRoute
  OthersSpalickyRouteRoute: typeof OthersSpalickyRouteRoute
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
  OthersIndexRoute: typeof OthersIndexRoute
  DemoStartApiRequestRoute: typeof DemoStartApiRequestRoute
  DemoStartServerFuncsRoute: typeof DemoStartServerFuncsRoute
}
export interface FileServerRoutesByFullPath {
  '/api/demo-names': typeof ApiDemoNamesServerRoute
}
export interface FileServerRoutesByTo {
  '/api/demo-names': typeof ApiDemoNamesServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/demo-names': typeof ApiDemoNamesServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/demo-names'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/demo-names'
  id: '__root__' | '/api/demo-names'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiDemoNamesServerRoute: typeof ApiDemoNamesServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/weather': {
      id: '/weather'
      path: '/weather'
      fullPath: '/weather'
      preLoaderRoute: typeof WeatherRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/todologged': {
      id: '/todologged'
      path: '/todologged'
      fullPath: '/todologged'
      preLoaderRoute: typeof TodologgedRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/calendar': {
      id: '/calendar'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/others/': {
      id: '/others/'
      path: '/others'
      fullPath: '/others'
      preLoaderRoute: typeof OthersIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/others/spalicky': {
      id: '/others/spalicky'
      path: '/others/spalicky'
      fullPath: '/others/spalicky'
      preLoaderRoute: typeof OthersSpalickyRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/others/pokemons': {
      id: '/others/pokemons'
      path: '/others/pokemons'
      fullPath: '/others/pokemons'
      preLoaderRoute: typeof OthersPokemonsRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/others/grades': {
      id: '/others/grades'
      path: '/others/grades'
      fullPath: '/others/grades'
      preLoaderRoute: typeof OthersGradesRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/demo/start/server-funcs': {
      id: '/demo/start/server-funcs'
      path: '/demo/start/server-funcs'
      fullPath: '/demo/start/server-funcs'
      preLoaderRoute: typeof DemoStartServerFuncsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/demo/start/api-request': {
      id: '/demo/start/api-request'
      path: '/demo/start/api-request'
      fullPath: '/demo/start/api-request'
      preLoaderRoute: typeof DemoStartApiRequestRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/api/demo-names': {
      id: '/api/demo-names'
      path: '/api/demo-names'
      fullPath: '/api/demo-names'
      preLoaderRoute: typeof ApiDemoNamesServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CalendarRouteRoute: CalendarRouteRoute,
  LoginRouteRoute: LoginRouteRoute,
  TodologgedRouteRoute: TodologgedRouteRoute,
  WeatherRouteRoute: WeatherRouteRoute,
  OthersGradesRouteRoute: OthersGradesRouteRoute,
  OthersPokemonsRouteRoute: OthersPokemonsRouteRoute,
  OthersSpalickyRouteRoute: OthersSpalickyRouteRoute,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
  OthersIndexRoute: OthersIndexRoute,
  DemoStartApiRequestRoute: DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute: DemoStartServerFuncsRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiDemoNamesServerRoute: ApiDemoNamesServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
