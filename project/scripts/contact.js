document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmission);
    }
});

// Function 4: Process Form Data and Save to localStorage
function handleFormSubmission(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#fullName").value.trim();
    const emailInput = document.querySelector("#email").value.trim();
    const typeInput = document.querySelector("#inquiryType").value;
    const messageInput = document.querySelector("#message").value.trim();
    const feedbackBox = document.querySelector("#form-feedback");

    // Conditional Branching for Validation
    if (!nameInput || !emailInput || !typeInput || !messageInput) {
        showFeedback(feedbackBox, "Please fill out all required fields.", false);
        return;
    }

    // Construct object
    const inquiryObject = {
        name: nameInput,
        email: emailInput,
        subject: typeInput,
        message: messageInput,
        submittedAt: new Date().toISOString()
    };

    // Store submission object into localStorage
    localStorage.setItem("wisdom_last_inquiry", JSON.stringify(inquiryObject));

    // Dynamic Feedback using Template Literals
    const successMsg = `Thank you, ${inquiryObject.name}! Your ${inquiryObject.subject} inquiry has been logged successfully. We will email you back at ${inquiryObject.email}.`;
    
    showFeedback(feedbackBox, successMsg, true);
    event.target.reset();
}

function showFeedback(element, message, isSuccess) {
    if (!element) return;
    element.classList.remove("hidden", "success", "error");
    element.classList.add(isSuccess ? "success" : "error");
    element.textContent = message;
}
