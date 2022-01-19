import store from "./index";

// Channels
import serviceChannel from "../services/module/channel";

class StoreRefresh {
    static async channels() {
        const dataChannels = await serviceChannel.listOfChannel();
        store.setStateProp("channels", dataChannels.data);
    }
}

export default StoreRefresh;