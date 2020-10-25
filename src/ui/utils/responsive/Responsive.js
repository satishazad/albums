
import normalize from "react-native-normalize";


const responsive = (size, base) => {
    if (base) {
        return normalize(size, base);
    }

    return normalize(size);
}


export {
    responsive
}
