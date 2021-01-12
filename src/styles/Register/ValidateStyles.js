import { makeStyles } from '@material-ui/core/styles';

const ValidateStyles = makeStyles((theme) => ({
  divValidator: {
    width: 'auto',
    height: '22px',
    textAlign: 'center',
    margin: 'auto',
    marginTop:"22px",
    paddingLeft: "2%",
    
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      height: '22px',
      paddingLeft: "3%",
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: '48px',
      paddingLeft: "5%",
      marginTop:"16px",
      marginLeft:"27px",
    },
    [theme.breakpoints.down('xs')]: {
      margin: '16px auto 7px auto',
      width: 'auto',
      height: '48px',
      marginLeft:'8px',
      paddingLeft: "5%",
    },
    '& p': {
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      fontWeight: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      fontSize: '8.8px',
      display: 'table-cell',
      verticalAlign: 'middle',
      height: '18px',
      borderRadius: '18px',
      textAlign: 'center',
    },
  },
  
  upperOk: {
    backgroundColor: '#F6134B',
    width: '70px',
    color: '#ffffff',
  },
  lowerOk: {
    backgroundColor: '#F6134B',
    width: '70px',
    color: '#ffffff',
  },
  numberOk: {
    backgroundColor: '#F6134B',
    width: '70px',
    color: '#ffffff',
  },
  specialOk: {
    backgroundColor: '#F6134B',
    width: '107px',
    color: '#ffffff',
  },
  LengthOk: {
    backgroundColor: '#F6134B',
    width: '80px',
    color: '#ffffff',
  },

  upperBad: {
    backgroundColor: '#D2D9F2',
    width: '80px',
    color: '#636e71',
  },
  lowerBad: {
    backgroundColor: '#D2D9F2',
    width: '70px',
    color: '#636e71',
  },
  numberBad: {
    backgroundColor: '#D2D9F2',
    width: '70px',
    color: '#636e71',
  },
  specialBad: {
    backgroundColor: '#D2D9F2',
    width: '107px',
    color: '#636e71',
  },
  LengthBad: {
    backgroundColor: '#D2D9F2',
    width: '80px',
    color: '#636e71',
  },
}));

export default ValidateStyles;
