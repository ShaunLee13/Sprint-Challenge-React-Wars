
// Write your Character component here
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'

const Character = (props) => {
    const { person } = props

    return (
        <Container>
            <Row className='Character-card'>
                <Col><p>Character: {person.name}</p></Col>
                <Col><p>Born in year: {person.birth_year}</p></Col>
            </Row>
            
        </Container>
    )
}

export default Character;