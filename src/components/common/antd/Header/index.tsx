import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import { Layout, Space, Avatar, Dropdown, Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const HeaderStyle = styled(Layout.Header)`
  padding: 0 30px;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;

  .right {
    display: flex;
    float: right;
    height: 50px;
    margin-left: auto;
    overflow: hidden;

    .action {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 12px;
      cursor: pointer;
      transition: all 0.3s;

			a {
				color: #333
			}
      > span {
        vertical-align: middle;
      }

      .ant-avatar {
        margin-right: 8px;
      }

      &:hover {
        background-color: #e4e4e4;
      }

      &:global(.opened) {
        background-color: #e4e4e4;
      }
    }
  }

  @media only screen and (max-width: 799px) {
    padding: 0 15px;
  }
`

const Header = memo(() => {
	const menu = (
		<Menu>
			<Menu.Item key="0">
				<LogoutOutlined /> 로그아웃
			</Menu.Item>
		</Menu>
	)

	useEffect(() => {

	}, [])

	return (
		<HeaderStyle>
			<Space className='right'>
				<div className='action'>
					<Dropdown overlay={menu}>
						<div onClick={e => e.preventDefault()}>
							<Avatar /> 관리자
						</div>
					</Dropdown>
				</div>
			</Space>
		</HeaderStyle>
	)
})

export default Header
