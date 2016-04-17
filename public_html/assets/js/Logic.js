
$(document).ready(function () {

    var cm = new CarManager();
    cm.set_format('<div class="car_container" style="background-image: url(\'{{reference_image}}\')">'
            + '<div class = "car_inches" > {{car_inches}} </div>'
            + '<div class = "car_image" > <image src = "{{car_image}}" / > </div>'
            + '<div class = "car_year" > {{year}}</div>'
            + '<div class = "car_name" > {{name}} </div>'
            + '</div>');

//SWB
    cm.add_car(182, 540, "assets/images/cars/1 Decada 45-54/1 Centre Steer (1947).png", car_assets.series3a_circle, "1947", "Centre Steer", "11''", "El Centre Steer es el nombre dado por los aficionados al prototipo del automóvil 4x4 Land Rover. Siendo un prototipo, sólo un ejemplo fue construido y el vehículo de producción difería significativamente de muchas maneras. Desarrollado a finales de 1947 por el Rover Motor Co., el Land Rover estaba destinado a ser un vehículo agrícola basado en el éxito en tiempos de guerra Jeep Willys.");
    cm.add_car(182, 222, "assets/images/cars/1 Decada 45-54/2 Series 1 80_ (1948).png", car_assets.series2_circle, "1948", "Series I 80''", "11''", "Land Rover entró en producción en 1948, con lo que más tarde se denominó la Serie I. Este fue presentado en el Salón de Amsterdam. Fue diseñado originalmente para la explotación agrícola o industrial ligero, y tenía un chasis de acero de sección rectangular, y un cuerpo de aluminio. Originalmente, el Land Rover era un modelo único de oferta, que a partir de 1948 hasta 1951 utiliza una distancia entre ejes (2.000 mm) de 80 pulgadas y un motor de gasolina de 1.6 litros que produce alrededor de 50 CV (37 kW; 51 PS).");

    //LWB
    cm.add_car(245, 222, "assets/images/cars/1 Decada 45-54/3 Tickford SW (1949).png", car_assets.series2_circle, "1949", "Tickford SW 80''", "11''", "Desde el principio se vio que algunos compradores querrían las habilidades de un Land Rover sin los interiores espartanos. En 1949, Land Rover puso en marcha una segunda opción, denominado \"Station Wagon\", equipado con una carrocería construida por Tickford, un carrocero conocido por su trabajo con Rolls-Royce y Lagonda. La carrocería fue construida en madera y tenía capacidad para siete personas. Tickford estaba bien equipado en comparación con el estándar de Land Rover, teniendo asientos de cuero, un calentador, una sola pieza parabrisas laminado, una cubierta de rueda de repuesto de hojalata y otras opciones. La construcción de madera hizo que sean caros de construir. El Tickford se grava como un coche privado, que atrajo a altos niveles de impuesto sobre las compras a diferencia del original Land Rover. Como resultado, menos de 700 Tickfords se vendieron, y todos menos 50 fueron exportados.");
    cm.add_car(245, 430,  "assets/images/cars/1 Decada 45-54/4 Rolls Royce 81_ (1950).png", car_assets.series3_circle, "1950", "Rolls-Royce 81'' B40", "11''", "Texto 4");
    cm.add_car(245, 630, "assets/images/cars/1 Decada 45-54/5 Road Rover (1951).png", car_assets.series4_circle, "1951", "Road Rover", "11''", "Texto 5");
    cm.add_car(245, 730, "assets/images/cars/1 Decada 45-54/6 Pick-up 104_  (1951).png", car_assets.brown_circle, "1951", "Pick-up 104''", "11''", "Texto 6");
//LWB upper
    cm.add_car(255, 125, "assets/images/cars/1 Decada 45-54/7 86_ Army Staff (1951).png", car_assets.series1_circle, "1911", "86'' Army Staff", "11''", "Texto 7");
//LWB upper righter (minerva)
    cm.add_car(360, 110, "assets/images/cars/1 Decada 45-54/8 Minerva 80_ (1952).png", car_assets.series1_circle, "1952", "Minerva 80''", "11''", "Texto 8");

//middle)
    cm.add_car(470, 10, "assets/images/cars/1 Decada 45-54/9 Tractor (1952).png", car_assets.series1_circle, "1952", "Tractor", "11''", "Texto 9");
    cm.add_car(470, 60, "assets/images/cars/1 Decada 45-54/10 Tempo 80_ (1953).png", car_assets.series1_circle, "1953", "Tempo 80''", "11''", "Texto 10");
    cm.add_car(470, 150, "assets/images/cars/1 Decada 45-54/11 Series 1 86_ (1954).png", car_assets.series1_circle, "1954", "Series I 86''", "11''", "Texto 11");
    cm.add_car(470, 180, "assets/images/cars/1 Decada 45-54/12 Series I LWB 107_ (1954).png", car_assets.series1_circle, "1954", "Series I LWB 107''", "11''", "Texto 12");
    cm.add_car(470, 210, "assets/images/cars/1 Decada 45-54/13 Mulliners SW (1954).png", car_assets.series2_circle, "1954", "Mulliners SW", "11''", "Texto 13");
    cm.add_car(470, 390, "assets/images/cars/2 Decada 55-64/14 Forward Control 107_ (1955).png", car_assets.series3_circle, "1955", "Forward Control 107''", "11''", "Texto 14");
    //left side
    cm.add_car(415, 325, "assets/images/cars/2 Decada 55-64/15 Series I 88_ (1956).png", car_assets.series2_circle, "1956", "Series I 88''", "11''", "Texto 15");
    cm.add_car(415, 390, "assets/images/cars/2 Decada 55-64/16 Road Rover (1957).png", car_assets.series3_circle, "1957", "Road Rover", "11''", "Texto 16");

//Militar
    cm.add_car(120, 345, "assets/images/cars/2 Decada 55-64/17 Falta foto", car_assets.series2_circle, "1959", "Series II SWB LWB", "11''", "Texto 17");
    cm.add_car(120, 380, "assets/images/cars/2 Decada 55-64/18 Forward Control 88_ (1960).png", car_assets.series2_circle, "1960", "Forward Control 88''", "11''", "Texto 18");
    cm.add_car(120, 500, "assets/images/cars/2 Decada 55-64/19 Series IIA 88_ (1961).png", car_assets.series2_circle, "1961", "Series IIA 88''", "11''", "Texto 19");
//Forward Control
    cm.add_car(305, 330, "assets/images/cars/2 Decada 55-64/20 LWB 109_ (1961).png", car_assets.series2_circle, "1961", "LWB 109''", "11''", "Texto 20");
    cm.add_car(305, 480, "assets/images/cars/2 Decada 55-64/21 Forest Rover 109_ (1961).png", car_assets.series3_circle, "1961", "109'' Forest Rover", "11''", "Texto 21");

    //LWB righter
    cm.add_car(540, 150, "assets/images/cars/2 Decada 55-64/22 Vicker's Hover Rover (1961).png", car_assets.series1_circle, "1961", "Vicker's Hover Rover", "11''", "Texto 22");
    cm.add_car(540, 250, "assets/images/cars/2 Decada 55-64/23 Forward Control 109_ (1962).png", car_assets.series2_circle, "1962", "Forward Control 109''", "11''", "Texto 23");
    cm.add_car(540, 345, "assets/images/cars/2 Decada 55-64/24 FV18601 (1962).png", car_assets.series2_circle, "1962", "FV18601", "11''", "Texto 24");
    cm.add_car(540, 390, "assets/images/cars/2 Decada 55-64/25 88_Amph (1962).png", car_assets.series2_circle, "1962", "88''Amph", "11''", "Texto 25");
    cm.add_car(540, 505, "assets/images/cars/2 Decada 55-64/26 129_ (1962).png", car_assets.series2_circle, "1962", "129''", "11''", "Texto 26");
//lonely one
    cm.add_car(580, 60, "assets/images/cars/2 Decada 55-64/27 120_ FC (1962).png", car_assets.series1_circle, "1962", "120'' FC", "11''", "Texto 27");
//brown to the right
    cm.add_car(710, 100, "assets/images/cars/3 Decada 65-74/28 109_ Otal (1965).png", car_assets.brown_circle, "1965", "109'' Otal", "11''", "Texto 28");
    cm.add_car(710, 210, "assets/images/cars/3 Decada 65-74/29 Forward Control 110_ (1966).png", car_assets.brown_circle, "1966", "Forward Control 110''", "11''", "Texto 29");
    cm.add_car(700, 340, "assets/images/cars/3 Decada 65-74/30 Gun Tractor (1966).png", car_assets.brown_circle, "1966", "110'' Gun tractor", "11''", "Texto 30");
    cm.add_car(730, 350, "assets/images/cars/3 Decada 65-74/31 Forward Control 1300 109_ (1967).png", car_assets.brown_circle, "1967", "Forward Control 1300 109''", "11''", "Texto 31");
    cm.add_car(710, 385, "assets/images/cars/3 Decada 65-74/32 SYE 157F (1967).png", car_assets.rrover_circle, "1967", "SYE 157F", "11''", "Texto 32");
    cm.add_car(710, 550, "assets/images/cars/3 Decada 65-74/33 Power Trailer (1967).png", car_assets.rrover_circle, "1967", "Power trailer", "11''", "Texto 33");
    cm.add_car(710, 725, "assets/images/cars/3 Decada 65-74/34 Gunbuggy M250_300 88_ (1968).png", car_assets.rrover_circle, "1968", "Gunbuggy M250/300 88''", "11''", "Texto 34");
    cm.add_car(710, 825, "assets/images/cars/3 Decada 65-74/35 Lightweight 88_ (1968).png", car_assets.rrover_circle, "1968", "Lightweight 88''", "11''", "Texto 35");
    cm.add_car(710, 980, "assets/images/cars/3 Decada 65-74/36 Bug-Eye (1968).png", car_assets.rrover_circle, "1968", "Bug-Eye", "11''", "Texto 36");
    //lonely brown
    cm.add_car(770, 855, "assets/images/cars/3 Decada 65-74/37 Velar (1968).png", car_assets.brown_circle, "1968", "Velar", "11''", "Texto 37");
    //right corner
    cm.add_car(815, 865, "assets/images/cars/3 Decada 65-74/38 109_ Pink Panther (1968).png", car_assets.rrover_circle, "1968", "109'' Pink Panther", "11''", "Texto 38");
    cm.add_car(815, 990, "assets/images/cars/3 Decada 65-74/39 1-Ton 109_ (1969).png", car_assets.rrover_circle, "1969", "1-Ton 109''", "11''", "Texto 39");
    cm.add_car(870, 910, "assets/images/cars/3 Decada 65-74/40 Range Rover Classic (1970).png", car_assets.brown_circle, "1970", "Range Rover Classic", "11''", "Texto 40");
    cm.add_car(870, 960, "assets/images/cars/3 Decada 65-74/41 Lightweight 88_ (1971).png", car_assets.rrover_circle, "1971", "Lightweight 88''", "11''", "Texto 41");
    cm.add_car(925, 965, "assets/images/cars/3 Decada 65-74/42 Series 3 (1971).png", car_assets.brown_circle, "1971", "Series III 88''", "11''", "Texto 42");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/43 109_ (1971).png", car_assets.brown_circle, "1971", "109''", "11''", "Texto 43");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/44 101_ (1972).png", car_assets.brown_circle, "1972", "101''", "11''", "Texto 44");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/45 109_ Deep water wading (1972).png", car_assets.brown_circle, "1972", "109'' Deep water wading", "11''", "Texto 45");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/46 Cuthbertson (1972).png", car_assets.brown_circle, "1972", "109'' Cuthbertson", "11''", "Texto 46");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/47 109_ Militar (1974).png", car_assets.brown_circle, "1974", "109'' Militar", "11''", "Texto 47");
    cm.add_car(0, 0, "assets/images/cars/3 Decada 65-74/48 LWB 119_ (1974).png", car_assets.brown_circle, "1974", "LWB 119''", "11''", "Texto 48");

    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/49 SD5 (1975).png", car_assets.brown_circle, "1975", "SD5", "11''", "Texto 49");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/50 Forward Control 1300 101_ (1978).png", car_assets.brown_circle, "1978", "Forward Control 1300 101''", "11''", "Texto 50");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/51 Stage 1 109_ (1979).png", car_assets.brown_circle, "1979", "Stage 1 109''", "11''", "Texto 51");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/52 100_ (1979).png", car_assets.brown_circle, "1979", "100''", "11''", "Texto 52");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/53 SWB Series IIIA (1982).png", car_assets.brown_circle, "1982", "Series IIIA", "11''", "Texto 53");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/54 Range Rover 4 door (1982).png", car_assets.brown_circle, "1982", "Range Rover 4 door", "11''", "Texto 54");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/55 139_ 6x6 SMC FC 82 (1982).png", car_assets.brown_circle, "1982", "139'' 6x6 SMC FC 82", "11''", "Texto 55");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/56 Defender 110_ (1983).png", car_assets.brown_circle, "1983", "Defender 110''", "11''", "Texto 56");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/57 Defender 130_ (1983).png", car_assets.brown_circle, "1983", "Defender 130''", "11''", "Texto 57");
    cm.add_car(0, 0, "assets/images/cars/4 Decada 75-84/58 Defender 90_.png", car_assets.brown_circle, "1984", "Defender 90''", "11''", "Texto 58");

    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/59 Centaur (1985).png", car_assets.brown_circle, "1985", "Centaur", "11''", "Texto 59");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/60 110_ Llama (1986).png", car_assets.brown_circle, "1986", "110'' Llama", "11''", "Texto 60");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/61 Parentie 6x6 (1986).png", car_assets.brown_circle, "1986", "140'' 6x6 Parentie", "11''", "Texto 61");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/62 Series IV 109_ (1988).png", car_assets.brown_circle, "1988", "Series IV 109''", "11''", "Texto 62");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/63 Foers Ibex I (1988).png", car_assets.brown_circle, "1988", "Foers Ibex I", "11''", "Texto 63");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/64 Discovery I (1989).png", car_assets.brown_circle, "1989", "Discovery 1", "11''", "Texto 64");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/65 114_ Challenger_Juno (1991).png", car_assets.brown_circle, "1991", "114'' Challenger/Juno", "11''", "Texto 65");
    cm.add_car(0, 0, "assets/images/cars/5 Decada 85-94/66 Pathfinder (1992).png", car_assets.brown_circle, "1992", "Pathfinder", "11''", "Texto 66");

    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/67 109_ M - 250_300 (1995).png", car_assets.brown_circle, "1995", "109'' M - 250/300", "11''", "Texto 67");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/68 Tomcat (1995).png", car_assets.brown_circle, "1995", "Tomcat", "11''", "Texto 68");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/69 Foers Ibex II (1995).png", car_assets.brown_circle, "1995", "Foers Ibex II", "11''", "Texto 69");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/70 Foers Ibex II (1995).png", car_assets.brown_circle, "1995", "Foers Ibex II", "11''", "Texto 70");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/71 Foers Ibex II (1995).png", car_assets.brown_circle, "1995", "Foers Ibex II", "11''", "Texto 71");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/72 P38A (1995).png", car_assets.brown_circle, "1995", "P38A", "11''", "Texto 72");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/73 Freelander I (1997).png", car_assets.brown_circle, "1997", "Freelander 1", "11''", "Texto 73");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/74 LCV 2_3 (1997).png", car_assets.brown_circle, "1997", "LCV 2/3", "11''", "Texto 74");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/75 Farmer's Friend (1998).png", car_assets.brown_circle, "1998", "Farmer's Friend", "11''", "Texto 75");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/76 Discovery II (1999).png", car_assets.brown_circle, "1999", "Discovery 2", "11''", "Texto 76");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/77 SVX (1999).png", car_assets.brown_circle, "1999", "SVX", "11''", "Texto 77");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/78 109_ Anibal PS10 (2001).png", car_assets.brown_circle, "2001", "109'' Anibal PS10", "11''", "Texto 78");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/79 147_ (2001).png", car_assets.brown_circle, "2001", "147''", "11''", "Texto 79");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/80 3000 (2004).png", car_assets.brown_circle, "2004", "3000", "11''", "Texto 80");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/81 Discovery III (2004).png", car_assets.brown_circle, "2004", "Discovery 3", "11''", "Texto 81");
    cm.add_car(0, 0, "assets/images/cars/6 Decada 95-04/82 Range Stormer (2004).png", car_assets.brown_circle, "2004", "Range Stormer", "11''", "Texto 82");

    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/83 L320 (2005).png", car_assets.brown_circle, "2005", "Sport L320", "11''", "Texto 83");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/84 Land-e (2006).png", car_assets.brown_circle, "2006", "Land-e", "11''", "Texto 84");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/85 Wildcat (2007).png", car_assets.brown_circle, "2007", "Wildcat", "11''", "Texto 85");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/86 Nemesis (2007).png", car_assets.brown_circle, "2007", "Nemesis", "11''", "Texto 86");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/87 Freelander II (2007).png", car_assets.brown_circle, "2007", "Freelander 2", "11''", "Texto 87");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/88 LRX (2008).png", car_assets.brown_circle, "2008", "LRX", "11''", "Texto 88");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/89 Discovery IV (2009).png", car_assets.brown_circle, "2009", "Discovery 4", "11''", "Texto 89");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/90 EXR (2011).png", car_assets.brown_circle, "2011", "EXR", "11''", "Texto 90");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/91 F8 (2011).png", car_assets.brown_circle, "2011", "F8", "11''", "Texto 91");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/92 Evoque L538 (2011).png", car_assets.brown_circle, "2011", "Evoque L538", "11''", "Texto 92");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/93 DC100 (2011).png", car_assets.brown_circle, "2011", "DC100", "11''", "Texto 93");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/94 DC100 Sport (2011).png", car_assets.brown_circle, "2011", "DC100 Sport", "11''", "Texto 94");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/95 Evoque convertible (2012).png", car_assets.brown_circle, "2012", "Evoque convertible", "11''", "Texto 95");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/96 Range Rover L405 (2013).png", car_assets.brown_circle, "2013", "Range Rover L405", "11''", "Texto 96");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/97 Herour (2014).png", car_assets.brown_circle, "2014", "Herour", "11''", "Texto 97");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/98 Sport L494 (2014).png", car_assets.brown_circle, "2014", "Sport L494", "11''", "Texto 98");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/99 Discovery Vision (2014).png", car_assets.brown_circle, "2014", "Discovery Vision", "11''", "Texto 99");
    cm.add_car(0, 0, "assets/images/cars/7 Decada 05-15/100 Freelander Sport (2015).png", car_assets.brown_circle, "2015", "Freelander Sport", "11''", "Texto 100");


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

