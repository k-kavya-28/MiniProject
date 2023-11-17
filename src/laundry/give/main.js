// document.addEventListener('DOMContentLoaded', function () {
//     const giveLaundryForm = document.getElementById('giveLaundryForm');
//     const slipContainer = document.getElementById('slipContainer');
//     const slipTableBody = document.getElementById('slipBody');

//     giveLaundryForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const customerName = document.getElementById('customerName').value;
//         const giveDate = document.getElementById('giveDate').value;
//         // Get values for each item
//         const itemRows = document.querySelectorAll('#laundryTable tbody tr');
//         const selectedItems = [];

//         let totalQuantity = 0;

//         itemRows.forEach(row => {
//             const itemName = row.querySelector('label').textContent;
//             const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
//             const itemRemarks = row.querySelector('.itemRemarks').value;

//             totalQuantity += itemQuantity;

//             if (itemQuantity > 0) {
//                 selectedItems.push({ name: itemName, quantity: itemQuantity, remarks: itemRemarks });
//             }
//         });

//         // Update the total quantity input
//         const totalQuantityInput = document.getElementById('totalQuantity');
//         totalQuantityInput.value = totalQuantity;

//         // Validate total quantity
//         if (totalQuantity > 10) {
//             alert('Total quantity cannot exceed 10. Please adjust quantities.');
//             return;
//         }

//         // Display the slip with customer name and selected items
//         displaySlip(customerName,giveDate,selectedItems);

//         // Hide the form and show the slip container
//         giveLaundryForm.style.display = 'none';
//         slipContainer.style.display = 'block';
//     });

//     // Automatically update total quantity and show a prompt if it exceeds 10
//     document.getElementById('laundryTable').addEventListener('input', function (event) {
//         let totalQuantity = 0;
//         const itemRows = document.querySelectorAll('#laundryTable tbody tr');

//         itemRows.forEach(row => {
//             const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
//             totalQuantity += itemQuantity;
//         });

//         const totalQuantityInput = document.getElementById('totalQuantity');
//         totalQuantityInput.value = totalQuantity;

//         if (totalQuantity > 10) {
//             alert('Total quantity cannot exceed 10. Please adjust quantities.');
//         }
//     });

//     // Function to display the slip
//     function displaySlip(customerName, giveDate, selectedItems) {
//         const customerNameOutput = document.getElementById('customerNameOutput');
//         const giveDateOutput = document.getElementById('giveDateOutput');
//         customerNameOutput.textContent = `Customer Name: ${customerName}`;
//         giveDateOutput.textContent = `Give Date: ${giveDate}`;

//         slipTableBody.innerHTML = '';

//         selectedItems.forEach(item => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${item.name}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.remarks}</td>
//             `;

//             slipTableBody.appendChild(row);
//         });
//     }
// });




// document.addEventListener('DOMContentLoaded', function () {
//     const giveLaundryForm = document.getElementById('giveLaundryForm');
//     const slipContainer = document.getElementById('slipContainer');
//     const slipTableBody = document.getElementById('slipBody');
//     const historyContainer = document.getElementById('historyContainer');
//     const historyList = document.getElementById('historyList');

//     // Load existing history from local storage
//     const laundryHistory = JSON.parse(localStorage.getItem('laundryHistory')) || [];

//     // Display existing history
//     displayHistory();

    // giveLaundryForm.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const customerName = document.getElementById('customerName').value;
    //     const giveDate = document.getElementById('giveDate').value;

    //     // Get values for each item
    //     const itemRows = document.querySelectorAll('#laundryTable tbody tr');
    //     const selectedItems = [];

    //     let totalQuantity = 0;

    //     itemRows.forEach(row => {
    //         const itemName = row.querySelector('label').textContent;
    //         const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
    //         const itemRemarks = row.querySelector('.itemRemarks').value;

    //         totalQuantity += itemQuantity;

    //         if (itemQuantity > 0) {
    //             selectedItems.push({ name: itemName, quantity: itemQuantity, remarks: itemRemarks });
    //         }
    //     });

    //     // Update the total quantity input
    //     const totalQuantityInput = document.getElementById('totalQuantity');
    //     totalQuantityInput.value = totalQuantity;

    //     // Validate total quantity
    //     if (totalQuantity > 10) {
    //         alert('Total quantity cannot exceed 10. Please adjust quantities.');
    //         return;
    //     }

    //     // Display the slip with customer name, give date, and selected items
    //     displaySlip(customerName, giveDate, selectedItems);

    //     // Store the slip data in local storage
    //     storeSlipInLocalStorage(customerName, giveDate, selectedItems);

    //     // Add the given laundry to the history
    //     addToHistory({ customerName, giveDate, selectedItems });

    //     // Display the updated history
    //     displayHistory();

    //     // Hide the form and show the slip container
    //     giveLaundryForm.style.display = 'none';
    //     slipContainer.style.display = 'block';
    // });

    // // Automatically update total quantity and show a prompt if it exceeds 10
    // document.getElementById('laundryTable').addEventListener('input', function (event) {
    //     let totalQuantity = 0;
    //     const itemRows = document.querySelectorAll('#laundryTable tbody tr');

    //     itemRows.forEach(row => {
    //         const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
    //         totalQuantity += itemQuantity;
    //     });

    //     const totalQuantityInput = document.getElementById('totalQuantity');
    //     totalQuantityInput.value = totalQuantity;

    //     if (totalQuantity > 10) {
    //         alert('Total quantity cannot exceed 10. Please adjust quantities.');
    //     }
    // });

    // // Function to display the slip
    // function displaySlip(customerName, giveDate, selectedItems) {
    //     const customerNameOutput = document.getElementById('customerNameOutput');
    //     const giveDateOutput = document.getElementById('giveDateOutput');

    //     customerNameOutput.textContent = `Customer Name: ${customerName}`;
    //     giveDateOutput.textContent = `Give Date: ${giveDate}`;

    //     slipTableBody.innerHTML = '';

    //     selectedItems.forEach(item => {
    //         const row = document.createElement('tr');
    //         row.innerHTML = `
    //             <td>${item.name}</td>
    //             <td>${item.quantity}</td>
    //             <td>${item.remarks}</td>
    //         `;

    //         slipTableBody.appendChild(row);
    //     });
    // }

    // // Function to store the slip data in local storage
    // function storeSlipInLocalStorage(customerName, giveDate, selectedItems) {
    //     const slipData = { customerName, giveDate, selectedItems };
    //     localStorage.setItem('currentSlip', JSON.stringify(slipData));
    // }

    // // Function to add the given laundry to the history
    // function addToHistory(givenLaundry) {
    //     laundryHistory.push(givenLaundry);
    //     localStorage.setItem('laundryHistory', JSON.stringify(laundryHistory));
    // }

    // // Function to display the history
    // function displayHistory() {
    //     historyList.innerHTML = '';
    //     laundryHistory.forEach(givenLaundry => {
    //         const listItem = document.createElement('li');
    //         listItem.textContent = `${givenLaundry.customerName} - ${givenLaundry.giveDate}`;
    //         historyList.appendChild(listItem);
    //     });
    // }
// });



document.addEventListener('DOMContentLoaded', function () {
    const giveLaundryForm = document.getElementById('giveLaundryForm');
    const slipContainer = document.getElementById('slipContainer');
    const slipTableBody = document.getElementById('slipBody');
    const historyList = document.getElementById('historyList');
    const selectedHistoryContainer = document.getElementById('selectedHistoryContainer');
    const selectedHistoryOutput = document.getElementById('selectedHistoryOutput');

    // Load existing history from local storage
    const laundryHistory = JSON.parse(localStorage.getItem('laundryHistory')) || [];

    // Display existing history
    displayHistory();

    giveLaundryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const customerName = document.getElementById('customerName').value;
        const giveDate = document.getElementById('giveDate').value;

        // Get values for each item
        const itemRows = document.querySelectorAll('#laundryTable tbody tr');
        const selectedItems = [];

        let totalQuantity = 0;

        itemRows.forEach(row => {
            const itemName = row.querySelector('label').textContent;
            const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
            const itemRemarks = row.querySelector('.itemRemarks').value;

            totalQuantity += itemQuantity;

            if (itemQuantity > 0) {
                selectedItems.push({ name: itemName, quantity: itemQuantity, remarks: itemRemarks });
            }
        });

        // Update the total quantity input
        const totalQuantityInput = document.getElementById('totalQuantity');
        totalQuantityInput.value = totalQuantity;

        // Validate total quantity
        if (totalQuantity > 10) {
            alert('Total quantity cannot exceed 10. Please adjust quantities.');
            return;
        }

        // Display the slip with customer name, give date, and selected items
        displaySlip(customerName, giveDate, selectedItems);

        // Store the slip data in local storage
        storeSlipInLocalStorage(customerName, giveDate, selectedItems);

        // Add the given laundry to the history
        addToHistory({ customerName, giveDate, selectedItems });

        // Display the updated history
        displayHistory();

        // Hide the form and show the slip container
        giveLaundryForm.style.display = 'none';
        slipContainer.style.display = 'block';
    });

    // Automatically update total quantity and show a prompt if it exceeds 10
    document.getElementById('laundryTable').addEventListener('input', function (event) {
        let totalQuantity = 0;
        const itemRows = document.querySelectorAll('#laundryTable tbody tr');

        itemRows.forEach(row => {
            const itemQuantity = parseInt(row.querySelector('.itemQuantity').value) || 0;
            totalQuantity += itemQuantity;
        });

        const totalQuantityInput = document.getElementById('totalQuantity');
        totalQuantityInput.value = totalQuantity;

        if (totalQuantity > 10) {
            alert('Total quantity cannot exceed 10. Please adjust quantities.');
        }
    });

    // Function to display the slip
    function displaySlip(customerName, giveDate, selectedItems) {
        const customerNameOutput = document.getElementById('customerNameOutput');
        const giveDateOutput = document.getElementById('giveDateOutput');

        customerNameOutput.textContent = `Customer Name: ${customerName}`;
        giveDateOutput.textContent = `Give Date: ${giveDate}`;

        slipTableBody.innerHTML = '';

        selectedItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.remarks}</td>
            `;

            slipTableBody.appendChild(row);
        });
    }

    // Function to store the slip data in local storage
    function storeSlipInLocalStorage(customerName, giveDate, selectedItems) {
        const slipData = { customerName, giveDate, selectedItems };
        localStorage.setItem('currentSlip', JSON.stringify(slipData));
    }

    // Function to add the given laundry to the history
    function addToHistory(givenLaundry) {
        laundryHistory.push(givenLaundry);
        localStorage.setItem('laundryHistory', JSON.stringify(laundryHistory));
    }

    // Function to display the history
    // function displayHistory() {
    //     historyList.innerHTML = '';
    //     laundryHistory.forEach(givenLaundry => {
    //         const listItem = document.createElement('li');
    //         listItem.textContent = `${givenLaundry.customerName} - ${givenLaundry.giveDate}`;
    //         historyList.appendChild(listItem);
    //     });
    // }
    

    // Function to display the history
    function displayHistory() {
        historyList.innerHTML = '';
        laundryHistory.forEach(givenLaundry => {
            const listItem = document.createElement('li');
            listItem.textContent = `${givenLaundry.customerName} - ${givenLaundry.giveDate}`;
            
            // Add click event to history items
            listItem.addEventListener('click', function () {
                displaySelectedHistory(givenLaundry);
            });

            historyList.appendChild(listItem);
        });
    }

    // Function to display the selected history item
    function displaySelectedHistory(selectedHistory) {
        selectedHistoryOutput.innerHTML = '';

        const customerNameOutput = document.createElement('p');
        customerNameOutput.textContent = `Customer Name: ${selectedHistory.customerName}`;

        const giveDateOutput = document.createElement('p');
        giveDateOutput.textContent = `Give Date: ${selectedHistory.giveDate}`;

        const slipTable = document.createElement('table');
        slipTable.innerHTML = `
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Item Quantity</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                ${selectedHistory.selectedItems.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.remarks}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        selectedHistoryOutput.appendChild(customerNameOutput);
        selectedHistoryOutput.appendChild(giveDateOutput);
        selectedHistoryOutput.appendChild(slipTable);

        // Show the selected history container
        selectedHistoryContainer.style.display = 'block';
    }
});













