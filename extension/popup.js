document.getElementById("checkBtn").addEventListener("click", async () => {
  const statusEl = document.getElementById("status");
  statusEl.textContent = "🔍 Scanning image...";

  chrome.downloads.search({ limit: 1, orderBy: ["-startTime"] }, function (items) {
    const image = items[0];

    if (!image || !image.url || !image.mime || !image.mime.startsWith("image/")) {
      statusEl.textContent = "⚠️ No image file found.";
      return;
    }

    fetch("http://localhost:5000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ imageUrl: image.url })
    })
      .then(response => response.json())
      .then(data => {
        console.log("📦 Server Response:", data);

        if (data.error) throw new Error(data.error);
        if (typeof data.safe === "undefined" || !("predicted_class" in data)) {
          throw new Error("Invalid or incomplete response from server");
        }

        data.imageUrl = image.url;

        // ✅ Open result tab and inject result via localStorage
        chrome.storage.local.set({ scanResult: data }, () => {
      console.log("✅ Scan result saved to chrome.storage.local");

      // ✅ Then open result tab
      chrome.tabs.create({ url: "http://localhost:5173/result" });
    });

        statusEl.innerHTML = `
          ${data.safe ? "✅ Image is safe." : "⚠️ Malware detected!"}<br>
          Malware Class: <strong>${data.predicted_class}</strong><br>
          Confidence: ${(data.confidence * 100).toFixed(2)}%
        `;
      })
      .catch(error => {
        console.error("❌ Scan error:", error);
        statusEl.textContent = `❌ Failed to scan: ${error.message}`;
      });
  });
});

// 🌗 Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
  document.documentElement.setAttribute("data-theme", toggle.checked ? "light" : "dark");
});
