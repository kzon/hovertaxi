db.aircraft_class.insert([
    {
        _id: ObjectId("5063114bd386d8fadbd6b004"),
        name: "Вертолет",
        max_range: NumberInt(100),
        min_range: NumberInt(2),
        cost: NumberInt(6)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b005"),
        name: "Мультикоптер",
        max_range: NumberInt(50),
        min_range: NumberInt(1),
        cost: NumberInt(3)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b006"),
        name: "Хавербайк",
        max_range: NumberInt(20),
        min_range: NumberInt(0),
        cost: NumberInt(1)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b007"),
        name: "Электроджет",
        max_range: NumberInt(70),
        min_range: NumberInt(2),
        cost: NumberInt(2)
    },
]);

db.aircraft_model.insert([
    {
        _id: ObjectId("5063114bd386d8fadbd6b007"),
        name: "Uber T-1",
        class_id: "5063114bd386d8fadbd6b005",
        cruise_speed: NumberInt(80)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b008"),
        name: "Uber T-2",
        class_id: "5063114bd386d8fadbd6b005",
        cruise_speed: NumberInt(90)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b009"),
        name: "Airbus CityLift",
        class_id: "5063114bd386d8fadbd6b004",
        cruise_speed: NumberInt(95)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b010"),
        name: "Columbus Majesty",
        class_id: "5063114bd386d8fadbd6b006",
        cruise_speed: NumberInt(40)
    },
    {
        _id: ObjectId("5063114bd386d8fadbd6b011"),
        name: "Lilium Jet 3",
        class_id: "5063114bd386d8fadbd6b007",
        cruise_speed: NumberInt(80)
    },
]);

db.aircraft.insert([
    {
        model_id: "5063114bd386d8fadbd6b007",
        number: "f30e8dc",
        position: {type: "Point", coordinates: [55.712308, 37.673291]},
        speed: NumberInt(0),
        direction: NumberInt(0),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b007",
        number: "f31e8dc",
        position: {type: "Point", coordinates: [55.749750, 37.542581]},
        speed: NumberInt(0),
        direction: NumberInt(0),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b008",
        number: "89d4b33",
        position: {type: "Point", coordinates: [55.758078, 37.549688]},
        speed: NumberInt(80),
        direction: NumberInt(78),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "6b45d89",
        position: {type: "Point", coordinates: [55.759840, 37.598313]},
        speed: NumberInt(130),
        direction: NumberInt(103),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "6b45d95",
        position: {type: "Point", coordinates: [55.803592, 37.667587]},
        speed: NumberInt(90),
        direction: NumberInt(195),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "6b45d96",
        position: {type: "Point", coordinates: [55.747091, 37.619525]},
        speed: NumberInt(120),
        direction: NumberInt(240),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "6b45d97",
        position: {type: "Point", coordinates: [55.759403, 37.651328]},
        speed: NumberInt(160),
        direction: NumberInt(345),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "1a55d97",
        position: {type: "Point", coordinates: [55.738058, 37.615031]},
        speed: NumberInt(70),
        direction: NumberInt(345),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b010",
        number: "2z55d95",
        position: {type: "Point", coordinates: [55.714149, 37.599648]},
        speed: NumberInt(100),
        direction: NumberInt(160),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b010",
        number: "2z55d97",
        position: {type: "Point", coordinates: [55.784775, 37.622725]},
        speed: NumberInt(110),
        direction: NumberInt(120),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b010",
        number: "2z55d98",
        position: {type: "Point", coordinates: [55.707741, 37.602296]},
        speed: NumberInt(0),
        direction: NumberInt(0),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "2a58z98",
        position: {type: "Point", coordinates: [55.769636, 37.654124]},
        speed: NumberInt(0),
        direction: NumberInt(0),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "2a58z99",
        position: {type: "Point", coordinates: [55.764944, 37.652611]},
        speed: NumberInt(100),
        direction: NumberInt(200),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "2a58z00",
        position: {type: "Point", coordinates: [55.781364, 37.686281]},
        speed: NumberInt(110),
        direction: NumberInt(200),
        is_assigned: true
    },
    {
        model_id: "5063114bd386d8fadbd6b009",
        number: "2a58z01",
        position: {type: "Point", coordinates: [55.774114, 37.695738]},
        speed: NumberInt(30),
        direction: NumberInt(290),
        is_assigned: false
    },
    {
        model_id: "5063114bd386d8fadbd6b011",
        number: "3b58z02",
        position: {type: "Point", coordinates: [55.891214, 37.368445]},
        speed: NumberInt(150),
        direction: NumberInt(175),
        is_assigned: false
    },
]);

db.aircraft.createIndex({position: "2dsphere"});