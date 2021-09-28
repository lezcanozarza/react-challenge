import { useState, useContext } from "react";
import { Context } from "../../../services/Context.js";

//style
import { StyledButton } from "../../../styles/styled_button";
import { Form } from "../../../styles/styled_search_parameters.js";

import { useHistory } from "react-router-dom";
import moment from "moment";

const SearchParameters = (props) => {
  //executing the moment library
  moment().format();

  const [data, setData] = useState({
    title: "",
    dateFrom: "",
    dateTo: "",
  });

  const history = useHistory();

  const { getBikesFiltered, bikes } = useContext(Context);

  const dateChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const titleChange = (ev) => {
    setData({
      ...data,
      title: ev.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    history.push("/home/search");
    getBikesFiltered(data);
  };

  return (
    <Form onSubmit={submitData}>
      <div className='search_inputs'>
      <div className="item_search">
        <label>Search Case Description</label>
        <input type="text" name="title" onChange={titleChange} />
      </div>
      <div className="date_inputs">
      <div className="item_search">
        <label>from</label>
        <input className='date_input' type="date" name="dateFrom" onChange={dateChange} />
      </div>
      <div className="item_search_to">
        <label>to</label>
        <input className='date_input' type="date" name="dateTo" onChange={dateChange} />
      </div>
      </div>
      </div>
      <div className='search_buttons'>
      <StyledButton type="submit" className="submit_button">
        Find cases
      </StyledButton>
      <p className="bikes_results">total: {bikes?.length}</p>
      </div>
    </Form>
  );
};

export default SearchParameters;
