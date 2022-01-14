import React, { Component } from "react";
import FloatingMenuBar from "./components/FloatingMenuBar";
import DrawerMenu from "./components/DrawerMenu";
import FloatingMenuBarButton from "./components/FloatingMenuBarButton";
import { mdiMapSearchOutline, mdiDatabaseSearchOutline, mdiHelpCircleOutline, mdiMagnify } from '@mdi/js';
import Map from "./components/Map";
import DrawerMenuSection from "./components/DrawerMenuSection";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FloatingMenuBar>
          <FloatingMenuBarButton tooltip="Map settings" icon={mdiMapSearchOutline} controls="mapSettingsDrawer" />
          <FloatingMenuBarButton tooltip="Knowledge base" icon={mdiDatabaseSearchOutline} enabled={false} />
          <FloatingMenuBarButton tooltip="Help" icon={mdiHelpCircleOutline} enabled={false} />
        </FloatingMenuBar>
        <DrawerMenu id="mapSettingsDrawer">
          <DrawerMenuSection title="Map Search" icon={mdiMagnify}>
          </DrawerMenuSection>
        </DrawerMenu>
        <Map />
      </div>
    );
  }
}

