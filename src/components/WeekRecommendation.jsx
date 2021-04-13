import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodImage from './FoodImage'
import FoodDescription from './FoodDescription'
import Pancake from '../images/bing11.jpeg'
import Mushroom from '../images/rou16.jpeg'
import Fish from '../images/yu4.jpeg'
import Desk from '../images/zhuo1.jpeg'

export default class Special extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><FoodImage src={Pancake} /></Col>
                    <Col><FoodDescription /></Col>
                </Row>
                <Row>
                    <Col><FoodImage src={Mushroom} /></Col>
                    <Col><FoodDescription /></Col>
                </Row>
                <Row>
                    <Col><FoodImage src={Fish} /></Col>
                    <Col><FoodDescription /></Col>
                </Row>
                <Row>
                    <Col><FoodImage src={Desk} /></Col>
                    <Col><FoodDescription /></Col>
                </Row>
            </Container>
        )
    }
}