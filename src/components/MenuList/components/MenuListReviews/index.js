import React from 'react';

const MenuListReviews = ({ sectionRef, categoryLength }) => {
  return (
    <div className="container margin_30_20">
      <div className="row">
        <div className="col-lg-8 list_menu">
          <section
            id={`section-${categoryLength}`}
            ref={(el) => (sectionRef.current[categoryLength] = el)}
          >
            <h4>Reviews</h4>
            <div className="row add_bottom_30 d-flex align-items-center reviews">
              <div className="col-md-3">
                <div id="review_summary">
                  <strong>8.5</strong>
                  <em>Superb</em>
                  <small>Based on 4 reviews</small>
                </div>
              </div>
              <div className="col-md-9 reviews_sum_details">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Food Quality</h6>
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-9">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-3">
                        <strong>9.0</strong>
                      </div>
                    </div>
                    {/* /row  */}
                    <h6>Service</h6>
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-9">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '95%' }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-3">
                        <strong>9.5</strong>
                      </div>
                    </div>
                    {/* /row  */}
                  </div>
                  <div className="col-md-6">
                    <h6>Punctuality</h6>
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-9">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '60%' }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-3">
                        <strong>6.0</strong>
                      </div>
                    </div>
                    {/* /row  */}
                    <h6>Price</h6>
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-9">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '60%' }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-3">
                        <strong>6.0</strong>
                      </div>
                    </div>
                    {/* /row  */}
                  </div>
                </div>
                {/* /row  */}
              </div>
            </div>
            {/* /row  */}
            <div id="reviews">
              <div className="review_card">
                <div className="row">
                  <div className="col-md-2 user_info">
                    <figure>
                      <img src="../assets/img/avatar4.jpg" alt="" />
                    </figure>
                    <h5>Lukas</h5>
                  </div>
                  <div className="col-md-10 review_content">
                    <div className="clearfix add_bottom_15">
                      <span className="rating">
                        8.5<small>/10</small> <strong>Rating average</strong>
                      </span>
                      <em>Published 54 minutes ago</em>
                    </div>
                    <h4>"Great Location!!"</h4>
                    <p>
                      Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                      eirmod scaevola sea. Et nec tantas accusamus salutatus,
                      sit commodo veritus te, erat legere fabulas has ut. Rebum
                      laudem cum ea, ius essent fuisset ut. Viderer petentium cu
                      his. Tollit molestie suscipiantur his et.
                    </p>
                    <ul>
                      <li>
                        <a href="#0">
                          <i className="icon_like"></i>
                          <span>Useful</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="icon_dislike"></i>
                          <span>Not useful</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="arrow_back"></i> <span>Reply</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row  */}
              </div>
              {/* /review_card  */}
              <div className="review_card">
                <div className="row">
                  <div className="col-md-2 user_info">
                    <figure>
                      <img src="../assets/img/avatar1.jpg" alt="" />
                    </figure>
                    <h5>Marika</h5>
                  </div>
                  <div className="col-md-10 review_content">
                    <div className="clearfix add_bottom_15">
                      <span className="rating">
                        9.0<small>/10</small> <strong>Rating average</strong>
                      </span>
                      <em>Published 11 Oct. 2019</em>
                    </div>
                    <h4>"Really great dinner!!"</h4>
                    <p>
                      Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                      eirmod scaevola sea. Et nec tantas accusamus salutatus,
                      sit commodo veritus te, erat legere fabulas has ut. Rebum
                      laudem cum ea, ius essent fuisset ut. Viderer petentium cu
                      his. Tollit molestie suscipiantur his et.
                    </p>
                    <ul>
                      <li>
                        <a href="#0">
                          <i className="icon_like"></i>
                          <span>Useful</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="icon_dislike"></i>
                          <span>Not useful</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="arrow_back"></i> <span>Reply</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row  */}
                <div className="row reply">
                  <div className="col-md-2 user_info">
                    <figure>
                      <img src="../assets/img/avatar.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col-md-10">
                    <div className="review_content">
                      <strong>Reply from Foogra</strong>
                      <em>Published 3 minutes ago</em>
                      <p>
                        <br />
                        Hi Monika,
                        <br />
                        <br />
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his. Tollit molestie suscipiantur his et.
                        <br />
                        <br />
                        Thanks
                      </p>
                    </div>
                  </div>
                </div>
                {/* /reply  */}
              </div>
              {/* /review_card  */}
            </div>
            {/* /reviews  */}
            <div className="text-right">
              <a href="leave-review.html" className="btn_1 gradient">
                Leave a Review
              </a>
            </div>
          </section>
          {/* /section  */}
        </div>
      </div>
    </div>
  );
};

export default MenuListReviews;
