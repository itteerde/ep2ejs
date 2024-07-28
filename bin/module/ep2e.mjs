const version = "0.0.0.1";

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

    static get version() {
        return version;
    }

    /**
     * 
     * @param {string} a 
     * @param {string} b 
     * @returns -1 if version number a is samller than version number of b, 1 if version number of a is greater than version number of b, 0 if version numbers of a and be are equal, and undefined if not both a and b are version numbers.
     */
    static versionCompare(a, b) {
        if (typeof a !== "string" || typeof b !== "string") {
            return undefined;
        }

        const tokensOfA = a.split(".");
        const tokensOfB = b.split(".");

        if (tokensOfA.length !== 4 || tokensOfB.length !== 4) {
            return undefined;
        }

        for (let i = 0; i < 4; i++) {
            if (tokensOfA[i] < tokensOfB[i]) {
                return -1;
            }
            if (tokensOfA[i] > tokensOfB[i]) {
                return 1;
            }
        }
        return 0;
    }
}