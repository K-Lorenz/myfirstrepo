function showAbout() {
    hideAllSections();
    document.getElementById('about').style.display = 'block';
}
let hobbies = []
function showProjects() {
    hideAllSections();
    document.getElementById('projects').style.display = 'block';
}

function showContact() {
    hideAllSections();
    document.getElementById('contact').style.display = 'block';
}

function showHobbies() {
    hideAllSections();
    document.getElementById('hobbies').style.display = 'block';
    displayHobbies(); // Function to display hobbies
}

function hideAllSections() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('hobbies').style.display = 'none';
}

function displayHobbies(){
  var hobbyList = document.getElementById('hobbyList');
    hobbyList.innerHTML = ''; // Clear the hobby list
    hobbies.forEach(function(hobby, index) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = hobby;

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            var newHobby = prompt("Enter new hobby:", hobby);
            if (newHobby !== null) {
                hobbies[index] = newHobby;
                displayHobbies(); // Redraw the hobby list after editing
            }
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            hobbies.splice(index, 1);
            displayHobbies(); // Redraw the hobby list after deletion
        };

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        hobbyList.appendChild(li);
    });

    // Add text field for adding hobbies
    var addInput = document.createElement('input');
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('placeholder', 'Enter new hobby');
    var addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.onclick = function() {
        var newHobby = addInput.value.trim();
        if (newHobby !== "") {
            hobbies.push(newHobby);
            displayHobbies(); // Redraw the hobby list after adding
            addInput.value = ''; // Clear the input field after adding
        }
    };

    var addDiv = document.createElement('div');
    addDiv.appendChild(addInput);
    addDiv.appendChild(addButton);
    hobbyList.appendChild(addDiv);
}
