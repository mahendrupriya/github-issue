import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  LAST_PAGE: 'last-page'
}
const repo = 'repo:facebook/react'
const BASE_URL = 'https://api.github.com/search/issues'
const per_page = 25;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: false, issue: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, issue: action.payload.issue }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, issue: [] }
    case ACTIONS.LAST_PAGE:
      return { ...state, totalPages: Math.ceil(action.payload.total_count / per_page),totalIssue: action.payload.total_count }
    default:
      return state
  }
}

export default function UseFetchIssues(params, page) {
  const [state, dispatch] = useReducer(reducer, { issue: [], loading: true, totalPages: 1, hasNextPage: false, totalIssue:1 })
  if (!params.q.includes(repo)) {
    params.q = params.q + '+' + repo
  }
  
  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      params: { ...params, page: page },
      paramsSerializer: params => {
        let result = '';
        Object.keys(params).forEach(key => {
          result += `${key}=${(params[key])}&`;
        })
        return result.substr(0, result.length - 1);
      }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { issue: res.data.items } })
      dispatch({ type: ACTIONS.LAST_PAGE, payload: { total_count: res.data.total_count } })
    }).catch(e => {
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
    })
  }, [params, page])

  return state
}