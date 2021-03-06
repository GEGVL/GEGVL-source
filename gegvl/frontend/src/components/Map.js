import React, { Component } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "deck.gl";
import * as constants from "../constants.js";

const INITIAL_VIEW_STATE = {
    longitude: -96.7970,
    latitude: 32.7767,
    zoom: 5,
    pitch: 0,
    bearing: 0,
};

// Component to manage a deck.gl map
export default class Map extends Component {
    render() {
        const layers = [
            new GeoJsonLayer({
                id: "oceans",
                data: constants.OCEAN_DATA_PATH,
                filled: true,
                getFillColor: constants.OCEAN_COLOR
            }),
            new GeoJsonLayer({
                id: "land",
                data: constants.LAND_DATA_PATH,
                filled: true,
                getFillColor: constants.LAND_COLOR
            }),
        ];
        return (
            <DeckGL
                controller={true}
                initialViewState={INITIAL_VIEW_STATE}
                layers={layers}
            />
        );
    }
}