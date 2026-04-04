#!/usr/bin/env python3
"""Generate mobile and desktop crop previews to verify safe zone compliance."""
from PIL import Image

ASSETS = "/home/user/FSG/src/assets"

img = Image.open(f"{ASSETS}/fb-cover-fullstackgrowth.png")
W, H = img.size  # 820 x 360

# Desktop crop: full width, 312px tall (crop 24px top and 24px bottom)
desktop = img.crop((0, 24, W, H - 24))
desktop.save(f"{ASSETS}/preview-desktop-crop.png")
print(f"Desktop crop: {desktop.size}")

# Mobile crop: 640px center, full height (90px from each side)
mobile = img.crop((90, 0, W - 90, H))
mobile.save(f"{ASSETS}/preview-mobile-crop.png")
print(f"Mobile crop: {mobile.size}")
