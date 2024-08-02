function showAlert() {
            alert("Link clicked!");
        }
		
        function showAlert(mobileName) {
            alert("You clicked on " + mobileName);
        }
   
        function deleteRow(button) {
            // Find the row containing the button and remove it
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
		function changeImage() {
            document.getElementById("myImage").src = "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMteC5qcGc.jpg";
        }

        function resetImage() {
            document.getElementById("myImage").src = "https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg";
        }