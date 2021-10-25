import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LayoutContainer from '../containers/common/Layout/LayoutContainer'

const PublicRoutes = () => (
	<BrowserRouter>
		<Switch>
			<Route path={'/'} component={LayoutContainer} />
		</Switch>
	</BrowserRouter>
)

export default PublicRoutes
