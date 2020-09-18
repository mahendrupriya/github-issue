import React from 'react'
import { Card } from 'react-bootstrap'
import IssueLabels from './IssueLabels'
import './Design.css'

export default function Issue({ issue, label }) {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className="mb-0">
                        <span className="tooltipped px-2">
                            <svg hover=" open issue" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true" ><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                        </span>
                        <a href={issue.url} className="no-underline">{issue.title}</a>
                        <Card.Text className="text-gray h6 pl-4 mt-1">
                            <IssueLabels labels={issue.labels} />
                        #{issue.number} opened {new Date(issue.created_at).toLocaleDateString()} by <a href="#!" className="no-underline text-gray">{issue.user.login}</a>
                        </Card.Text>
                    </Card.Title>
                    <div className="pull-right"><span><svg className="octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path></svg></span>
                        {issue.comments}</div>
                </div>
            </Card.Body>
        </Card>
    );
};
