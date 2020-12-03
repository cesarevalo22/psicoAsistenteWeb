import { makeStyles } from '@material-ui/core/styles';

const ValidateStyles = makeStyles((theme) => ({
  divValidator: {
    width: '492px',
    height: '48px',
    textAlign: 'center',
    margin: 'auto',
    marginTop:"10px",
    paddingLeft: "13px",
    
    [theme.breakpoints.down('md')]: {
      width: '492px',
      height: '48px',
      paddingLeft: "0",
    },
    [theme.breakpoints.down('sm')]: {
      width: '335px',
      height: '48px',
      paddingLeft: "0",
      marginTop:"30px",

    },
    [theme.breakpoints.down('xs')]: {
      margin: '5px auto 50px auto',
      width: '272px',
      height: '48px',
      marginLeft:'39px',
      paddingLeft: "0",

    },
    '& p': {
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      fontWeight: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      fontSize: '11.3px',
      display: 'table-cell',
      verticalAlign: 'middle',
      height: '24px',
      borderRadius: '18px',
      textAlign: 'center',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '561px',
    height: '48px',
    background: '#146fd1',
    opacity: '0.6',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.08)',
    borderRadius: '30px',
    color: '#ffffff',
    fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    '&:hover': {
      backgroundColor: '#b6bdbf',
    },
    [theme.breakpoints.down('sm')]: {
      width: '522px',
      height: '48px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '20px auto 50px auto',
      width: '272px',
      height: '48px',
    },
  },
  upperOk: {
    backgroundColor: '#F6134B',
    width: '92px',
    color: '#ffffff',
  },
  lowerOk: {
    backgroundColor: '#F6134B',
    width: '89px',
    color: '#ffffff',
  },
  numberOk: {
    backgroundColor: '#F6134B',
    width: '86px',
    color: '#ffffff',
  },
  specialOk: {
    backgroundColor: '#F6134B',
    width: '134px',
    color: '#ffffff',
  },
  LengthOk: {
    backgroundColor: '#F6134B',
    width: '95px',
    color: '#ffffff',
  },

  upperBad: {
    backgroundColor: '#D2D9F2',
    width: '92px',
    color: '#636e71',
  },
  lowerBad: {
    backgroundColor: '#D2D9F2',
    width: '89px',
    color: '#636e71',
  },
  numberBad: {
    backgroundColor: '#D2D9F2',
    width: '86px',
    color: '#636e71',
  },
  specialBad: {
    backgroundColor: '#D2D9F2',
    width: '134px',
    color: '#636e71',
  },
  LengthBad: {
    backgroundColor: '#D2D9F2',
    width: '95px',
    color: '#636e71',
  },
}));

export default ValidateStyles;
