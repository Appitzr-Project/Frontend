import React, { useRef, useEffect, useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Wrapper from "../../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import { strings } from "./utils";
import { InputForm, SelectOption } from "./components";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { uploadImageAddVenueApi, submitNewMenuApi } from "../../../redux/api/venue.api"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

const MenuAdd = () => {
  const auth = useSelector((state) => state.auth);
  let history = useHistory();

  const rawData = {
    name: "",
    description: "",
    category: [
      {
        id: 1,
        name: "Dessert",
      },
      {
        id: 2,
        name: "Sphagetti",
      },
      {
        id: 3,
        name: "Drink",
      },
    ],
    price: "",
    picture: [],
    proteinType: [
      {
        id: 1,
        name: "Vegan",
      },
      {
        id: 2,
        name: "Meat",
      },
      {
        id: 3,
        name: "Vegetables",
      },
    ],
  };

  const [state, setState] = useState({
    productName: "",
    description: "",
    category: "Dessert",
    price: 0,
    images: [],
    proteinType: "Vegan",
    isActive: true
  });

  const [picturePreview, setPicturePreview] = useState([]);
  const classes = useStyle();
  const inputFocus = useRef(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: name === "price" ? parseInt(value) : value,
    }));
  };

  const _handleChangePicture = async (event) => {
    event.persist();

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("data", file);
    const result = await uploadImageAddVenueApi(auth.user.signInUserSession.idToken.jwtToken, formData);

    setState((prevState) => ({
      ...prevState,
      images: picturePreview.concat(result.data),
    }));

    setPicturePreview((prevState) => prevState.concat(result.data));
  };

  const handleSaveMenu = async () => {
    const result = await submitNewMenuApi(auth.user.signInUserSession.idToken.jwtToken, state);
    if (result.code === 200 && result.message === "success") {
      history.push("/venue/menu/list");
    }
  };

  return (
    <Wrapper
      title={strings.add_menu}
      image="https://source.unsplash.com/random"
      spacing="26px"
      isBack="/venue"
    >
      <form>
        <Grid container direction="column">
          <Grid item xs={12}>
            <InputForm
              type="text"
              name="productName"
              value={state.name}
              label={strings.label_name}
              ref={inputFocus}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 8 }}>
          <SelectOption
            label={strings.label_category}
            className={classes.label}
            data={rawData.category}
            inputName="category"
            onHandleChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.label}>
            {strings.label_desc}
          </Typography>
          <textarea
            name="description"
            rows="2"
            type="text"
            className={classes.input}
            onChange={onChange}
            ref={inputFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <InputForm
            type="text"
            name="price"
            value={state.price}
            label="Price"
            ref={inputFocus}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.label}>
            {strings.label_picture}
          </Typography>
          {!picturePreview.length && (
            <Button
            onChange={_handleChangePicture}
            variant='contained'
            component='label'
            startIcon={<PhotoLibraryIcon style={{ fontSize: 100, color: '#979797' }} />}
            className={classes.btnPreview}
            disableElevation
          >
            <input
              type='file'
              name="picture"
              hidden
            />
          </Button>
          )}
        </Grid>
        {picturePreview.length ? (
          <>
            <div className={classes.formGroup}>
              {picturePreview.map((val) => (
                <img
                  src={val}
                  alt="img-product"
                  className={classes.imgPreview}
                />
              ))}
            </div>
            <div className={classes.formGroup}>
              <label for="upload-photo" className={classes.btnImg}>
                {strings.add_img}
              </label>
              <input
                type="file"
                id="upload-photo"
                name="picture"
                onChange={_handleChangePicture}
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
              />
            </div>
          </>
        ) : null}
        <Grid item xs={12} style={{ margin: "10px 0px 54px 0px" }}>
          <SelectOption
            label={strings.label_protein_type}
            className={classes.label}
            data={rawData.proteinType}
            inputName="proteinType"
            onHandleChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.submitBtn}
            fullWidth
            onClick={handleSaveMenu}
          >
            <Typography
              variant="subtitle2"
              className={classes.bold}
              style={{ color: "white", textTransform: "capitalize" }}
            >
              {strings.save_menu}
            </Typography>
          </Button>
        </Grid>
      </form>
    </Wrapper>
  );
};

const useStyle = makeStyles((theme) => ({
  bold: {
    fontWeight: "bold",
  },
  formGroup: {
    position: "relative",
    marginBottom: "16px",
    width: "100%",
  },
  submitBtn: {
    backgroundColor: "#20D3C2",
    borderRadius: "12px",
    height: "48px",
    padding: "16px",
    boxShadow: "1px 1px 12px -3px",
    "&:hover": {
      backgroundColor: "#20D3C2",
    },
  },
  input: {
    background: "#f3f3f3",
    borderRadius: "10px",
    width: "100%",
    border: 0,
    outline: 0,
    boxShadow: "none",
    padding: "12px",
    "&:focus": {
      border: "2px solid #3f51b5",
    },
  },
  select: {
    backgroundColor: "#f3f3f3",
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    padding: "16px",
    border: "none",
    [theme.breakpoints.down("xs")]: {
      padding: "14px",
    },
    "&:focus": {
      border: "2px solid #3f51b5",
    },
  },
  imgPreview: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    objectPosition: "50% 50%",
    borderRadius: "10px",
    transition: "opacity .3s",
    marginBottom: 15,
  },
  inputFile: {
    width: "100%",
    height: "100px",
    backgroundColor: "#f3f3f3",
    color: "#000",
    border: "1px solid #f3f3f3",
    padding: "16px",
    borderRadius: "10px",
    "&:focus": {
      border: "2px solid #3f51b5",
    },
  },
  btnPreview: {
    width: '100%',
    height: '200px',
    background: '#f3f3f3',
    borderRadius: '10px',
    boxShadow: 'none',
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  },
  btnImg: {
    border: "none",
    padding: "10px",
    cursor: 'pointer',
    fontSize: 14,
    borderRadius: "15px",
    backgroundColor: "#4F147B",
    color: "white",
  },
}));

export default MenuAdd;