let autocomplete;

function initAutocomplete() {
    const locationInput = document.getElementById('location');
    autocomplete = new google.maps.places.Autocomplete(locationInput, {
        types: ['(cities)'], // limits suggestions to cities
    });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
        alert("Please select a location from the dropdown.");
        return;
    }
    // Optionally, you can get latitude and longitude here
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    console.log(`Selected Location: ${place.name}, Latitude: ${lat}, Longitude: ${lng}`);
}

window.onload = initAutocomplete;

function searchProperties() {
    const location = document.getElementById('location').value;
    const propertyType = document.getElementById('propertyType').value;
    const priceRange = document.getElementById('priceRange').value;

    let locationsApi = 'https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters';

    fetch(locationsApi).then((data)=>{
        console.log(data)
    })
    console.log("Search Parameters:");
    console.log("Location:", location);
    console.log("Property Type:", propertyType);
    console.log("Price Range:", priceRange);

    // You would make an API call here to your real estate data provider.
    // Example API call (assuming you have a backend API):
    // fetch(`/api/properties?location=${location}&type=${propertyType}&priceRange=${priceRange}`)
    //    .then(response => response.json())
    //    .then(data => displayResults(data))
    //    .catch(error => console.error("Error fetching properties:", error));
}
