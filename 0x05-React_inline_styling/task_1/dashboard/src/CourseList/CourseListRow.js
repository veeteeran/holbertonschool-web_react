import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

const rowStyle = { color: '#f5f5f5ab' };
const headerStyle = { color: '#deb5b545' };

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null, styles }) => {
  return (
    <tr style={
      isHeader
        ? headerStyle
        : rowStyle
    }>
      {
        isHeader
          ? textSecondCell
            ?
            <>
              <th className={css(styles)}>{textFirstCell}</th>
              <th className={css(styles)}>{textSecondCell}</th>
            </>
            : <th colSpan={2} className={css(styles)}>{textFirstCell}</th>
          : <>
            <td className={css(styles)}>{textFirstCell}</td>
            <td className={css(styles)}>{textSecondCell}</td>
          </>
      }
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default CourseListRow;