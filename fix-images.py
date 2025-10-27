import re

# Read the file
with open(r'c:\Users\tobir\Desktop\glowsite\glowfmsocialhubdemo\apps\web\app\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find Image components with fill but without sizes
# This pattern looks for <Image ... fill ... /> but NOT if sizes is already present
pattern = r'(<Image[^>]*?\s+fill\s*)'
replacement = r'\1sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" '

# Only add sizes if it's not already there
def add_sizes_if_missing(match):
    image_tag = match.group(0)
    # Check if this Image already has sizes
    if 'sizes=' in image_tag:
        return image_tag
    # Add sizes after fill
    return image_tag.replace('fill', 'fill\n            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"')

# Find all Image tags with fill
image_pattern = r'<Image[^>]*?fill[^>]*?/?>'
content = re.sub(image_pattern, add_sizes_if_missing, content, flags=re.DOTALL)

# Write back
with open(r'c:\Users\tobir\Desktop\glowsite\glowfmsocialhubdemo\apps\web\app\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all Image components!")
