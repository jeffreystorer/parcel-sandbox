import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { get } from '/packages/utils/localStorage';
import { useGetScores } from '/src/components/scores/hooks';
import * as styles from '/src/components/scores/styles/index';

export default function ScoresTable() {
  const [activeNav, setActiveNav] = useState('ghininfo');
  const navigate = useNavigate();
  const golfer_id = get('golfer_id');
  const from_date_played = get('from_date_played');
  const [loading] = useGetScores(golfer_id, from_date_played);

  if (loading) return <p>Loading . . . </p>;
  const scores = get('scores').Scores;
  function generateRows() {
    let oddRow = false;
    for (var i = 0; i < scores.length; i++) {
      rowsTD[i] = (
        <tr key={i}>
          <td>{rows[i][0]}</td>
          {generateCols(i, oddRow)}
        </tr>
      );
    }
    return rowsTD;
  }

  function onClick() {
    navigate(-1);
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
                <Nav.Link eventkey='lookup'>Lookup Golfer</Nav.Link>
              </LinkContainer>
            </Nav>
            <br />
            <button style={styles.button} onClick={onClick}>
              Back to Previous Page
            </button>
            <br />
            <br />
            <h3 style={styles.center}>
              Revision Scores for GHIN Number {golfer_id}
            </h3>
            <br />
            <Table
              striped
              bordered
              responsive
              style={styles.scores_table}
              size='sm'>
              <thead>
                <tr>
                  <th style={styles.score}>Score</th>
                  <th style={styles.playing_date}>Date</th>
                  <th style={styles.rating_slope}>C.R./Slope</th>
                  <th style={styles.PCC}>PCC</th>
                  <th style={styles.diff}>Diff.</th>
                  <th style={styles.course_tee}>Course/Tee</th>
                </tr>
              </thead>
              <tbody>
                {scores
                  .filter((score) => score.revision)
                  .map((score, index) => {
                    const evenRow = Math.abs(index % 2) == 0;
                    return (
                      <tr key={index}>
                        <td style={styles.score}>
                          {score.used && '* '}
                          {!score.used && '   '}
                          {score.adjusted_gross_score} {score.score_type}
                        </td>
                        <td style={styles.playing_date}>{score.played_at}</td>
                        <td style={styles.rating_slope}>
                          {score.course_rating}/{score.slope_rating}
                        </td>
                        <td style={styles.PCC}>{score.PCC}</td>
                        <td style={styles.diff}>{score.differential}</td>
                        <td style={styles.course_tee}>
                          {score.ghin_course_name_display}
                        </td>
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
