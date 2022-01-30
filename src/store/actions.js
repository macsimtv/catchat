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
        editedCurrentChannel.theme = newCurrentChannel.theme;

        store.setStateProp('currentChannel', editedCurrentChannel);
    }

    static async theme() {
        const theTheme = () => {
            if(store.state.currentChannel.theme?.primary_color == store.state.theme[1].primary_color) return "theme--chocolate";
            if(store.state.currentChannel.theme?.primary_color == store.state.theme[2].primary_color) return "theme--ocean";
            return "";
        }

        let html = document.querySelector('html');

        if(theTheme() === "") {
            html.className = theTheme();
        } else {
            html.className = "";
            html.classList.add(theTheme());
        }
    }
}

export default StoreRefresh;