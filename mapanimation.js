// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.11975680182454, 11.03097368033733],
  [77.11769686548595, 11.042767725358203],
  [77.11593270024721, 11.053819907042389],
  [77.11259115254711, 11.060788876315163],
  [77.11022422292622, 11.065776370248932],
  [77.10876208593992, 11.068666547274574],
  [77.10507457285715, 11.070761702537093],
  [77.08498733053788, 11.06085720018615],
  [77.0714987958404, 11.058095308108982],
  [77.06344449094911, 11.054476237727851],
  [77.05529314202532, 11.04790465338054],
  [77.0407371693302, 11.04018999734958],
  [77.02977166989987, 11.031903659570778],
  [77.01861209083361, 11.026188807720363],
  [77.01055778594232, 11.026093559248338],
];

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc3NpY2tlbm5hZHkiLCJhIjoiY2t4ZTV6cjE4MDZnYjJvbnBmdXAyeHR6dCJ9.fZxpTBn5khZC7w27_dPZHw';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.06971001229837, 11.036508590868165],
  zoom: 12,
});

var marker = new mapboxgl.Marker({
    "color": "#b40219"
  })
  .setLngLat([77.12421999722478, 11.025750452017824])
  .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;

function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}