import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Axios from "axios"
import FilterBox from "../../components/CheckBox/FilterBox"
import CategoryCard from "../../components/Card/components/CategoryCard"
import VenueCard from "../../components/Card/components/VenueCard"
import Slider from "react-slick";
import 'assets/css/leaflet.css';
import 'assets/css/listing.css';
import Navbar from "../../components/NavBar"
import Footer from "components/Footer"

const Index = () => {
  const [distance, setDistance] = useState(0);
  const [venues, setVenues] = useState([]);
  const [categories, setCategories] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  useEffect(() => {
    let isActive = true;
    const http = async () => {
      try {
        const res = await Axios(process.env.REACT_APP_API_URL + "products/categories/ProductCategory");
        if (isActive) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    };
    http();

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}venues`)
      .then(res => {
        setVenues(res.data.data)
      })

    // change className in Header
    document.getElementById("header-nav").className = "header_in clearfix";
  }, []);

  const changeDistanceHandle = (e) => {
    setDistance(e.target.value);
  }

  return (
    <>
      <Navbar />
      {/*  change address and search banner */}
      <main>
        {/* <div className="page_header element_to_stick">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
                  <h1>145 restaurants in Convent Street 2983</h1>
                  <a href="#0">Change address</a>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-5">
                <div className="search_bar_list">
                  <input type="text" className="form-control" placeholder="Dishes, restaurants or cuisines" />
                  <button type="submit"><i className="icon_search"></i></button>
                </div>
              </div>
            </div>
          </div>
      </div> */}
        {/*  end - change address and search banner */}
        <div className="collapse" id="collapseMap">
          <div id="map" className="map"></div>
        </div>

        <div className="container margin_30_20">
          <div className="row">
            {/* sidebar */}
            <aside className="col-lg-3" id="sidebar_fixed">
              <div className="row">
                <div className="col-12 mx-auto">
                  <Link to="/scan" className="btn_1 full-width mb_5">Scan QrCode</Link>
                </div>
              </div>
              {/* <a className="btn_map d-flex align-items-center justify-content-center" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" ><span className="btn_map_txt" data-text-swap="Hide Map" data-text-original="View on Map">View on Map</span></a> */}
              <FilterBox />

              {/* Distance - hide utk sementara*/}
              {/* <div className="filter_type">
							<h4><a href="#filter_3" data-toggle="collapse" className="closed">Distance</a></h4>
							<div className="collapse" id="filter_3">
								<div className="distance"> Radius around selected destination <span></span> km</div>
								<div className="">
                  <input type="range" min="10" max="50" step="1" value={distance} data-orientation="horizontal" onChange={changeDistanceHandle} />
                </div>
							</div>
						</div> */}
              {/* end - Distance  */}

              <p><a href="#" className="btn_1 outline full-width">Filter</a></p>
            </aside>
            {/* end - sidebar */}

            {/* main content */}
            <div className="col-lg-9">
              {/* list categories */}
              <div className="row">
                <div className="col-12">
                  <h2 className="title_small">List Categories</h2>
                  <div className="categories_carousel_in listing">
                    <Slider {...settings}>
                      {!!categories.length && categories.map(cate => <CategoryCard to={{ to: "#" }} name={cate.name} src="/assets/img/cat_listing_placeholder.png" />)}
                    </Slider>
                  </div>
                </div>
              </div>
              {/* end - list categories */}

              {/* banner */}
              <div class="promo">
                <h3>20% off your first meal.</h3>
                <p>Dine at one our hand selected restaurants below and receive 20% off</p>
                <i class="icon-food_icon_delivery"></i>
              </div>

              {/* Restaurant/venue */}
              <div className="row">
                <div className="col-12">
                  <h2 className="title_small">Restaurant/Venue</h2>
                </div>
                {!!venues.length && venues.map(venue => <VenueCard key={venue.id} to={`/menulist/${venue.id}`} discount="15" src={venue.banner || "/assets/img/cat_listing_placeholder.png"} category={venue.cultureCategory} venueName={venue.venueName} location={venue.address} star="5" />)}

              </div>
              {/* end - Restaurant/venue */}

              <div className="pagination_fg">
                <a href="#">&laquo;</a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">&raquo;</a>
              </div>

            </div>
            {/* end - main content */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;