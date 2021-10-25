import React, { memo, useEffect } from 'react'
import { Layout } from 'antd'

import AppRouter from '../../../routers/AppRouter'
import { Header } from '../../../components/common/antd'

const LayoutContainer = memo(() => {
	//
	useEffect(() => {

	}, [])

	const { Content, Footer } = Layout

	return (
		<Layout style={{ minHeight: '100vh' }}>

			<Layout>
				<Header />

				<Content style={{ padding: 40 }}>
					<AppRouter />
				</Content>

				<Footer style={{ textAlign: 'center' }}>
					COPYRIGHT © Woonge Inc. ALL RIGHTS RESERVED
				</Footer>
			</Layout>
		</Layout>
	)
})

export default LayoutContainer
