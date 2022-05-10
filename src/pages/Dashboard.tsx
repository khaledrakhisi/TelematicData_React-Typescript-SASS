import React, { useContext, useEffect } from "react";

import { CustomList } from "../components/CustomList";
import { CustomMap } from "../components/CustomMap";
import { equipmentIcons } from "../constants/images";
import useFetch from "../hooks/useFetch";
import { ITelematicData } from "../interfaces/ITelematicData";
import TelematicDataContext from "../store/telematicDataContext";

function Dashboard() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("fetching");

  //     sendRequest();
  //   }, 5e3);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (status === "fetched" && data) {
  //     setTelematicData(
  //       (data as ITelematicData[]).map((datum) => ({
  //         ...datum,
  //         EquipmentHeader: {
  //           ...datum.EquipmentHeader,
  //           pic: equipmentIcons[Math.floor(Math.random() * 10)],
  //         },
  //       }))
  //     );
  //   }
  // }, [status]);

  return (
    <section>
      <h2 className="title">Dashboard</h2>
      <CustomList />
      <CustomMap
        showStatusPanel
        zoomLevel={7}
        defaultPosition={{
          Location: {
            Latitude: 0,
            Altitude: 0,
            Longitude: 0,
            AltitudeUnits: "meter",
          },
        }}
      />
    </section>
  );
}

export default Dashboard;
