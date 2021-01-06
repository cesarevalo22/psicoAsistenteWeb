import React , {useContext} from 'react'
import { TranslationContext } from '../../context/translation/TranslationContext';

import AccountActivatedStyles from "../../styles/Register/accountActivatedStyles";
import SvgAccountActivated from "../../assets/images/svgFiles/SvgAccountActivated";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function () {

    const classes = AccountActivatedStyles();
    const { translate } = useContext(TranslationContext)

    return (
        <>
        <Paper className={classes.container2}>
        <section className={classes.contMessage}>
          <div className={classes.contImageMessage}>
            <SvgAccountActivated width={"210px"} height={"130px"} />
          </div>
          <div className={classes.sub1}>
            <p>{translate('accountActivated', 'Title')}</p>
          </div>
          <div className={classes.sub2}>
            <p>{translate('accountActivated', 'SubTitle')}</p>
          </div>
          <Link to={"/accountactivated"}>
          <div className={classes.sub3}>
              <p>{translate('accountActivated', 'LabelSignIn')}</p>
          </div>
          </Link>
        </section>
      </Paper>
        </>
    )
}