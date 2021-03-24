import React, { useRef, useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Wrapper from "../../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import { strings } from "./utils";
import { InputForm, SelectOption } from "./components";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  getCurrentProductVenueApi,
  uploadImageAddVenueApi,
  submitEditMenuApi,
  submitDeleteMenuApi,
} from "../../../redux/api/venue.api";
import { useSelector } from "react-redux";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { capitalizeFirstLetter } from "../../../helpers/helper";
import DeleteIcon from "@material-ui/icons/Delete";

const MenuEdit = () => {
  const auth = useSelector((state) => state.auth);
  const { menuId } = useParams();
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
        name: "Spaghetti",
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
    isActive: true,
  });
  const classes = useStyle({ strings });
  const inputFocus = useRef(null);

  const [open, setOpen] = useState(false);
  const [picturePreview, setPicturePreview] = useState([]);

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
    getCurrentProductVenueApi(
      auth.user.signInUserSession.idToken.jwtToken,
      menuId
    ).then((res) => {

      const firstData = {
        description: res.data.description,
        category: res.data.category,
        images: res.data.images,
        price: res.data.price,
        productName: res.data.productName,
        proteinType: res.data.proteinType,
      };
      setState((prevState) => ({
        ...prevState,
        ...firstData,
      }));

      setPicturePreview((prevState) => prevState.concat(res.data.images));
    });
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
    const result = await uploadImageAddVenueApi(
      auth.user.signInUserSession.idToken.jwtToken,
      formData
    );

    setState((prevState) => ({
      ...prevState,
      images: picturePreview.concat(result.data),
    }));

    setPicturePreview((prevState) => prevState.concat(result.data));
  };

  const handleSaveMenu = async () => {
    const result = await submitEditMenuApi(
      auth.user.signInUserSession.idToken.jwtToken,
      state,
      menuId
    );
    if (result.code === 200 && result.message === "success") {
      // history.push("/venue/menu/list");
      alert("success");
    }
  };

  const handleDelete = async () => {
    const result = await submitDeleteMenuApi(
      auth.user.signInUserSession.idToken.jwtToken,
      menuId
    );
    if (result.code === 200 && result.message === "success") {
      // history.push("/venue/menu/list");
      alert("success");
    }
  };

  const handleRemoveImageFromCollections = (url) => {
    const images = [...picturePreview];
    const index = images.indexOf(url);
    if (index !== -1) {
      images.splice(index, 1);
      setPicturePreview(images);
      setState((prevState) => ({
        ...prevState,
        images,
      }));
    }
  };

  return (
    <Wrapper
      title={strings.edit_menu}
      image="https://source.unsplash.com/random"
      spacing="26px"
      isBack="/venue/menu/list"
    >
      <form>
        <Grid container direction="column">
          <Grid item xs={12}>
            <InputForm
              type="text"
              name="productName"
              value={state.productName}
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
            currentValue={capitalizeFirstLetter(state.category)}
            onHandleChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.label}>
            {strings.label_desc}
          </Typography>
          <textarea
            name="description"
            value={state.description}
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
              variant="contained"
              component="label"
              startIcon={
                <PhotoLibraryIcon style={{ fontSize: 100, color: "#979797" }} />
              }
              className={classes.btnPreview}
              disableElevation
            >
              <input type="file" name="picture" hidden />
            </Button>
          )}
        </Grid>
        {picturePreview.length ? (
          <>
            <div className={classes.formGroup}>
              {picturePreview.map((val, k) => (
                <div className={classes.imgPreviewContainer} key={k}>
                  <img
                    src={val}
                    alt="img-product"
                    className={classes.imgPreview}
                  />
                  <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={() => handleRemoveImageFromCollections(val)}
                  />
                </div>
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
            currentValue={capitalizeFirstLetter(state.proteinType)}
            inputName="proteinType"
            onHandleChange={(e) => onChange(e)}
          />
        </Grid>
      </form>

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
            {strings.update_menu}
          </Typography>
        </Button>
        <Button className={classes.submitBtn2} fullWidth onClick={handleToggle}>
          <Typography
            variant="subtitle2"
            className={classes.bold}
            style={{ color: "white", textTransform: "capitalize" }}
          >
            {strings.delete_menu}
          </Typography>
        </Button>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container>
              <Grid container item justify="space-between">
                <Typography className={classes.logoutText}>
                  {strings.delete_menu}
                </Typography>
                <div className={classes.Xbtn} onClick={handleToggle}>
                  X
                </div>
              </Grid>

              <Grid container item justify="space-between">
                <Typography className={classes.confirmText}>
                  {strings.modal_desc}
                </Typography>
              </Grid>

              <Grid container item justify="space-between">
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.cancelBtn}
                  onClick={handleToggle}
                >
                  {strings.cancel}
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.okBtn}
                  onClick={handleDelete}
                >
                  {strings.ok}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
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
  },
  submitBtn: {
    backgroundColor: "#20D3C2",
    borderRadius: "12px",
    height: "48px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "1px 1px 12px -3px",
    "&:hover": {
      backgroundColor: "#20D3C2",
    },
  },
  submitBtn2: {
    backgroundColor: "#C94130",
    borderRadius: "12px",
    height: "48px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "1px 1px 12px -3px",
    "&:hover": {
      backgroundColor: "#C94130",
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
  imgPreviewContainer: {
    display: "flex",
  },
  deleteIcon: {
    cursor: "pointer",
  },
  imgPreview: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    objectPosition: "50% 50%",
    borderRadius: "10px",
    marginBottom: 15,
    transition: "opacity .3s",
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
  btnImg: {
    border: "none",
    padding: "10px",
    cursor: "pointer",
    fontSize: 14,
    borderRadius: "15px",
    backgroundColor: "#4F147B",
    color: "white",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "260px",
    backgroundColor: "#fff",
    padding: "13px",
    borderRadius: "5px",
  },
  logoutText: {
    fontSize: "18px",
    fontWeight: "600",
  },
  Xbtn: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#717171",
    cursor: "pointer",
  },
  confirmText: {
    color: "#717171",
    fontSize: "16px",
    fontWeight: "300",
    padding: "10px 0 20px 0",
  },

  cancelBtn: {
    backgroundColor: "#EBEBEB",
    border: "#EBEBEB",
    color: "#C1C1C1",
    width: "90px",
    height: "40px",
  },

  btnPreview: {
    width: "100%",
    height: "200px",
    background: "#f3f3f3",
    borderRadius: "10px",
    boxShadow: "none",
    "&:focus": {
      border: "2px solid #3f51b5",
    },
  },

  okBtn: {
    backgroundColor: "#FF4646",
    border: "#FF4646",
    color: "#fff",
    width: "90px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#FF4646",
    },
  },
}));

export default MenuEdit;
