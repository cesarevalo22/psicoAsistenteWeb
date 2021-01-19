import React, {useEffect, useState} from "react"
import {Card, CardContent, Button, Typography} from '@material-ui/core';


export default function buttonChangeColor(props) {

    return(
        <button 
            style={{background: "#ffffff",
                        border: "none",
                        outlineWidth: "0.4px solid ",
                        marginRight: "22.9px",
                        padding: "0px",
                        cursor: "pointer"}}>
            <Card 
                style={{
                    background: props.color,
                    borderRadius: "15px",  
                    height: "90px",
                    width: "100px"
                          }}>
            <CardContent 
                style={{
                    background:"#ffffff",
                    height: "10%",
                    marginTop: "60px",
                    borderBottomLeftRadius:"15px",
                    borderBottomRightRadius:"15px",

                }}>
                    <p style={{ 
                        fontFamily: ["Roboto", "sans-serif"].join(","),
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "21px",
                        textaAign: "center",
                        color: "#848484",
                        variant: "inherit",
                        margin: "-11px"
                    }}> 
                    {props.nameColor}
                    </p>
            </CardContent>
            </Card>
        </button>
    )
}