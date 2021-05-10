import React, {useState} from "react"
import FilterBox from "../../components/CheckBox/FilterBox"
import CategoryCard from "../../components/Card/components/CategoryCard"
import VenueCard from "../../components/Card/components/VenueCard"
import {Helmet} from "react-helmet"
import Slider from "react-slick";


const Index = () => {
  const [distance, setDistance] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  const changeDistanceHandle = (e) => {
    setDistance(e.target.value);
  }

  return ( 
    <>
      <Helmet>
        <title>Appetizr</title>
        <meta name="description" content="Appetizr Description" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="assets/css/bootstrap_customized.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/custom.css" hrel="stylesheet" />
        <link href="assets/css/listing.css" rel="stylesheet" />
        <link href="assets/css/leaflet.css" rel="stylesheet" />
      </Helmet>
      {/*  change address and search banner */}
      <div className="page_header element_to_stick">
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
      </div>
      {/*  end - change address and search banner */}
      <div className="collapse" id="collapseMap">
        <div id="map" className="map"></div>
      </div>

      <div className="container margin_30_20">			
        <div className="row">
          {/* sidebar */}
          <aside className="col-lg-3" id="sidebar_fixed">
            <a className="btn_map d-flex align-items-center justify-content-center" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" ><span className="btn_map_txt" data-text-swap="Hide Map" data-text-original="View on Map">View on Map</span></a>
            <FilterBox />

            {/* <!-- /filter_type --> */}
						<div className="filter_type">
							<h4><a href="#filter_3" data-toggle="collapse" className="closed">Distance</a></h4>
							<div className="collapse" id="filter_3">
								<div className="distance"> Radius around selected destination <span></span> km</div>
								<div className="">
                  <input type="range" min="10" max="50" step="1" value={distance} data-orientation="horizontal" onChange={changeDistanceHandle} />
                </div>
							</div>
						</div>
						{/* <!-- /filter_type --> */}

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
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                  <CategoryCard to={{to:"#"}} name="Pizza" src="/assets/img/cat_listing_placeholder.png" />
                </Slider>
                </div>
              </div>
            </div>
            {/* end - list categories */}

            {/* Restaurant/venue */}
            <div className="row">
              <div className="col-12">
                <h2 className="title_small">Restaurant/Venue</h2>
              </div>

              <VenueCard to={{to:"#"}} discount="15" src="/assets/img/cat_listing_placeholder.png" category="pizza" venueName="Mantap" location="123" star="5" /> 
              <VenueCard to={{to:"#"}} discount="15" src="/assets/img/cat_listing_placeholder.png" category="pizza" venueName="Mantap" location="123" star="5" /> 
              <VenueCard to={{to:"#"}} discount="15" src="/assets/img/cat_listing_placeholder.png" category="pizza" venueName="Mantap" location="123" star="5" /> 
              <VenueCard to={{to:"#"}} discount="15" src="/assets/img/cat_listing_placeholder.png" category="pizza" venueName="Mantap" location="123" star="5" /> 
              
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
    </>
   );
}
 
export default Index;