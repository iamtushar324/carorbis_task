import React , {useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function RegisterBox(props){
	const [data , setData] = useState({})
	const history = useHistory

	const handleRegister = (e)=>{
		// console.log(data)
		// axios.post('/api/users/register' , {...data}).then((res)=>{
		// 	console.log(res);
		// 	if(res.data.success){
		// 		history.push('/feeds');
		// 	}else if(!res.success){
		// 		alert("Unable to Login , Please Try Again Later")
		// 	}
		// }).catch((err)=>{
		// 	console.log(err)
		// })
	}


	return (
		<MainWrapper>
			<Heading>Register</Heading>
			<Text id="name" style={{marginBottom:'1.5rem'}} onChange={(e)=>{
				setData((prev)=>{return {...prev , name:e.target.value}})

			}} label="Name" variant="outlined" />
			<Text id="email" style={{marginBottom:'1.5rem'}} onChange={(e)=>{
				setData((prev)=>{return {...prev , username:e.target.value}})

			}} label="Email-Id" variant="outlined" />
			<Text id="password" onChange={(e)=>{
				setData((prev)=>{return {...prev , password:e.target.value}})
			}}  style={{marginBottom:'1.5rem'}} label="Password" type="password" variant="outlined" />
			<BtnContainer>
			<Button onClick={handleRegister} variant="contained" color="primary">Register</Button>
			<Button variant="outlined" 
			onClick={()=>{
				props.setIsLogin(true)
			}}
			>Login</Button>
			</BtnContainer>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
text-align:center
`
const Text = styled(TextField)`
width: 70%;
`
const Heading = styled.h2`
	text-align: center;
	margin:2rem;
`
const BtnContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
margin-bottom:1.5rem;
`