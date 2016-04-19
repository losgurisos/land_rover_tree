var cm = new CarManager();
$(document).ready(function () {

    
    cm.set_format('<div class="car_container" style="background-image: url(\'{{reference_image}}\')">'
            + '<div class = "car_inches" > {{car_inches}} </div>'
            + '<div class = "car_image" > <image src = "{{car_image}}" / > </div>'
            + '<div class = "car_year" > {{year}}</div>'
            + '<div class = "car_name" > {{name}} </div>'
            + '</div>');

    cm.add_car(car_cat_pos_x.centre_steer, 13, "assets/images/cars/1 Decada 45-54/1 Centre Steer (1947).png", car_assets.series1_circle, "1947", "Centre Steer", "", "El Centre Steer es el nombre dado por los aficionados al prototipo del automóvil 4x4 Land Rover. Siendo un prototipo, sólo un ejemplo fue construido y el vehículo de producción difería significativamente de muchas maneras. Desarrollado a finales de 1947 por el Rover Motor Co., el Land Rover estaba destinado a ser un vehículo agrícola basado en el éxito en tiempos de guerra Jeep Willys.");
    cm.add_car(car_cat_pos_x.centre_steer, 'auto', "assets/images/cars/1 Decada 45-54/2 Series 1 80_ (1948).png", car_assets.series1_circle, "1948", "Series I", "80''", "Land Rover entró en producción en 1948, con lo que más tarde se denominó la Serie I. Este fue presentado en el Salón de Amsterdam. Fue diseñado originalmente para la explotación agrícola o industrial ligero, y tenía un chasis de acero de sección rectangular, y un cuerpo de aluminio. Originalmente, el Land Rover era un modelo único de oferta, que a partir de 1948 hasta 1951 utiliza una distancia entre ejes (2.000 mm) de 80 pulgadas y un motor de gasolina de 1.6 litros que produce alrededor de 50 CV (37 kW; 51 PS).");
    cm.add_car(674, 'auto', "assets/images/cars/1 Decada 45-54/3 Tickford SW (1949).png", car_assets.series1_circle, "1949", "Tickford SW", "80''", "Desde el principio se vio que algunos compradores querrían las habilidades de un Land Rover sin los interiores espartanos. En 1949, Land Rover puso en marcha una segunda opción, denominado \"Station Wagon\", equipado con una carrocería construida por Tickford, un carrocero conocido por su trabajo con Rolls-Royce y Lagonda. La carrocería fue construida en madera y tenía capacidad para siete personas. Tickford estaba bien equipado en comparación con el estándar de Land Rover, teniendo asientos de cuero, un calentador, una sola pieza parabrisas laminado, una cubierta de rueda de repuesto de hojalata y otras opciones. La construcción de madera hizo que sean caros de construir. El Tickford se grava como un coche privado, que atrajo a altos niveles de impuesto sobre las compras a diferencia del original Land Rover. Como resultado, menos de 700 Tickfords se vendieron, y todos menos 50 fueron exportados.");
    cm.add_car(car_cat_pos_x.brown_3, 'auto', "assets/images/cars/1 Decada 45-54/4 Rolls Royce 81_ (1950).png", car_assets.brown_circle, "1951", "Rolls-Royce B40", "81''", "Texto 4");
    cm.add_car(car_cat_pos_x.Road_Rover_1, 'auto', "assets/images/cars/1 Decada 45-54/5 Road Rover (1951).png", car_assets.brown_circle, "1951", "Road Rover", "", "Texto 5");
    cm.add_car(car_cat_pos_x.brown_1, 'auto', "assets/images/cars/1 Decada 45-54/6 Pick-up 104_  (1951).png", car_assets.brown_circle, "1951", "Pick-up", "104''", "Texto 6");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/1 Decada 45-54/7 86_ Army Staff (1951).png", car_assets.brown_circle, "1951", "Army Staff", "86''", "Texto 7");
    cm.add_car(419, 'auto', "assets/images/cars/1 Decada 45-54/8 Minerva 80_ (1952).png", car_assets.series1_circle, "1952", "Minerva", "80''", "Texto 8");
    cm.add_car(car_cat_pos_x.brown_4 + 20, 'auto', "assets/images/cars/1 Decada 45-54/9 Tractor (1952).png", car_assets.brown_circle, "1952", "Tractor", "86''", "Texto 9");
    cm.add_car(297, 'auto', "assets/images/cars/1 Decada 45-54/10 Tempo 80_ (1953).png", car_assets.series1_circle, "1953", "Tempo", "80''", "Texto 10");
    cm.add_car(car_cat_pos_x.centre_steer, 'auto', "assets/images/cars/1 Decada 45-54/11 Series 1 86_ (1954).png", car_assets.series1_circle, "1954", "Series I", "86''", "Texto 11");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/1 Decada 45-54/12 Series I LWB 107_ (1954).png", car_assets.series1_circle, "1954", "Series I LWB", "107''", "Texto 12");
    cm.add_car(car_cat_pos_x.brown_3 + 30, 'auto', "assets/images/cars/1 Decada 45-54/13 Mulliners SW (1954).png", car_assets.brown_circle, "1954", "Mulliners SW", "", "Texto 13");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/2 Decada 55-64/14 Forward Control 107_ (1955).png", car_assets.brown_circle, "1955", "Forward Control", "107''", "Texto 14");
    cm.add_car(car_cat_pos_x.centre_steer, 'auto', "assets/images/cars/2 Decada 55-64/15 Series I 88_ (1956).png", car_assets.series1_circle, "1956", "Series I", "88''", "Texto 15");
    cm.add_car(car_cat_pos_x.Road_Rover_1, 'auto', "assets/images/cars/2 Decada 55-64/16 Road Rover (1957).png", car_assets.brown_circle, "1957", "Road Rover", "", "Texto 16");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/2 Decada 55-64/17 Falta foto", car_assets.series2_circle, "1959", "Series II SWB LWB", "109''", "Texto 17");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/2 Decada 55-64/18 Forward Control 88_ (1960).png", car_assets.brown_circle, "1960", "Forward Control", "88''", "Texto 18");
    cm.add_car(car_cat_pos_x.centre_steer, 'auto', "assets/images/cars/2 Decada 55-64/19 Series IIA 88_ (1961).png", car_assets.series2_circle, "1961", "Series IIA", "88''", "Texto 19");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/2 Decada 55-64/20 LWB 109_ (1961).png", car_assets.series2_circle, "1961", "LWB", "109''", "Texto 20");
    cm.add_car(car_cat_pos_x.brown_1, 'auto', "assets/images/cars/2 Decada 55-64/21 Forest Rover 109_ (1961).png", car_assets.brown_circle, "1961", "Forest Rover", "109''", "Texto 21");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/2 Decada 55-64/22 Vicker's Hover Rover (1961).png", car_assets.brown_circle, "1961", "Vicker's Hover Rover", "", "Texto 22");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/2 Decada 55-64/23 Forward Control 109_ (1962).png", car_assets.series2_circle, "1962", "Forward Control", "109''", "Texto 23");
    cm.add_car(car_cat_pos_x.brown_3, 'auto', "assets/images/cars/2 Decada 55-64/24 FV18601 (1962).png", car_assets.brown_circle, "1962", "FV18601", "", "Texto 24");
    cm.add_car(car_cat_pos_x.brown_4, 'auto', "assets/images/cars/2 Decada 55-64/25 88_Amph (1962).png", car_assets.brown_circle, "1962", "Amph", "88''", "Texto 25");
    cm.add_car(car_cat_pos_x.brown_5, 'auto', "assets/images/cars/2 Decada 55-64/26 129_ (1962).png", car_assets.brown_circle, "1962", "129''", "129''", "Texto 26");
    cm.add_car(car_cat_pos_x.brown_6, 'auto', "assets/images/cars/2 Decada 55-64/27 120_ FC (1962).png", car_assets.brown_circle, "1962", "120'' FC", "", "Texto 27");
    cm.add_car(car_cat_pos_x.brown_1 + 30, 'auto', "assets/images/cars/3 Decada 65-74/28 109_ Otal (1965).png", car_assets.brown_circle, "1965", "Otal", "109''", "Texto 28");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/3 Decada 65-74/29 Forward Control 110_ (1966).png", car_assets.defender_circle, "1966", "Forward Control 110''", "110''", "Texto 29");
    cm.add_car(car_cat_pos_x.brown_2 + 30, 'auto', "assets/images/cars/3 Decada 65-74/30 Gun Tractor (1966).png", car_assets.brown_circle, "1966", "Gun tractor", "110''", "Texto 30");
    cm.add_car(car_cat_pos_x.Forward_Control_1, 'auto', "assets/images/cars/3 Decada 65-74/31 Forward Control 1300 109_ (1967).png", car_assets.series2_circle, "1967", "Forward Control 1300 109''", "", "Texto 31");
    cm.add_car(car_cat_pos_x.Road_Rover_1 - 20, 'auto', "assets/images/cars/3 Decada 65-74/32 SYE 157F (1967).png", car_assets.brown_circle, "1967", "SYE 157F", "", "Texto 32");
    cm.add_car(car_cat_pos_x.brown_3 + 30, 'auto', "assets/images/cars/3 Decada 65-74/33 Power Trailer (1967).png", car_assets.brown_circle, "1967", "Power trailer", "", "Texto 33");
    cm.add_car(car_cat_pos_x.Militar, 'auto', "assets/images/cars/3 Decada 65-74/34 Gunbuggy M250_300 88_ (1968).png", car_assets.series2_circle, "1968", "Gunbuggy M250/300 88''", "88''", "Texto 34");
    cm.add_car(car_cat_pos_x.Lightweight, 'auto', "assets/images/cars/3 Decada 65-74/35 Lightweight 88_ (1968).png", car_assets.series2_circle, "1968", "Lightweight 88''", "88''", "Texto 35");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/3 Decada 65-74/36 Bug-Eye (1968).png", car_assets.series2_circle, "1968", "Bug-Eye", "", "Texto 36");
    cm.add_car(car_cat_pos_x.Road_Rover_1 + 20, 'auto', "assets/images/cars/3 Decada 65-74/37 Velar (1968).png", car_assets.brown_circle, "1968", "Velar", "", "Texto 37");
    cm.add_car(car_cat_pos_x.brown_4 + 30, 'auto', "assets/images/cars/3 Decada 65-74/38 109_ Pink Panther (1968).png", car_assets.brown_circle, "1968", "109'' Pink Panther", "109''", "Texto 38");
    cm.add_car((car_cat_pos_x.Forward_Control_2 + car_cat_pos_x.LWD_2 ) / 2, 'auto', "assets/images/cars/3 Decada 65-74/39 1-Ton 109_ (1969).png", car_assets.series2_circle, "1969", "1-Ton 109''", "109''", "Texto 39");
    cm.add_car(car_cat_pos_x.Road_Rover_2, 'auto', "assets/images/cars/3 Decada 65-74/40 Range Rover Classic (1970).png", car_assets.rrover_circle, "1970", "Range Rover Classic", "", "Texto 40");
    cm.add_car(car_cat_pos_x.Lightweight, 'auto', "assets/images/cars/3 Decada 65-74/41 Lightweight 88_ (1971).png", car_assets.series3_circle, "1971", "Lightweight 88''", "88''", "Texto 41");
    cm.add_car(car_cat_pos_x.centre_steer, 'auto', "assets/images/cars/3 Decada 65-74/42 Series 3 (1971).png", car_assets.series3_circle, "1971", "Series III 88''", "88''", "Texto 42");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/3 Decada 65-74/43 109_ (1971).png", car_assets.series2_circle, "1971", "109''", "109''", "Texto 43");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/3 Decada 65-74/44 101_ (1972).png", car_assets.series3_circle, "1972", "101''", "101''", "Texto 44");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/3 Decada 65-74/45 109_ Deep water wading (1972).png", car_assets.brown_circle, "1972", "109'' Deep water wading", "109''", "Texto 45");
    cm.add_car(car_cat_pos_x.brown_4 + 30, 'auto', "assets/images/cars/3 Decada 65-74/46 Cuthbertson (1972).png", car_assets.brown_circle, "1972", "109'' Cuthbertson", "109''", "Texto 46");
    cm.add_car(car_cat_pos_x.Militar, 'auto', "assets/images/cars/3 Decada 65-74/47 109_ Militar (1974).png", car_assets.series2_circle, "1974", "109'' Militar", "109''", "Texto 47");
    cm.add_car(car_cat_pos_x.LWD_1, 'auto', "assets/images/cars/3 Decada 65-74/48 LWB 119_ (1974).png", car_assets.series3_circle, "1974", "LWB 119''", "119''", "Texto 48");
    cm.add_car(car_cat_pos_x.brown_3, 'auto', "assets/images/cars/4 Decada 75-84/49 SD5 (1975).png", car_assets.brown_circle, "1975", "SD5", "", "Texto 49");
    cm.add_car(car_cat_pos_x.Forward_Control_1, 'auto', "assets/images/cars/4 Decada 75-84/50 Forward Control 1300 101_ (1978).png", car_assets.series3_circle, "1978", "Forward Control 1300 101''", "101''", "Texto 50");
    cm.add_car(car_cat_pos_x.LWD_2, 'auto', "assets/images/cars/4 Decada 75-84/51 Stage 1 109_ (1979).png", car_assets.series2_circle, "1979", "Stage 1 109''", "109''", "Texto 51");
    cm.add_car(car_cat_pos_x.brown_4, 'auto', "assets/images/cars/4 Decada 75-84/52 100_ (1979).png", car_assets.brown_circle, "1979", "100''", "100''", "Texto 52");
    cm.add_car(car_cat_pos_x.SWB, 'auto', "assets/images/cars/4 Decada 75-84/53 SWB Series IIIA (1982).png", car_assets.series3a_circle, "1982", "Series IIIA", "", "Texto 53");
    cm.add_car(car_cat_pos_x.Road_Rover_2, 'auto', "assets/images/cars/4 Decada 75-84/54 Range Rover 4 door (1982).png", car_assets.rrover_circle, "1982", "Range Rover 4 door", "", "Texto 54");
    cm.add_car(car_cat_pos_x.brown_3, 'auto', "assets/images/cars/4 Decada 75-84/55 139_ 6x6 SMC FC 82 (1982).png", car_assets.brown_circle, "1982", "139'' 6x6 SMC FC 82", "139''", "Texto 55");
    cm.add_car(car_cat_pos_x.Defender_2, 'auto', "assets/images/cars/4 Decada 75-84/56 Defender 110_ (1983).png", car_assets.defender_circle, "1983", "Defender 110''", "110''", "Texto 56");
    cm.add_car(car_cat_pos_x.Defender_3, 'auto', "assets/images/cars/4 Decada 75-84/57 Defender 130_ (1983).png", car_assets.defender_circle, "1983", "Defender 130''", "130''", "Texto 57");
    cm.add_car(car_cat_pos_x.Defender_1, 'auto', "assets/images/cars/4 Decada 75-84/58 Defender 90_.png", car_assets.defender_circle, "1984", "Defender 90''", "90''", "Texto 58");
    cm.add_car(car_cat_pos_x.brown_1 + 30, 'auto', "assets/images/cars/5 Decada 85-94/59 Centaur (1985).png", car_assets.brown_circle, "1985", "Centaur", "", "Texto 59");
    cm.add_car(car_cat_pos_x.Forward_Control_2, 'auto', "assets/images/cars/5 Decada 85-94/60 110_ Llama (1986).png", car_assets.brown_circle, "1986", "110'' Llama", "110''", "Texto 60");
    cm.add_car(car_cat_pos_x.brown_4, 'auto', "assets/images/cars/5 Decada 85-94/61 Parentie 6x6 (1986).png", car_assets.brown_circle, "1986", "140'' 6x6 Parentie", "140''", "Texto 61");
    cm.add_car(car_cat_pos_x.LWD_1, 'auto', "assets/images/cars/5 Decada 85-94/62 Series IV 109_ (1988).png", car_assets.series4_circle, "1988", "Series IV 109''", "109''", "Texto 62");
    cm.add_car(car_cat_pos_x.Foers_ibex, 'auto', "assets/images/cars/5 Decada 85-94/63 Foers Ibex I (1988).png", car_assets.violet_circle, "1988", "Foers Ibex I", "", "Texto 63");
    cm.add_car(car_cat_pos_x.Discovery, 'auto', "assets/images/cars/5 Decada 85-94/64 Discovery I (1989).png", car_assets.discovery_circle, "1989", "Discovery 1", "", "Texto 64");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/5 Decada 85-94/65 114_ Challenger_Juno (1991).png", car_assets.brown_circle, "1991", "114'' Challenger/Juno", "114''", "Texto 65");
    cm.add_car(car_cat_pos_x.Freelander, 'auto', "assets/images/cars/5 Decada 85-94/66 Pathfinder (1992).png", car_assets.freelander_circle, "1992", "Pathfinder", "", "Texto 66");
    cm.add_car(car_cat_pos_x.LWD_1, 'auto', "assets/images/cars/6 Decada 95-04/67 109_ M - 250_300 (1995).png", car_assets.brown_circle, "1995", "109'' M - 250/300", "109''", "Texto 67");
    cm.add_car(car_cat_pos_x.Bowler, 'auto', "assets/images/cars/6 Decada 95-04/68 Tomcat (1995).png", car_assets.brown_circle, "1995", "Tomcat", "", "Texto 68");
    cm.add_car(car_cat_pos_x.Foers_ibex, 'auto', "assets/images/cars/6 Decada 95-04/69 Foers Ibex II (1995).png", car_assets.violet_circle, "1995", "Foers Ibex II", "", "Texto 69");
    cm.add_car(car_cat_pos_x.Foers_ibex, 834 + 48 /*manually 1995's y pos + 48*/, "assets/images/cars/6 Decada 95-04/70 Foers Ibex II (1995).png", car_assets.violet_circle, "1995", "Foers Ibex II", "", "Texto 70");
    cm.add_car(car_cat_pos_x.Foers_ibex, 834 + 100 /*manually 1995's y pos + 100*/, "assets/images/cars/6 Decada 95-04/71 Foers Ibex II (1995).png", car_assets.violet_circle, "1995", "Foers Ibex II", "", "Texto 71");
    cm.add_car(car_cat_pos_x.Road_Rover_2, 'auto', "assets/images/cars/6 Decada 95-04/72 P38A (1995).png", car_assets.rrover_circle, "1995", "P38A", "", "Texto 72");
    cm.add_car(car_cat_pos_x.Freelander, 'auto', "assets/images/cars/6 Decada 95-04/73 Freelander I (1997).png", car_assets.freelander_circle, "1997", "Freelander 1", "", "Texto 73");
    cm.add_car(car_cat_pos_x.brown_1, 'auto', "assets/images/cars/6 Decada 95-04/74 LCV 2_3 (1997).png", car_assets.brown_circle, "1997", "LCV 2/3", "", "Texto 74");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/6 Decada 95-04/75 Farmer's Friend (1998).png", car_assets.brown_circle, "1998", "Farmer's Friend", "", "Texto 75");
    cm.add_car(car_cat_pos_x.Discovery, 'auto', "assets/images/cars/6 Decada 95-04/76 Discovery II (1999).png", car_assets.discovery_circle, "1999", "Discovery 2", "", "Texto 76");
    cm.add_car(car_cat_pos_x.brown_3, 'auto', "assets/images/cars/6 Decada 95-04/77 SVX (1999).png", car_assets.brown_circle, "1999", "SVX", "", "Texto 77");
    cm.add_car(car_cat_pos_x.Santana, 'auto', "assets/images/cars/6 Decada 95-04/78 109_ Anibal PS10 (2001).png", car_assets.violet_circle, "2001", "109'' Anibal PS10", "109''", "Texto 78");
    cm.add_car(car_cat_pos_x.brown_2, 'auto', "assets/images/cars/6 Decada 95-04/79 147_ (2001).png", car_assets.brown_circle, "2001", "147''", "147''", "Texto 79");
    cm.add_car(car_cat_pos_x.Moratab, 'auto', "assets/images/cars/6 Decada 95-04/80 3000 (2004).png", car_assets.violet_circle, "2004", "3000", "", "Texto 80");
    cm.add_car(car_cat_pos_x.Discovery, 'auto', "assets/images/cars/6 Decada 95-04/81 Discovery III (2004).png", car_assets.discovery_circle, "2004", "Discovery 3", "", "Texto 81");
    cm.add_car(car_cat_pos_x.brown_1 + 10, 'auto', "assets/images/cars/6 Decada 95-04/82 Range Stormer (2004).png", car_assets.brown_circle, "2004", "Range Stormer", "", "Texto 82");
    cm.add_car(car_cat_pos_x.Sport, 'auto', "assets/images/cars/7 Decada 05-15/83 L320 (2005).png", car_assets.rrover_circle, "2005", "Sport L320", "", "Texto 83");
    cm.add_car(car_cat_pos_x.brown_4 + 20, 'auto', "assets/images/cars/7 Decada 05-15/84 Land-e (2006).png", car_assets.brown_circle, "2006", "Land-e", "", "Texto 84");
    cm.add_car(car_cat_pos_x.QT, 'auto', "assets/images/cars/7 Decada 05-15/85 Wildcat (2007).png", car_assets.violet_circle, "2007", "Wildcat", "", "Texto 85");
    cm.add_car(car_cat_pos_x.Bowler, 'auto', "assets/images/cars/7 Decada 05-15/86 Nemesis (2007).png", car_assets.violet_circle, "2007", "Nemesis", "", "Texto 86");
    cm.add_car(car_cat_pos_x.Freelander, 'auto', "assets/images/cars/7 Decada 05-15/87 Freelander II (2007).png", car_assets.freelander_circle, "2007", "Freelander 2", "", "Texto 87");
    cm.add_car(car_cat_pos_x.Evoque, 'auto', "assets/images/cars/7 Decada 05-15/88 LRX (2008).png", car_assets.brown_circle, "2008", "LRX", "", "Texto 88");
    cm.add_car(car_cat_pos_x.Discovery, 'auto', "assets/images/cars/7 Decada 05-15/89 Discovery IV (2009).png", car_assets.discovery_circle, "2009", "Discovery 4", "", "Texto 89");
    cm.add_car(car_cat_pos_x.Bowler, 'auto', "assets/images/cars/7 Decada 05-15/90 EXR (2011).png", car_assets.violet_circle, "2011", "EXR", "", "Texto 90");
    cm.add_car(car_cat_pos_x.Foers_ibex, 'auto', "assets/images/cars/7 Decada 05-15/91 F8 (2011).png", car_assets.violet_circle, "2011", "F8", "", "Texto 91");
    cm.add_car(car_cat_pos_x.Evoque, 'auto', "assets/images/cars/7 Decada 05-15/92 Evoque L538 (2011).png", car_assets.rrover_circle, "2011", "Evoque L538", "", "Texto 92");
    cm.add_car(car_cat_pos_x.brown_5 + 10, 'auto', "assets/images/cars/7 Decada 05-15/93 DC100 (2011).png", car_assets.brown_circle, "2011", "DC100", "", "Texto 93");
    cm.add_car(car_cat_pos_x.brown_6 + 5, 'auto', "assets/images/cars/7 Decada 05-15/94 DC100 Sport (2011).png", car_assets.brown_circle, "2011", "DC100 Sport", "", "Texto 94");
    cm.add_car(car_cat_pos_x.brown_4 + 20, 'auto', "assets/images/cars/7 Decada 05-15/95 Evoque convertible (2012).png", car_assets.brown_circle, "2012", "Evoque convertible", "", "Texto 95");
    cm.add_car(car_cat_pos_x.Road_Rover_2, 'auto', "assets/images/cars/7 Decada 05-15/96 Range Rover L405 (2013).png", car_assets.rrover_circle, "2013", "Range Rover L405", "", "Texto 96");
    cm.add_car(car_cat_pos_x.Moratab, 'auto', "assets/images/cars/7 Decada 05-15/97 Herour (2014).png", car_assets.violet_circle, "2014", "Herour", "", "Texto 97");
    cm.add_car(car_cat_pos_x.Sport, 'auto', "assets/images/cars/7 Decada 05-15/98 Sport L494 (2014).png", car_assets.rrover_circle, "2014", "Sport L494", "", "Texto 98");
    cm.add_car(car_cat_pos_x.brown_5 + 20, 'auto', "assets/images/cars/7 Decada 05-15/99 Discovery Vision (2014).png", car_assets.brown_circle, "2014", "Discovery Vision", "", "Texto 99");
    cm.add_car(car_cat_pos_x.Freelander, 'auto', "assets/images/cars/7 Decada 05-15/100 Freelander Sport (2015).png", car_assets.freelander_circle, "2015", "Freelander Sport", "", "Texto 100");
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
    rrover_circle: "assets/images/rrover_circle.png",
    violet_circle: "assets/images/violet_circle.png"
};

var car_cat_pos_x = {
    Moratab: 85,
    Militar: 145,
    SWB: 213,
    Santana: 213,
    LWD_1: 286,
    QT: 289,
    Bowler: 352,
    Forward_Control_1: 355,
    Foers_ibex: 422,
    Lightweight: 483,
    centre_steer: 545,
    Defender_1: 550,
    Defender_2: 599,
    LWD_2: 627,
    Defender_3: 651,
    Freelander: 708,
    Forward_Control_2: 752,
    Discovery: 768,
    Road_Rover_1: 827,
    Road_Rover_2: 826,
    brown_1: 880,
    Sport: 946,
    brown_2: 940,
    brown_3: 1000,
    Evoque: 1011,
    brown_4: 1060,
    brown_5: 1120,
    brown_6: 1180

};
