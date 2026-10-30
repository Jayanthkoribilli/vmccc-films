import os

components = [
    "js/data.js",
    "js/components/Navbar.js",
    "js/components/Hero.js",
    "js/components/AboutUs.js",
    "js/components/ReelShowcase.js",
    "js/components/HowItWorks.js",
    "js/components/Packages.js",
    "js/components/Calculator.js",
    "js/components/Comparison.js",
    "js/components/GearSpotlight.js",
    "js/components/BookingForm.js",
    "js/components/FAQ.js",
    "js/components/Footer.js",
    "js/components/ReelModal.js",
    "js/components/QrModal.js",
    "js/components/ConfirmationModal.js",
    "js/components/CreatorApplyModal.js",
    "js/app.js"
]

bundle_content = []
for comp in components:
    if os.path.exists(comp):
        with open(comp, "r", encoding="utf-8") as f:
            bundle_content.append(f"// ==================== {comp} ====================\n")
            bundle_content.append(f.read())
            bundle_content.append("\n\n")
    else:
        print(f"Warning: {comp} does not exist!")

with open("js/bundle.js", "w", encoding="utf-8") as f:
    f.write("".join(bundle_content))

print(f"Successfully generated js/bundle.js ({len(''.join(bundle_content))} bytes)")
