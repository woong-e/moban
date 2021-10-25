import React, { memo } from 'react'
import { Result, Button } from 'antd'

const Link = require('react-router-dom').Link

const FourZeroFour = memo(() => (
	<Result
		status='404'
		title='404'
		subTitle='Sorry, the page you visited does not exist.'
		extra={<Link to={'/'}><Button type='primary'>Back Home</Button></Link>}
	/>
))

export default FourZeroFour
