import store from "./index";

// Channels
import serviceChannel from "../services/module/channel";

class StoreRefresh {
    static async channels() {
        const dataChannels = await serviceChannel.listOfChannel();
        store.setStateProp("channels", dataChannels.data);

        let channels = store.state.channels;

        let newCurrentChannel = channels.find((item) => item.id == store.state.currentChannel.id);

        let editedCurrentChannel = store.state.currentChannel;
        editedCurrentChannel.name = newCurrentChannel.name;
        editedCurrentChannel.img = newCurrentChannel.img;

        store.setStateProp('currentChannel', editedCurrentChannel);
    }
}

export default StoreRefresh;