import React, { useState, useEffect} from "react";
import axios from "axios"
import carton from "../../../assets/images/pngFiles/carton.png";
import papel from "../../../assets/images/pngFiles/papel.png"
import aluminio from "../../../assets/images/pngFiles/aluminio.png"
import metal from "../../../assets/images/pngFiles/metal.png"
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core"


import purchaseStyles from "../../../styles/stamAD/purchase/purchaseStyles";
import AddPurchase from "../Purchase/addPurchase"

const date = new Date()
        date.setHours(0,0,0);
        date.setMilliseconds(0);

function Purchase(props) {
    const [openAddPurchase, setOpenAddPurchase] = useState(false);
    const [material, setMaterial] = useState("");
    const [contRegister, setContRegister] = useState(false);
    const [dailyDocument, setDailyDocument] = useState([])

    useEffect(()=>{
        try {
             axios.get(
                `${process.env.REACT_APP_GATEWAY_END_POINT}/material?datedocument=${date}`,
              ).then((response)=>{
                const result = response.data.body.data[0].income;
                setDailyDocument(result)
              })
              
        } catch (error) {
          console.log(error)
        }
      },[]) 

    const handleAddPurchase = () => {
        setOpenAddPurchase(!openAddPurchase);
      };
    const handleNewSave = () => {
        setContRegister(!contRegister);
    };  
    const handleAddPurchaseCarton = () => {
        setOpenAddPurchase(!openAddPurchase);
        setMaterial("CARTON")
      }; 
    const handleAddPurchasePapel = () => {
        setOpenAddPurchase(!openAddPurchase);
        setMaterial("PAPEL")
      };   

    const handleAddPurchaseAluminio = () => {
        setOpenAddPurchase(!openAddPurchase);
        setMaterial("ALUMINIO")
      };
    const handleAddPurchaseMetal = () => {
        setOpenAddPurchase(!openAddPurchase);
        setMaterial("METAL")
      };  

      const classes = purchaseStyles();

      return (
        <>
            <p className = {classes.guia} >
                > Comprar Material
            </p>
            {openAddPurchase && (
                <>
                        <AddPurchase
                            open={openAddPurchase} 
                            onClose={handleAddPurchase}
                            material={material}
                            handleNewSave = {handleNewSave}
                        />
                 </>        
                    )}
                    
            <Grid item xs={12} className = {classes.grid}>
                <button>
                        <img src={carton} alt="" className={classes.image} onClick={handleAddPurchaseCarton}/>
                </button>
                <button>
                        <img src={papel} alt="" className={classes.image} onClick={handleAddPurchasePapel}/>
                </button>
                <button>
                        <img src={metal} alt="" className={classes.image} onClick={handleAddPurchaseMetal}/>
                </button>
                <button>
                        <img src={aluminio} alt="" className={classes.image} onClick={handleAddPurchaseAluminio} />
                </button>
            </Grid>

            <section style={{marginTop: "40px"}}>
            <TableContainer style={{ margin: "auto", width: "80%" }} component={Paper}>
      <Table className={classes.table} size="small" aria-label="Ingresos Diarios">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '25%' }}>NOMBRE</TableCell>
            <TableCell style={{ width: '25%' }} align="right">CANTIDAD (kg)</TableCell>
            <TableCell style={{ width: '25%' }} align="right">Precio ($)</TableCell>
            <TableCell style={{ width: '25%' }} align="right">Acción </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyDocument.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">editar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </section>       
            
        </>
        );
  
}

export default Purchase;