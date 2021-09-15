import React , {useState} from 'react'
import styled from 'styled-components'
import { baseColors } from 'styles/baseStyles'
import Button from '@material-ui/core/Button';

export default function BlogBoxForPanel(props){
	return (
		<MainWrapper>
			<Heading>Title of Blogs</Heading>
			<Descriptions>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Descriptions>
			<ApproveBtn variant="contained" color="primary" style={{position:'absolute', bottom:-18 , right:40}}>Approve</ApproveBtn>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	text-align:center;
	width:50%;
	margin:40px auto;
	background-color:${baseColors.surface};
	padding:2rem 3rem;
	border-radius:10px;
	min-width:400px;
	position:relative;
`
const ApproveBtn = styled(Button)`
	position:absolute;
	right:30px;
	bottom:10px;
`
const Heading = styled.h2`
	text-align: center;
	margin:2rem;
`
const Descriptions = styled.p`
`
