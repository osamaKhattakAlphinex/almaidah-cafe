# Gallery Images

## Required Images

Place 6-8 food photography images in this directory with the following naming convention:

- `food-1.jpg`
- `food-2.jpg`
- `food-3.jpg`
- `food-4.jpg`
- `food-5.jpg`
- `food-6.jpg`
- `food-7.jpg`
- `food-8.jpg`

## Image Specifications

### Dimensions

- **Minimum**: 800x800px
- **Recommended**: 1200x1200px or higher
- **Aspect Ratio**: Square (1:1) or portrait (3:4) works best

### Format

- **Preferred**: JPG or WebP
- **Quality**: High quality, well-lit photography
- **File Size**: < 300KB per image (optimized)

### Subject Matter

Recommended food photography subjects:

1. **Burgers**: Close-up shots with visible layers
2. **Shawarmas**: Wrapped or unwrapped with filling visible
3. **Pizzas**: Slice or whole pizza with toppings
4. **Fries**: Golden, crispy french fries
5. **Drinks**: Colorful beverages with garnish
6. **Combos**: Complete meal presentations
7. **Wings**: Saucy chicken wings
8. **Desserts**: Sweet treats and specials

## Photography Tips

### Lighting

- Natural light works best
- Avoid harsh shadows
- Use diffused lighting for even coverage

### Composition

- Fill the frame with the food
- Use rule of thirds
- Include props sparingly (plates, napkins)
- Keep backgrounds simple

### Styling

- Fresh, appetizing appearance
- Clean presentation
- Vibrant colors
- Steam or garnish for freshness

## Recommended Sources

### Free Stock Photos

1. **Unsplash** - https://unsplash.com/s/photos/fast-food
2. **Pexels** - https://pexels.com/search/burger/
3. **Pixabay** - https://pixabay.com/images/search/food/

### Search Terms

- "burger photography"
- "fast food close up"
- "shawarma wrap"
- "pizza slice"
- "restaurant food"
- "street food"

## Image Optimization

### Tools

- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com

### Command Line (ImageMagick)

```bash
# Resize and optimize
convert food-1.jpg -resize 1200x1200^ -quality 85 food-1-optimized.jpg

# Batch process
for i in *.jpg; do convert "$i" -resize 1200x1200^ -quality 85 "optimized-$i"; done
```

## Masonry Layout

The gallery uses a masonry-style grid where some images span 2 rows for visual interest:

- Images 1 & 4: Span 2 rows (taller)
- Other images: Span 1 row (standard)

You can adjust the `span` property in the Gallery component to change which images are taller.

## Fallback

If images are not provided, the component displays placeholder emojis and text. Replace these with actual images for production use.
