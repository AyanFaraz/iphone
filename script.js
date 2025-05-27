function sendWhatsAppMessage(button) {
    const phoneNumber = '92 321 4089951'; // Your WhatsApp number
    const phoneModel = button.getAttribute('data-phone'); // Get phone model from button
    const message = `Hello, I want to purchase the ${phoneModel}.`;

    // Create WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
}