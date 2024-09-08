document.getElementById('generateTipBtn').addEventListener('click', async function() {
    const tipOutput = document.getElementById('tipOutput');
    tipOutput.innerHTML = "Generating tip..."; 

    const gardeningTips = [
        "Water your plants early in the morning to avoid evaporation.",
        "Plant herbs in containers to keep them under control.",
        "Add compost to enrich the soil for better plant growth.",
        "Use coffee grounds as a natural fertilizer for your plants.",
        "Keep an eye out for pests like aphids, and remove them early."
    ];

    setTimeout(function () {
        const randomTip = gardeningTips[Math.floor(Math.random() * gardeningTips.length)];
        tipOutput.innerHTML = randomTip;
    }, 1000);
});


