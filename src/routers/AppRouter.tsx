import React, { memo, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from '../containers/main'
import Calculator from '../containers/calculator'
import FourZeroFour from '../containers/common/Page/404'

const routes = [
	{
		path: '',
		exact: true,
		component: Main
	},
	{
		path: 'calculator',
		exact: true,
		component: Calculator
	},
	// 아래 라우터는 맨 마지막에 위치해야 함
	{
		path: '*',
		component: FourZeroFour
	}
]

const AppRouter = memo(() => {
	//
	useEffect(() => {

	}, [])

	return (
		<Switch>
			{
				routes.map(({ path, exact, ...otherProps }, index) => (
					<Route
						exact={exact}
						key={`${index}/${path}`}
						path={`/${path}`}
						{...otherProps}
					/>
				))
			}
		</Switch>
	)
})

export default AppRouter
