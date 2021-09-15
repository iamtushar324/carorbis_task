import React from 'react'
import styled from 'styled-components'
import BlogBoxForPanel from 'containers/BlogBoxForPanel'
import Button from '@material-ui/core/Button';

export default function AdminPanel(){
	return (
	<MainWrapper>
		<h1>Admin Panel</h1>
		<BlogsContainer>
			<BlogBoxForPanel />
			<BlogBoxForPanel />
			<BlogBoxForPanel />
		</BlogsContainer>
		<BtnContainer><Button>Sign Out</Button></BtnContainer>
	</MainWrapper>
	)
}

//styles 

const MainWrapper = styled.div`
text-align: center;
`

const BlogsContainer = styled.div`
width:100%;
`
const BtnContainer = styled.div`
	position:absolute;
	top:25px;
	right:50px;
`