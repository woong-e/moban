import React, {memo} from 'react';
import { ComponentTitleWrapperStyle } from './pageHeader.style';

const PageTitle = memo((props) =>
	<ComponentTitleWrapperStyle className="teoComponentTitle">{props.children}</ComponentTitleWrapperStyle>
)

export default PageTitle
