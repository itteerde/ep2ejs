const gear = {};
gear.ware = {
    types: {
        bioware: "B",
        cyberware: "C",
        hardware: "H",
        meshware: "M",
        nanoware: "N"
    }
};

export class Ep2e {

    static get gear() {
        return gear;
    }
}