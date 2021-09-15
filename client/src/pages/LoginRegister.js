import React , {useState} from 'react'
import styled from 'styled-components'
import { baseColors } from 'styles/baseStyles'
import LoginBox from 'containers/LoginBox'
import RegisterBox from 'containers/RegisterBox'

export default function LoginRegister(){
	const [isLogin , setIsLogin] = useState(true)

	return <MainWrapper>
		<Modal>
			{isLogin ? <LoginBox setIsLogin={setIsLogin} /> :<RegisterBox setIsLogin={setIsLogin}/>}
		</Modal>
	</MainWrapper>
}

//styles 

const MainWrapper = styled.div`
background-color: ${baseColors.background};
height: 100vh;
width: 100vw;
padding:10% 0;
`

const Modal = styled.div`
background-color: ${baseColors.surface};
border:1px solid ${baseColors.lightGrey};
border-radius:10px;
box-shadow:1px 1px 10px ${baseColors.lightGrey};
width: 25%;
min-width:300px;
margin:auto;
`