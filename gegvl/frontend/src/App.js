import React, { Component } from "react";
import FloatingMenuBar from "./components/FloatingMenuBar/FloatingMenuBar";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import FloatingMenuBarButton from "./components/FloatingMenuBar/FloatingMenuBarButton";
import { mdiMapSearchOutline, mdiDatabaseSearchOutline, mdiHelpCircleOutline, mdiMagnify } from '@mdi/js';
import Map from "./components/Map";
import DrawerMenuSection from "./components/DrawerMenu/DrawerMenuSection";

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

