function myNes() {
    var myStorage = {
    "car": {
    "inside": {
    "glove box": "maps",
    "passenger seat": "crumbs"
    },
    "outside": {
    "trunk": "jack"
    }
    }
    };
    
    return myStorage.car.inside["glove box"];

    }
    console.log(myNes());
    module.exports = myNes;