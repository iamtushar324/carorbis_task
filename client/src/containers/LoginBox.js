import React , {useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {axios} from 'helpers'
import { useHistory } from 'react-router-dom';

export default function LoginBox(props){
	const history = useHistory()

	const [data, setData] = useState({})
	const handleLogin = ()=>{
		// axios.post('/users/login' , {...data}).then((res)=>{
		// 	if(res.data.success){
		// 		history.push('/feeds');
		// 	}else if(!res.success){
		// 		alert("Unable to Login , Please Try Again Later")
		// 	}
		// }).catch((err)=>{
		// 	alert(err.message)
		// })

		let dataR = {...data}
		fetch(process.env.REACT_APP_BASE_URL + '/api/users/login' , {
			 method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
			body:JSON.stringify(dataR)
		}).then((res)=>res.json()).then((res)=>{console.log(res)})
	}
	return (
		<MainWrapper>
			<Heading>Login</Heading>
			<Text id="username" onChange={(e)=>{
				setData((prev)=>{return {...prev , username:e.target.value}})
			}} style={{marginBottom:'1.5rem'}} label="Username" variant="outlined" />
			<Text id="password" onChange={(e)=>{
				setData((prev)=>{return {...prev , password:e.target.value}})
			}}  style={{marginBottom:'1.5rem'}} label="Password" type="password" variant="outlined" />
			<BtnContainer>
			<Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
			<Button variant="outlined" onClick={()=>{
				props.setIsLogin(false)
			}}>Register</Button>
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