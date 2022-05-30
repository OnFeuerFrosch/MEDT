const apiKey = "pk.eyJ1IjoiZmV1ZXJmcm9zY2giLCJhIjoiY2wzaGYxN2twMWI5YjNjcHZjeTFxc3lycyJ9.X9pAhd7NO0ME3WUBgPlupw";

const mymap = L.map('map').setView([48.23369044787376, 16.35992169627319], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 17,
    minZoom: 11,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);


const spittelau = L.marker([48.23355916161447, 16.36003426952474]).addTo(mymap);
const simmering = L.marker([48.16610943954562, 16.433592004146718]).addTo(mymap);
const floetzersteig = L.marker([48.20722013426211, 16.29013905363544]).addTo(mymap);
const pfaffenau = L.marker([48.17755143387312, 16.4577630070994734]).addTo(mymap);

let templateSpittelau = '<h3>Müllverbrennung Spittelau</h3><audio controls><source src="./Spittelau_2013"></audio>'

let streetspittelau = '<iframe src="https://www.google.com/maps/embed?pb=!4v1653893282363!6m8!1m7!1shY7gxVoncj8Doj84YptYVQ!2m2!1d48.2332501806581!2d16.3586627789866!3f15.223069594645922!4f1.8561959526444411!5f0.7820865974627469" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
spittelau.bindPopup(templateSpittelau);

let templatePfaffenau = '<h3>Müllverbrennungsanlge Pfaffenau</h3> <p>Wurde 2008 eröffnet in Simmering. Das Gebäude wurde im Jahr 2003 ausgeschrieben für ein Architektenwettbewerb an dem sich europaweit 33 Architekturbüros beteiligten. Im Jahr 2006 hat der Bau begonnen. Die Anlage verarbeitet 250.000 Tonnen Wiener Müll jährlich. Daraus ensteht 65 Gigawatt Stunden Strom und 410 Gigawatt Stunden Fernwärme.</p><div style="text-align:center"><img width="150"  src="./picture/Bild4.png"/></div>'
pfaffenau.bindPopup(templatePfaffenau);

let templateSimmering = '<h3>Müllverbrennungsanlge Simmering</h3> <p>Ist eine besondere Müllverarbeitungsanlage, da sie auch gefährlichen Müll verarbeiten kann zB Klärschlamm. Sie darf nur nicht explosive und radioaktive Stoffe sowie unter das Bestattungsgesetz fallende Körperteile sind nicht erlaubt zu verarbeiten.Kann bis zu 200.000 Tonnen Hausmüll verbrennen oder bis zu 225.000 Klärschlamm verbrennen. Erzeugt 450 GWh Fernwärme. Damit werden 48000 Häuser versorgt. 50 GWh Strom wird auch erzeugt.</p><div style="text-align:center"><img width="150"  src="./picture/luftaufnahme.png"/></div>'
simmering.bindPopup(templateSimmering);

let templateflötzersteig = '<h3>Müllverbrennungsanlge Flötzersteig</h3> <p>Abfälle, die früher in Holz- und Kohleöfen als Brennstoffe dienten, kamen wegen der zunehmend verwendeten Öl- und Gasheizungen immer mehr in den Mistkübel. Deshalb entschloss sich die Stadt Wien zur Errichtung der Müllverbrennungsanlage.1959 hat der Bau begonnen. 1964 war  die Müllverbrennungsanlage fertig. Sie steht in Ottakring und ist die älteste Müllverbrennungsanlage in Österreich. Verarbeitet 200.000 Tonnen Müll pro Jahr in 470 GWh Fernwärme</p><div style="text-align:center"><img width="150"  src="./picture/Flötzersteig.png"/></div>'
floetzersteig.bindPopup(templateflötzersteig);


var latlngs = [
    [48.23355916161447, 16.36003426952474],
    [48.20722013426211, 16.29013905363544],
    [48.16610943954562, 16.433592004146718],
    [48.17755143387312, 16.4577630070994734],
    [48.23355916161447, 16.36003426952474]
];


var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);

function onClick(e) {
    window.open("http://127.0.0.1:5500/spittelaustreet.html");
}
function onClick2(e) {
    window.open("http://127.0.0.1:5500/fl%C3%B6tzersteigstreet.html");
}
function onClick3(e)
{
    window.open("http://127.0.0.1:5500/pfaffenaustreet.html");
}
function onClick4(e)
{
    window.open("http://127.0.0.1:5500/simmeringstreet.html");
}
L.circle([48.23355916161447, 16.36003426952474], {radius: 800}).addTo(mymap).on('click', onClick);
L.circle([48.16610943954562, 16.433592004146718], {radius: 800}).addTo(mymap).on('click',onClick4);
L.circle([48.20722013426211, 16.29013905363544], {radius: 800}).addTo(mymap).on('click', onClick2);
L.circle([48.17755143387312, 16.4577630070994734], {radius: 800}).addTo(mymap).on('click',onClick3);