import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState",
    default: null,
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false,
});

export const currentTrackUriState = atom({
    key: "currentTrackUriState",
    default: null,
})

export const displayComponentsState = atom({
    key: "displayComponentsState",
    default: {
        center:true,
        search:false,
    },
})