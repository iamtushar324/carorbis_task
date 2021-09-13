import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {axios} from 'helpers'

export default function Feeds(){
	const history = useHistory()

	useEffect(()=>{
		axios.get('/users/isLoggedIn').then((res)=>{
			if(res.data.redirect){
				history.push(res.data.redirect)
			}
		})

	},[history])

	return (
	<MainWrapper>
		Feeds
	</MainWrapper>
	)
}

//styles 

const MainWrapper = styled.div``
