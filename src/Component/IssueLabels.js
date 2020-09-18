import React from 'react';

const IssueLabels = ({ labels }) => (
  <div className="issue__labels">
    {labels.map(label =>
      <span
        key={label.id}
        className="issue__label rounded-pill px-2"
        style={{
          background: `#${label.color}`,
          borderColor: `#${label.color}`,
          boxShadow: `0 0 2px #${label.color}`,
          color: `#000000`
        }}>
        {label.name}
      </span>
    )}
  </div>
);


export default IssueLabels;