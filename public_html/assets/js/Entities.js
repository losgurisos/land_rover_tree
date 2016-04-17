
var Position = function (x, y) {
    this.x = x;
    this.y = y;
};

var Car = function (x_position, y_position, car_image, reference_image, year, name, inches,description) {
    var _this = this;
    this.car_image = car_image;
    this.reference_image = reference_image;
    this.year = year;
    this.name = name;
    this.inches = inches;
    this.position = new Position(x_position, y_position);
    this.description = description;
    this.id = 0;
    var _format;
    this.set_format = function (format) {
        _format = format;
    };
    this.parse_format = function () {
        var f = _format;
        f = f.replace("{{name}}", _this.name);
        f = f.replace("{{car_image}}", _this.car_image);
        f = f.replace("{{car_inches}}", _this.inches);
        f = f.replace("{{reference_image}}", _this.reference_image);
        f = f.replace("{{year}}", _this.year);
        f = f.replace("{{inches}}", _this.inches);
        return f;
    };
    this.get_render = function () {
        return (_this.parse_format(_format));
    };
};

var CarManager = function () {

    var _this = this;
    var _id = 0;
    var _car_list = new Array();
    var _render_on_id = "content";
    var _id_format = "car_{{id}}";
    var _format = "<div>{{name}}</div>";

    this.add_car = function (x_position, y_position, car_image, reference_image, year, name, inches, description) {
        var car = new Car(x_position, y_position, car_image, reference_image, year, name, inches, description);
        car.id = _id + 1;
        car.set_format(_format);
        _car_list.push(car);
        // console.log(car_list);
    };
    //renderer
    this.render_all = function () {
        _car_list.forEach(function (c) {
            var render = c.get_render();
            var jq_obj = $(render);
            jq_obj.attr('id', _id_format.replace("{{id}}", c.id));
            jq_obj.css("left", c.position.x);
            jq_obj.css("top", c.position.y);
            jq_obj.css("position", "absolute");
            $("#" + _render_on_id).append(jq_obj);
        });
    };
    this.set_format = function (format) {
        _format = format;
    };
    //searcher TODO
    //show_only_by()
    //show_all
};