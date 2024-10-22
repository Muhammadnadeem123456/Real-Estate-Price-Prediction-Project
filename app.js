function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    
    // Add logging to check values
    console.log("Square Feet: ", sqft.value);
    console.log("BHK: ", bhk);
    console.log("Bathrooms: ", bathrooms);
    console.log("Location: ", location.value);
    
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "/api/predict_home_price"; // Adjust this as necessary based on your backend configuration
  
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log("Response from backend: ", data);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    }).fail(function(xhr, status, error) {
        console.error("Error occurred:", error);
        estPrice.innerHTML = "<h2>Error: " + xhr.responseText + "</h2>";
    });
  }
  