import { makeStyles } from '@material-ui/core/styles';

const RegisterLayoutStyles = makeStyles((theme) => ({

  gridContainer: {
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
    backgroundColor: "#ECECEC",
    '& .MuiGrid-container': {
      padding: '0'
    }
  },

  gridItem: {
    display: 'flex',
    maxWidth: "100%"
  },

  gridItemCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%'
  },

  gridItemCharacter: {
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingTop: '20%'
  },

  gridItemCorner: {
    alignItems: 'flex-end'
  }

}));

export default RegisterLayoutStyles;
