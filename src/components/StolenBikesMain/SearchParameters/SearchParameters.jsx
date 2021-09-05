import { useState, useContext } from 'react'
import {Context} from '../../../services/Context.js'

import {Form} from '../../../styles/styled_search_parameters.js'

import { useHistory } from "react-router-dom";

import {StyledButton} from '../../../styles/styled_button'

import moment from 'moment';

const SearchParameters = (props) => {

  moment().format();

  const [data, setData] = useState({
    title:'',
    dateFrom:'',
    dateTo:''
  })

  const history = useHistory();

  const {getBikesFiltered, bikes} = useContext(Context)

  const dateChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    })
  }

  const titleChange = (ev) => {
    setData({
      ...data,
      title: ev.target.value
    })
  }

  const submitData = (e) => {
    e.preventDefault()
    history.push("/home/search")
    getBikesFiltered(data)
  }



  return (
    <Form onSubmit={submitData}>
      <div className='item_search'>
      <label>Search Case Description</label>
      <input type='text' name='title' onChange={titleChange}/>
      </div>
      <div className='item_search'>
      <label>from</label>
      <input type='date' name='dateFrom' onChange={dateChange}/>
      </div>
      <div className='item_search'>
      <label>to</label>
      <input type='date' name='dateTo' onChange={dateChange}/>
      </div>
      <StyledButton type='submit' className='submit_button'>Find cases</StyledButton>
      <p className='bikes_results'>total: {bikes?.length}</p>
    </Form>
  )
}

export default SearchParameters
