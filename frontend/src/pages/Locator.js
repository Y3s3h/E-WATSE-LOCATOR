import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

// GeoJSON data for locations
const mapData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        Name: "Address: B1/14 Basement, EROS Apartment, 56, Nehru Place, New Delhi-110019        Contact Person; Mr.Ashwani           Contact Number: 9555999163           Toll-Free Number: 18001029077",
      },
      geometry: {
        coordinates: [77.25150186625746, 28.550427747938585],
        type: "Point",
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Elcom Trading Company Private Limited           Address; RD, 55, 302, Madhuban Building, Nehru Place, South West Delhi, Delhi-110019    Contact Number: 9213097103        Contact Person: Mr. Rajender       Toll-Free No.:18001020527",
      },
      geometry: {
        coordinates: [77.25245885137917, 28.54699198735011],
        type: "Point",
      },
      id: 1,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name:-Greeniva Recycler Pvt. Ltd.       Address;- B 19 Okhla Industrial area, Phase 1, new delhi 110020      Toll-Free No.:-18001024919",
      },
      geometry: {
        coordinates: [77.26856990039994, 28.548038034218223],
        type: "Point",
      },
      id: 2,
    },
    {
      type: "Feature",
      properties: {
        Name: "Address ;  KHASRA NO-122/6/1,2ND FLOOR MAIN 100FT ROAD SANT NAGAR BURARI, DELHI-110084,     Toll-Free No: 1800-102-4919",
      },
      geometry: {
        coordinates: [77.1977357795285, 28.739769812613147],
        type: "Point",
      },
      id: 3,
    },
    {
      type: "Feature",
      properties: {
        Name: "Address: B-42/21, Ground Floor,Jhilmil Industrial Area, Near Railway Line, Delhi110095      Toll-free No.: 18001028632",
      },
      geometry: {
        coordinates: [77.31648933159806, 28.673666203708976],
        type: "Point",
      },
      id: 4,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name:  Global Waste Solution    Address: P-1, WZ-2C, Ground floor, Yadav Market, Shakurpur, Delhi-110034,      Contact person:  Mr. Ghanshyam,      Contact Number:  9911949299",
      },
      geometry: {
        coordinates: [77.14726621726334, 28.69032576216702],
        type: "Point",
      },
      id: 5,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Professional Logistics Pvt. Ltd       Address: Plot No. 619, Block A, Near Tata Telco Service Station, Rangpuri, Mahipalpur Delhi110037       Contact Number : 9810053907        Contact Person : Mr.Rajkumar Poonia              Toll_Free Number : 18005727756",
      },
      geometry: {
        coordinates: [77.16410925711295, 28.558070895438846],
        type: "Point",
      },
      id: 6,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Reliable trans logistics     Address : B-13/Okhla phase- 2, New Delhi      Contact Person: Mr. Ibrahim,      Contact Number: 9555493838,        Toll-free No: 1800 102 9077",
      },
      geometry: {
        coordinates: [77.1798426525267, 28.695842077753454],
        type: "Point",
      },
      id: 7,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Wide Angle Technologies      Address: 506-Skylark Building-60,Nehru Place,New Delh110019      Contact Number:  8800997860",
      },
      geometry: {
        coordinates: [77.25055644919928, 28.547299251495474],
        type: "Point",
      },
      id: 8,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Human People to People India  Address : KH No.1091-92, Bhalaswa Village, Jahangir Puri, Delhi-110036,  Contact Person :  SH Gurucharan,  Contact No:  9911604527",
      },
      geometry: {
        coordinates: [77.13530527215215, 28.797176562345186],
        type: "Point",
      },
      id: 11,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Khushi Communication     Address :  5A/1, Ist Floor, Tilak Nagar, Opp Police Station, Metro Pillar No.492, Delhi-110018     Contact No.: 9871427006        Contact Person: Harish Kumar",
      },
      geometry: {
        coordinates: [77.09203322171481, 28.640596745963336],
        type: "Point",
      },
      id: 11,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Canon India Pvt Ltd,      Address: Tez-X Automation,304, 3rd Floor, Bajaj House, Building 97, Nehru Place, Delhi-110019        Contact Person: Nishant Singh",
      },
      geometry: {
        coordinates: [77.19020635907646, 28.60260968699484],
        type: "Point",
      },
      id: 12,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Savex technologies       Address:-Shed A-1, gate No-3, Kalkaji Industrial Area, Near Govindpuri Metro Station, Delhi-110019        Contact Person:-Avinash Verma",
      },
      geometry: {
        coordinates: [77.25756955876966, 28.54718344869137],
        type: "Point",
      },
      id: 12,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name : BRP Info Tech       Address: R-24, Rita Block, Aneja Complex, Shakarpur, Delhi-92   Contact Person: Ravi Singh          Contact Number: 9717487864",
      },
      geometry: {
        coordinates: [77.27897133723098, 28.62743468334915],
        type: "Point",
      },
      id: 13,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name : Hitachi Vivo Service Centre       Address: C-7, Ist Floor, Fateh Nagar Jail Road,Tilak Nagar, delhi       Contact No.: 8287301112     Contact Person: Deepak Singh",
      },
      geometry: {
        coordinates: [77.09875946523817, 28.63092103826716],
        type: "Point",
      },
      id: 15,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Professional Logistics Pvt. Ltd.      Address: Kh No. 619, Block A, Near Telco service Station, Rangpuri Mahipalpur Ext. New Delhi, Delhi-110037       Contact Person: Rajkumar        Contact Number: 9810053907",
      },
      geometry: {
        coordinates: [77.14580686196979, 28.537524979470064],
        type: "Point",
      },
      id: 16,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Inkjet Solutions Pvt Ltd      Address:  495/1, Main Madhuban Road, ganesh Nagar, Extn-2, Shakarpur        Contact Number: 9811888954      Contact Person: Sadhna Singh(HR)",
      },
      geometry: {
        coordinates: [77.28877588967543, 28.63086165195847],
        type: "Point",
      },
      id: 16,
    },
    {
      type: "Feature",
      properties: {
        Name: "Address: We Care, E-1/3, sector-7, Rohini Opp M2k Complex, Rohini , North West Delhi110085,   Contact No: 9311528224      Contact Person:  Shweta Arora",
      },
      geometry: {
        coordinates: [77.12120670781417, 28.710627539051714],
        type: "Point",
      },
      id: 18,
    },
    {
      type: "Feature",
      properties: {
        Name: "Address:  A-16, Tagore Market, kirti Nagar, Delhi-15      Contact Person:  Kamal,           Contact No.: 9625373880",
      },
      geometry: {
        coordinates: [77.14171431258461, 28.652949710319902],
        type: "Point",
      },
      id: 19,
    },
    {
      type: "Feature",
      properties: {
        Name: "Name: Professional Logistics Pvt. Ltd.     Address: 198, G/F Malikpur Kohi, Next to hero honda Service Station, Rangpuri Mahipalpur Ext. New Delhi, Delhi-110037    contact number: 9312377783      Contact Person Name; Rajkumar Poonia         Toll-Free Number: 18002749111",
      },
      geometry: {
        coordinates: [77.13345297933898, 28.546249091798856],
        type: "Point",
      },
      id: 20,
    },
    // Add more features here as per your data...
  ],
};

const Locator = () => {
  const mapRef = useRef(null); // Reference for the map container
  const mapInstanceRef = useRef(null); // Reference to store the map instance

  useEffect(() => {
    if (mapInstanceRef.current) return; // Prevent reinitializing the map

    if (mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([28.669155, 77.453758], 12);

      const mapSatellite = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: "jpg",
        }
      );

      const osm = L.tileLayer(
        "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      );

      osm.addTo(map);

      // Set up control layers
      const baseMaps = {
        "Satellite-Map": mapSatellite,
        "Street-Map": osm,
      };

      const overlayMaps = {};

      // Create custom marker icon
      const myIcon = L.icon({
        iconUrl: "/map-location-icon-29.png",
        iconSize: [40, 40],
      });

      // Add GeoJSON layer
      L.geoJSON(mapData, {
        onEachFeature: (feature, layer) => {
          layer.bindPopup("Details: " + feature.properties.Name);
        },
        pointToLayer: (feature, latlng) => L.marker(latlng, { icon: myIcon }),
      }).addTo(map);

      // Add layer control
      L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

      // Handle mousemove for coordinates
      map.on("mousemove", (e) => {
        const coordinateDiv = document.querySelector(".coordinate");
        if (coordinateDiv) {
          coordinateDiv.innerHTML = `Latitude: ${e.latlng.lat.toFixed(
            4
          )}, Longitude: ${e.latlng.lng.toFixed(4)}`;
        }
      });

      // Add geocoder control
      L.Control.geocoder().addTo(map);

      // Store the map instance
      mapInstanceRef.current = map;
    }

    // Cleanup map on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Dependency array ensures it runs only once

  return (
    <div>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "100%", height: "80vh" }}
      ></div>
      <div
        className="coordinate"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "50%",
          textDecoration: "none",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default Locator;
