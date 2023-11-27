// Add this script inside your script.js file

async function validateUsername() {
    const username = document.getElementById("username").value;

    try {
        const response = await fetch(`/api/laundry/fetchND?cookieVal=${document.cookie}`);
        const data = await response.json();

        if (data.laundry.length > 0) {
            displayLaundryItems(data.laundry);
        } else {
            alert("No laundry data found for the given student code.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data. Please try again.");
    }
}

// function displayLaundryItems(laundry) {
//     const laundryItems = document.getElementById("laundry-items");

//     laundry.forEach((item) => {
//         const itemDiv = document.createElement("div");
//         itemDiv.classList.add("item");

//         const itemName = document.createElement("p");
//         itemName.classList.add("item-name");
//         itemName.innerText = item.itemName;

//         const itemQuantity = document.createElement("p");
//         itemQuantity.classList.add("item-quantity");
//         itemQuantity.innerText = item.quantity;

//         itemDiv.appendChild(itemName);
//         itemDiv.appendChild(itemQuantity);

//         laundryItems.appendChild(itemDiv);
//     });
// }