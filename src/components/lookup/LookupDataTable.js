import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { get, set } from '/packages/utils/localStorage';
import * as styles from '/src/components/lookup/styles/index';

export default function LookupDataTable() {
  const [activeNav, setActiveNav] = useState('ghininfo');
  const navigate = useNavigate();
  let searchedName = get('last_name');
  if (get('first_name')) searchedName = searchedName + ', ' + get('first_name');
  const golfers = get('golfers').golfers;
  function generateRows() {
    for (var i = 0; i < golfers.length; i++) {
      rowsTD[i] = (
        <tr key={i}>
          <td className='saturday-left-row-cell'>{rows[i][0]}</td>
          {generateCols(i, oddRow)}
        </tr>
      );
    }
    return rowsTD;
  }

  function onClick(e) {
    let golfer_id = e.target.innerText;
    set('golfer_id', golfer_id);
    navigate('/scores');
  }

  const styleActive = {
    backgroundColor: '#3378ac',
    color: 'white',
  };

  const handleNavSelect = (eventkey) => {
    setActiveNav(eventkey);
  };

  return (
    <>
      <Container>
        <Row
          className='justify-content-md-center'
          ml='auto'
          mr='auto'
          padding='0px'
          xs='auto'
          sm='auto'
          md='auto'
          lg='auto'
          xl='auto'
          xxl='auto'>
          <Col
            ml='auto'
            mr='auto'
            xs='auto'
            sm='auto'
            md='auto'
            lg='auto'
            xl='auto'
            xxl='auto'>
            <br />
            <Nav
              className='justify-content-md-center'
              activeKey={activeNav}
              onSelect={handleNavSelect}>
              <LinkContainer activeStyle={styleActive} to='/'>
                <Nav.Link style={styles.center} eventkey='lookup'>
                  Lookup Golfer
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <h3 style={styles.center}>GHIN Information for {searchedName}</h3>
            <h6 style={styles.link_revision_scores}>
              Click On GHIN Number below for Revision Scores
            </h6>
            <Table striped size='sm' style={styles.center}>
              <thead>
                <tr>
                  <th style={styles.first_name}>First Name</th>
                  <th style={styles.index}>Index</th>
                  <th style={styles.ghin_number}>GHIN Number</th>
                  <th style={styles.club_th}>Club</th>
                  <th>Primary Club State</th>
                </tr>
              </thead>
              <tbody>
                {golfers
                  .sort((a, b) => {
                    return a.first_name.toUpperCase() >
                      b.first_name.toUpperCase()
                      ? 1
                      : -1;
                  })
                  .map((golfer, index) => {
                    return (
                      <tr key={index}>
                        <td style={styles.first_name}>{golfer.first_name}</td>
                        <td>{golfer.handicap_index}</td>
                        <td style={styles.golfer_id} onClick={onClick}>
                          {golfer.ghin}
                        </td>
                        <td style={styles.club_td}>{golfer.club_name}</td>
                        <td>{golfer.primary_club_state}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
