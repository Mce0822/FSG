#!/usr/bin/env python3
"""
Convert the Facebook cover SVG to:
1. PNG (for direct upload to Facebook / preview)
2. PDF (Adobe Illustrator compatible - opens with full editability)
3. .ai (PDF-based, native Illustrator format)
"""

import os
import shutil
import cairosvg

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVG_PATH = os.path.join(BASE_DIR, "src", "assets", "fb-cover-fullstackgrowth.svg")
OUTPUT_DIR = os.path.join(BASE_DIR, "src", "assets")


def convert():
    png_path = os.path.join(OUTPUT_DIR, "fb-cover-fullstackgrowth.png")
    pdf_path = os.path.join(OUTPUT_DIR, "fb-cover-fullstackgrowth.pdf")
    ai_path = os.path.join(OUTPUT_DIR, "fb-cover-fullstackgrowth.ai")

    print("Converting SVG → PNG (820×360, high quality)...")
    cairosvg.svg2png(
        url=SVG_PATH,
        write_to=png_path,
        output_width=820,
        output_height=360,
        scale=2,  # 2x for retina quality
    )
    print(f"  ✓ PNG created: {png_path}")

    print("\nConverting SVG → PDF (vector, Illustrator-compatible)...")
    cairosvg.svg2pdf(
        url=SVG_PATH,
        write_to=pdf_path,
        output_width=820,
        output_height=360,
    )
    print(f"  ✓ PDF created: {pdf_path}")

    # Modern .ai files are PDF-based. Copy the PDF as .ai.
    # Illustrator opens PDF files natively with full vector editability.
    print("\nCreating .ai file (PDF-based Illustrator format)...")
    shutil.copy2(pdf_path, ai_path)
    print(f"  ✓ AI file created: {ai_path}")

    # File sizes
    print("\n--- File Sizes ---")
    for path in [png_path, pdf_path, ai_path, SVG_PATH]:
        size = os.path.getsize(path)
        name = os.path.basename(path)
        print(f"  {name}: {size:,} bytes ({size/1024:.1f} KB)")


if __name__ == "__main__":
    print(f"Source: {SVG_PATH}\n")
    convert()
    print("\n--- Usage ---")
    print("• Upload the PNG directly to Facebook")
    print("• Open the .ai or .svg in Adobe Illustrator for editing")
    print("• All vector elements, gradients, and text are fully editable")
    print("• Replace the vector logo approximation with your actual logo file")
