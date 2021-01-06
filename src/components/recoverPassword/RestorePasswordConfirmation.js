import React, {useContext} from 'react'
import { TranslationContext } from '../../context/translation/TranslationContext';  

import restorePasswordconfirmationstyles from "../../styles/recoverPassword/restorePasswordConfirmationStyles";
import SvgRestorePasswordConfirmation from "../../assets/images/svgFiles/SvgRestorePasswordConfirmation";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function () {

    const classes = restorePasswordconfirmationstyles();
    const { translate } = useContext(TranslationContext)

    return (
        <>
        <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgRestorePasswordConfirmation width={"300px"} height={"300px"} />
          </div>
          <div className={classes.sub1}>
            <p>{translate('restorePasswordConfirmation', 'Title')}</p>
          </div>
          <div className={classes.sub2}>
            <p>{translate('restorePasswordConfirmation', 'SubTitle')}</p>
          </div>
          <Link to={"/restorePasswordconfirmation"}>
          <div className={classes.sub3}>
              <p>{translate('restorePasswordConfirmation', 'LabelSignIn')}</p>
          </div>
          </Link>
        </section>
      </Paper>
        </>
    )
}