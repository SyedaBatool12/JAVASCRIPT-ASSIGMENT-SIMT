 let count = 0;

        function updateCounter() {
            document.getElementById("counter").textContent = count;
        }

        function increaseCounter() {
            count++;
            updateCounter();
        }

        function decreaseCounter() {
            count--;
            updateCounter();
        }