import React, { useState, useEffect, useContext } from "react";

import {
} from "@material-ui/core";

import DashBoardStyles from "../../../styles/stamAD/dashboard/dashBoardStyles";

function Dashboard() {
  const classes = DashBoardStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openChangeColor, setOpenChangeColor] = useState(false);



  const arrayprueba=[
                      {id: 1, active: true},
                      {id: 2, active: false},
                      {id: 3, active: false},
                      {id: 4, active: false},
                      {id: 5, active: false},
                      {id: 6, active: false},
                      {id: 7, active: false}
                    ]

  useEffect(() => {
    arrayprueba.map((current) => ( 
      console.log("aquí se consumen los servicios")
    ))
  }, []);

  return (
   <>
   <div>Prueba</div>
   </>
    );
}

export default Dashboard;
