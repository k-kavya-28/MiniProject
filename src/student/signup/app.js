/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

function generateCode() {
    const roll = document.getElementById('roll').value.trim();
    const hostel = document.getElementById('hostel').value.trim();

    if (!validateRoll(roll) || !validateHostel(hostel)) {
        alert("Please enter a valid roll number and hostel before generating the code.");
        return;
    }

    const uniqueCode = hostel.toUpperCase() + roll.slice(-6);
    document.getElementById('code').value = uniqueCode;

    // Show the "Submit" button
    document.getElementById('submit-container').style.display = 'block';
}

function submitForm() {
    // Get input values
    const name = document.getElementById('name');
    const branch = document.getElementById('branch');
    const year = document.getElementById('year');
    const contact = document.getElementById('contact');
    const roll = document.getElementById('roll');
    const hostel = document.getElementById('hostel');
    const code = document.getElementById('code');

    // Validate input conditions
    if (!validateName(name.value)) {
        markField(name);
        alert("Invalid name.");
        return;
    }

    if (!validateBranch(branch.value)) {
        markField(branch);
        alert("Invalid branch.");
        return;
    }

    if (!validateYear(year.value)) {
        markField(year);
        alert("Invalid year.");
        return;
    }

    if (!validateContact(contact.value)) {
        markField(contact);
        alert("Invalid contact number.");
        return;
    }

    if (!validateRoll(roll.value)) {
        markField(roll);
        alert("Invalid roll number.");
        return;
    }

    if (!validateHostel(hostel.value)) {
        markField(hostel);
        alert("Invalid hostel.");
        return;
    }

    const res = axios.post("http://localhost:3001/user/create", {
        name: name.value,
        branch: branch.value,
        year: year.value,
        contactNumber: contact.value,
        rollNumber: roll.value,
        hostel: hostel.value,
        uniqUserName: code.value,
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })

    if(res.status === 200) {
        alert("Account created successfully");
    } else {
        alert("Error creating account");
    }
    
    // Redirect to the login page
    window.location.href = "../login/index.html";
}

function validateName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function validateBranch(branch) {
    return /^[a-zA-Z]+$/.test(branch);
}

function validateYear(year) {
    return /^[1-4]$/.test(year);
}

function validateContact(contact) {
    return /^[0-9]{10}$/.test(contact);
}

function validateRoll(roll) {
    return /^[0-9]{9}$/.test(roll);
}

function validateHostel(hostel) {
    return /^[a-qA-Q]$/.test(hostel);
}

function markField(element) {
    element.classList.add('error');
}