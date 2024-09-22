// i 
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];

for (var key in itemsArray) {
    var items = itemsArray[key]
    var itemsPrice = items.price * items.quantity
    console.log(`The Price of ${items.price} is Rs. ${itemsPrice}`);

}
// ii 
var dumyObject = {
    name: "batool",
    email: "bsyeda707@gmail.com",
    password: "batool",
    age: 21,
    gender: "female",
    city: "karachi",
    country: "pakistan"
}
console.log("age" in dumyObject);
console.log("country" in dumyObject);
console.log("firstName" in dumyObject);
console.log("lastname" in dumyObject);

// iii 
function Student(first, last, age, city) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.city = city;
}
var student1 = new Student("batool" , "fatima" , 20 , "karachi");
var student2 = new Student("zehra" , "batool" , 25 , "karachi");
student2.nationality = "pakistani"
console.log(student1);
console.log(student2);

// iv 
function AreaPopulation(fullName,gender,address,education,profession){
    this.name = fullName;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
var Add1 = new AreaPopulation("sana" , "female" , "karachi", "inter" ,"teacher")
// Add1.education = `<label>
// <input type="checkbox" id="myCheckbox" name="myCheckbox">
// Check me!
// </label>`
// console.log(Add1.education);

console.log(Add1);
// v
// Constructor function to create a population record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save record in localStorage
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(record);
    localStorage.setItem('populationRecords', JSON.stringify(records));
    displayRecords();
}

// Function to display saved records from localStorage
function displayRecords() {
    let recordsList = document.getElementById('recordsList');
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    
    recordsList.innerHTML = ''; // Clear the list before displaying

    records.forEach((record, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordsList.appendChild(listItem);
    });
}

// Handle form submission
document.getElementById('populationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById('address').value;
    let education = document.getElementById('education').value;
    let profession = document.getElementById('profession').value;

    // Create a new PopulationRecord object
    let newRecord = new PopulationRecord(name, gender, address, education, profession);

    // Save the record to localStorage
    saveRecord(newRecord);

    // Clear form inputs
    document.getElementById('populationForm').reset();
});

// Display existing records on page load
window.onload = function() {
    displayRecords();
};
