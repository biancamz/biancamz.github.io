const mainImage = document.getElementById("mainImage");
const otherImages = document.querySelectorAll(".otherImages");
const customCursor = document.getElementById("customCursor");

let imagesLocked = false; // Tracks if images are locked on click
let initialMainImageWidth = 1000; // Initial width for scaling

// Custom cursor logic
document.body.style.cursor = "none";
document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

// Show images on hover (if not locked)
mainImage.addEventListener("mouseover", () => {
    if (!imagesLocked) {
        otherImages.forEach(image => image.classList.add("visible"));
    }
});

// Hide images on hover out (if not locked)
mainImage.addEventListener("mouseout", () => {
    if (!imagesLocked) {
        otherImages.forEach(image => image.classList.remove("visible"));
    }
});

// Toggle image visibility on click
mainImage.addEventListener("click", () => {
    imagesLocked = !imagesLocked;
    otherImages.forEach(image => {
        image.classList.toggle("visible", imagesLocked);
    });
});

// Function to generate unique random offsets without overlapping
function generateNonOverlappingOffsets(numOffsets, minDistance, maxDistance) {
    const offsets = [];
    const isOverlapping = (x, y, existingOffsets, buffer) => {
        return existingOffsets.some(([ex, ey]) => {
            const dx = ex - x;
            const dy = ey - y;
            return Math.sqrt(dx * dx + dy * dy) < buffer;
        });
    };

    for (let i = 0; i < numOffsets; i++) {
        let randomX, randomY;

        do {
            randomX = Math.floor(Math.random() * (maxDistance * 2 + 1)) - maxDistance;
            randomY = Math.floor(Math.random() * (maxDistance * 2 + 1)) - maxDistance;
        } while (
            (Math.abs(randomX) < minDistance && Math.abs(randomY) < minDistance) || 
            isOverlapping(randomX, randomY, offsets, 300) // Ensure no overlap
        );

        offsets.push([randomX, randomY]);
    }
    return offsets;
}

// Generate 19 non-overlapping offsets (min 300px, max 800px from the main image)
const offsets = generateNonOverlappingOffsets(11, 400, 550);

function adjustMainImageAndOthers() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Dynamically calculate the new size for the main image
    const mainImageWidth = Math.min(windowWidth * 0.6, windowHeight * 0.6);
    mainImage.style.width = `${mainImageWidth}px`;
    mainImage.style.height = "auto"; // Maintain aspect ratio

    const scalingFactor = mainImageWidth / initialMainImageWidth;

    const mainImageRect = mainImage.getBoundingClientRect();
    const mainImageCenterX = mainImageRect.left + mainImageRect.width / 2;
    const mainImageCenterY = mainImageRect.top + mainImageRect.height / 2;

    // Position the other images
    otherImages.forEach((img, index) => {
        if (offsets[index]) {
            const [offsetX, offsetY] = offsets[index];
            const scaledOffsetX = offsetX * scalingFactor;
            const scaledOffsetY = offsetY * scalingFactor;

            const newLeft = mainImageCenterX + scaledOffsetX - img.offsetWidth / 2;
            const newTop = mainImageCenterY + scaledOffsetY - img.offsetHeight / 2;

            img.style.left = `${newLeft}px`;
            img.style.top = `${newTop}px`;
            img.style.width = `${300 * scalingFactor}px`; // Make other images larger
            img.style.height = "auto"; // Maintain aspect ratio
        }
    });
}

// Adjust sizes and positions on window resize
window.addEventListener("resize", adjustMainImageAndOthers);

// Initialize positions
adjustMainImageAndOthers();
