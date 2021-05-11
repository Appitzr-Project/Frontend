import React from "react";
import MenuList from "./MenuList";

const OrderSummaryCard = (props) => {
    return (
        <div class="col-lg-4" id="sidebar_fixed">
            <div class="box_order mobile_fixed">
                <div class="head">
                    <h3>Order Summary</h3>
                    <a href="#0" class="close_panel_mobile"><i class="icon_close"></i></a>
                </div>
                <div class="main">
                    <ul class="clearfix">
                        <MenuList count="1" name="Enchiladas" price="11" />
                        <MenuList count="2" name="Burrito" price="14" />
                        <MenuList count="1" name="Chicken" price="18" />
                        <MenuList count="2" name="Corona Beer" price="9" />
                        <MenuList count="2" name="Cheese Cake" price="11" />
                    </ul>
                    <ul class="clearfix">
                        <li>Subtotal<span>$56</span></li>
                        <li>Delivery fee<span>$10</span></li>
                        <li class="total">Total<span>$66</span></li>
                    </ul>
                    {/* hide for now */}
                    {/* <div class="dropdown day" style={{ marginBottom: "25px" }}>
                        <a href="#/" data-toggle="dropdown">Day <span id="selected_day"></span></a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-content">
                                <h4>Which day delivered?</h4>
                                <div class="radio_select chose_day">
                                    <ul>
                                        <li>
                                            <input type="radio" id="day_1" name="day" value="Today" />
                                            <label for="day_1">Today<em>-40%</em></label>
                                        </li>
                                        <li>
                                            <input type="radio" id="day_2" name="day" value="Tomorrow" />
                                            <label for="day_2">Tomorrow<em>-40%</em></label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="btn_1_mobile">
                        <a href="order.html" class="btn_1 gradient full-width mb_5">Order Now</a>
                        <div class="text-center"><small>No money charged on this steps</small></div>
                    </div>
                </div>
            </div>
            <div class="btn_reserve_fixed"><a href="#0" class="btn_1 gradient full-width">View Basket</a></div>
        </div >
    );
};

export default OrderSummaryCard;
