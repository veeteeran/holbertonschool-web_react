import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {
          listCourses.length > 0
            ? listCourses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
              />
            ))
            : <CourseListRow textFirstCell='No course available yet' />
        }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  table: {
    border: '1px solid #ddd',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default CourseList;
