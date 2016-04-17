
$(document).ready(function () {

    var cm = new CarManager();
    cm.set_format('<div class="car_container" style="background-image: url(\'{{reference_image}}\')">'
            + '<div class = "car_inches" > {{car_inches}} </div>'
            + '<div class = "car_image" > <image src = "{{car_image}}" / > </div>'
            + '<div class = "car_year" > {{year}}</div>'
            + '<div class = "car_name" > {{name}} </div>'
            + '</div>');

//SWB
    cm.add_car(182, 540, "assets/images/cars/freelander1.png", car_assets.series3a_circle, "1911", "Pepe", "11''");
    cm.add_car(182, 222, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");

    //LWB
    cm.add_car(245, 222, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(245, 430, "assets/images/cars/freelander1.png", car_assets.series3_circle, "1911", "Pepe", "11''");
    cm.add_car(245, 630, "assets/images/cars/freelander1.png", car_assets.series4_circle, "1911", "Pepe", "11''");
    cm.add_car(245, 730, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
//LWB upper
    cm.add_car(255, 125, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
//LWB upper righter (minerva)
    cm.add_car(360, 110, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");

//middle)
    cm.add_car(470, 10, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
    cm.add_car(470, 60, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
    cm.add_car(470, 150, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
    cm.add_car(470, 180, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
    cm.add_car(470, 210, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(470, 390, "assets/images/cars/freelander1.png", car_assets.series3_circle, "1911", "Pepe", "11''");
    //left side
    cm.add_car(415, 325, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(415, 390, "assets/images/cars/freelander1.png", car_assets.series3_circle, "1911", "Pepe", "11''");

//Militar
    cm.add_car(120, 345, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(120, 380, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(120, 500, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
//Forward Control
    cm.add_car(305, 330, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(305, 480, "assets/images/cars/freelander1.png", car_assets.series3_circle, "1911", "Pepe", "11''");

    //LWB righter
    cm.add_car(540, 150, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
    cm.add_car(540, 250, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(540, 345, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(540, 390, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
    cm.add_car(540, 505, "assets/images/cars/freelander1.png", car_assets.series2_circle, "1911", "Pepe", "11''");
//lonely one
    cm.add_car(580, 60, "assets/images/cars/freelander1.png", car_assets.series1_circle, "1911", "Pepe", "11''");
//brown to the right
    cm.add_car(710, 100, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 210, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    cm.add_car(700, 340, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    cm.add_car(730, 350, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 385, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 550, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 725, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 825, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(710, 980, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    //lonely brown
    cm.add_car(770, 855, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    //right corner
    cm.add_car(815, 865, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(815, 990, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(870, 910, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    cm.add_car(870, 960, "assets/images/cars/freelander1.png", car_assets.rrover_circle, "1911", "Pepe", "11''");
    cm.add_car(925, 965, "assets/images/cars/freelander1.png", car_assets.brown_circle, "1911", "Pepe", "11''");
    //render
    cm.render_all();
});

var car_assets = {
    series2_circle: "assets/images/series2_circle.png",
    series1_circle: "assets/images/series1_circle.png",
    brown_circle: "assets/images/brown_circle.png",
    defender_circle: "assets/images/defender_circle.png",
    discovery_circle: "assets/images/discovery_circle.png",
    freelander_circle: "assets/images/freelander_circle.png",
    series3_circle: "assets/images/series3_circle.png",
    series3a_circle: "assets/images/series3a_circle.png",
    series4_circle: "assets/images/series4_circle.png",
    rrover_circle: "assets/images/rrover_circle.png"
};

