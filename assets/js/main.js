
        function copyText(iconElement) {
            const codeElement = iconElement.nextElementSibling.nextElementSibling;
            const textArea = document.createElement("textarea");
            textArea.value = codeElement.textContent.trim();
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            // Remove flashing class from all icons
            const icons = document.querySelectorAll(".icon-copy");
            icons.forEach((icon) => {
                icon.classList.remove("icon-flashing");
            });

            // Add flashing class to the clicked icon
            iconElement.classList.add("icon-flashing");

            // Show popup notification
            const notification = document.createElement("div");
            notification.textContent = "Teks telah disalin!";
            notification.className = "popup";
            document.body.appendChild(notification);
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 2000); // Remove notification after 2 seconds
        }