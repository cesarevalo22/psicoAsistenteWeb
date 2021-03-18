import React, {useContext} from "react";
import { TranslationContext } from '../../context/translation/TranslationContext';


import MailNotificationStyles from "../../styles/Register/mailNotificationStyles";
import SvgMailNotification from "../../assets/images/svgFiles/SvgMailNotification";

import { Paper } from "@material-ui/core";

export default function MailNotification() {

  const classes = MailNotificationStyles();
  const { translate } = useContext(TranslationContext)

  return (
    <React.Fragment>
      <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgMailNotification width={"186px"} height={"175px"} />
          </div>
          <div className={classes.sub1}>
            <p>{translate('mailNotification', 'Title')}</p>
          </div>
          <div className={classes.sub2}>
          <p>{translate('mailNotification', 'SubTitle')}</p>
          </div>
        </section>
      </Paper>
    </React.Fragment>
  );
}
