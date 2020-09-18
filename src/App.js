import React, { useState } from 'react';
import UseFetchIssues from './Component/UseFetchIssues';
import Issue from './Component/Issue'
import Header from './Component/Header';
import Search from './Component/Search';
import Navigation from './Component/Navigation';
import Paginate from './Component/Paginate';
import './App.css';

function App() {
  const [params, setParams] = useState({ ['q']: 'is:issue+is:open', ['access_token']: '88b966a43be5804b57d3344a2dec5edda049f458', ['per_page']: 25 })
  const [formValues, setformValue] = useState({ ['query']: 'is:issue is:open ' })
  const [authorValues, setauthorValues] = useState({})
  const [page, setPage] = useState(1)
  const {issue, loading, error, totalPages, totalIssue } = UseFetchIssues(params, page)

  function handleParamChange(e) {
    const formValue = e.target.name;
    const value = e.target.value;
    const onSearchvalue = value.replace(' ', '+');
    setParams(prevParams => {
      return { ...prevParams, ['q']: onSearchvalue }
    })
    setPage(1)
    setformValue(prevFormValues => {
      return { ...prevFormValues, [formValue]: value }
    })
  }
  function authorParamChange(e) {
    const authorValue = e.target.name;
    const onAuthorValue = e.target.value;
    const value = 'is:issue is:open '
    setParams(prevParams => {
      return { ...prevParams, ['q']: `${value}author:${onAuthorValue}` }
    })
    setPage(1)
    setauthorValues(prevAuthorValues => {
      return { ...prevAuthorValues, [authorValue]: onAuthorValue }
    })
    setformValue(prevFormValues => {
      return { ...prevFormValues, ['query']: `${value}author:${onAuthorValue}` }
    })
  }

  return (
    <div className="App">
      <Header totalIssue={totalIssue} />
      <div className="clearfix new-discussion-timeline px-3 px-md-4 px-lg-5 my-4">
        <Search formValues={formValues} onParamChange={handleParamChange} />
        <Navigation totalIssue={totalIssue} authorValues={authorValues} onAuthorChange={authorParamChange} setauthorValues={setauthorValues} />
        {loading}
        {error}
        {issue.map(issue => {
          return <Issue key={issue.id} issue={issue} />
        })}
        <Paginate page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default App;
