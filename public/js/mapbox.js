/*eslint-disable*/

export const displayMap = (location) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hlbXIiLCJhIjoiY2t5YnYyZnBjMGo2bjJvcDhjdXAzdnNqZSJ9.qIuLSVomD01zQm8oHz23kw';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/shemr/ckyc3ony613gf14nxhajsvatu', // style URL
    scrollZoom: false,
    // center: [-118.113491, 34.111745], // starting position [lng, lat]
    // zoom: 9, // starting zoom
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
