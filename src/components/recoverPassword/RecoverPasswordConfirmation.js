import React, {useContext}  from "react";
import { TranslationContext } from '../../context/translation/TranslationContext';  

import RecoverPasswordConfirmationStyles from "../../styles/recoverPassword/recoverPasswordConfirmationStyles";
import SvgRecoverPassword from "../../assets/images/svgFiles/SvgRecoverPassword";

import { Paper } from "@material-ui/core";

export default function RecoverPasswordConfirmation() {
  const classes = RecoverPasswordConfirmationStyles();
  const { translate } = useContext(TranslationContext)

  return (
    <React.Fragment>
      <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgRecoverPassword width={"261px"} height={"244px"} />
          </div>
          <div className={classes.sub1}>
            <p>{translate('recoverPasswordConfirmation', 'Title')}</p>
          </div>
          <div className={classes.sub2}>
          <p>{translate('recoverPasswordConfirmation', 'SubTitle')}</p>
          </div>
        </section>
      </Paper>
    </React.Fragment>
  );
}
