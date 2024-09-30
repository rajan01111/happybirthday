function handleSubmit() {
    const selectedName = document.querySelector('input[name="name"]:checked');

    if (!selectedName) {
        alert("Please select an option.");
        return;
    }

    switch (selectedName.value) {
        case "Baby":
        case "Babe":
        case "Darling":
            window.location.href = "second.html"; // Replace with actual URL
            break;
        case "Buda":
            window.location.href = "index.html"; // Replace with actual URL
            break;
        default:
            window.location.href = "fourth.html"; // Replace with actual URL
    }
}
