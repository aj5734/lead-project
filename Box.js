import React from "react";
import Data from "./Data.js";
import Pagination from "@mui/material/Pagination";

import { useEffect, useState } from "react";

import "./Box.css";

function Box() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const d = await response.json();
    setData(d);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="Box">
      {data
        .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
        .map((item) => (
          <Data
            name={item.company.name}
            contact={item.name}
            city={item.address.city}
            stat={item.address.street}
            discription={item.company.catchPhrase}
            bs={item.company.bs}
            conperson={item.phone}
            street={item.address.street}
            suite={item.address.suite}
            zipcode={item.address.zipcode}
            email={item.email}
            website={item.website}
          />
        ))}
      <Pagination
        className="pagination"
        variant="outlined"
        shape="rounded"
        count={4}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
}

export default Box;
