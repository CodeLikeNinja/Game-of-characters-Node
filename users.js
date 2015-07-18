var users = [
    {
        "Id": 1,
        "Username": "nedstark",
        "Name": "Ned Stark",
        "House": "Stark"
    },
    {
        "Id": 2,
        "Username": "tyrionlannister",
        "Name": "Tyrion Lannister",
        "House": "Lannister"
    },
     {
        "Id": 3,
        "Username": "aryastark",
        "Name": "Arya Stark",
        "House": "Stark"
    },
     {
        "Id": 4,
        "Username": "daenerystargaryen",
        "Name": "Daenerys Targaryen",
        "House": "Targaryen"
    },
    {
        "Id": 5,
        "Username": "oberynmartell",
        "Name": "Oberyn Martell",
        "House": "Martell"
    }
];

exports.findAll = function () {
    return users;
};

exports.findById = function (id) {
    for (var i = 0; i <users.length; i ++) {
        if (users [i] .id == id) return users [i];
    }
};