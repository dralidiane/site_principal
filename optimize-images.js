import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imagesToOptimize = [
    {
        input: './src/assets/logos/IMG_8624.JPG',
        outputWebP: './src/assets/logos/hero-image.webp',
        outputJpg: './src/assets/logos/hero-image.jpg',
        width: 800,
        quality: 85
    },
    {
        input: './src/assets/logos/IMG_8628.JPG',
        outputWebP: './src/assets/logos/about-image.webp',
        outputJpg: './src/assets/logos/about-image.jpg',
        width: 700,
        quality: 85
    },
    {
        input: './src/assets/logos/Laser de CO2.png',
        outputWebP: './src/assets/logos/laser-co2.webp',
        outputJpg: './src/assets/logos/laser-co2.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/Preenchimento Labial.png',
        outputWebP: './src/assets/logos/preenchimento-labial.webp',
        outputJpg: './src/assets/logos/preenchimento-labial.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/Radiofrequência Microagulhada Robótica.JPG',
        outputWebP: './src/assets/logos/radiofrequencia.webp',
        outputJpg: './src/assets/logos/radiofrequencia.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/Fios de PDO.png',
        outputWebP: './src/assets/logos/fios-pdo.webp',
        outputJpg: './src/assets/logos/fios-pdo.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/transform1.jpg',
        outputWebP: './src/assets/logos/transform1.webp',
        outputJpg: './src/assets/logos/transform1-optimized.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/transform2.jpg',
        outputWebP: './src/assets/logos/transform2.webp',
        outputJpg: './src/assets/logos/transform2-optimized.jpg',
        width: 600,
        quality: 85
    },
    {
        input: './src/assets/logos/transform3.jpg',
        outputWebP: './src/assets/logos/transform3.webp',
        outputJpg: './src/assets/logos/transform3-optimized.jpg',
        width: 600,
        quality: 85
    }
];

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    for (const img of imagesToOptimize) {
        try {
            // Get original file size
            const originalStats = fs.statSync(img.input);
            const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);

            console.log(`📸 Processing: ${path.basename(img.input)}`);
            console.log(`   Original size: ${originalSizeMB} MB`);

            // Create WebP version
            await sharp(img.input)
                .resize(img.width, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .webp({ quality: img.quality })
                .toFile(img.outputWebP);

            const webpStats = fs.statSync(img.outputWebP);
            const webpSizeMB = (webpStats.size / 1024 / 1024).toFixed(2);
            const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

            console.log(`   ✅ WebP created: ${webpSizeMB} MB (${webpSavings}% smaller)`);

            // Create optimized JPG fallback
            await sharp(img.input)
                .resize(img.width, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ quality: img.quality, progressive: true })
                .toFile(img.outputJpg);

            const jpgStats = fs.statSync(img.outputJpg);
            const jpgSizeMB = (jpgStats.size / 1024 / 1024).toFixed(2);
            const jpgSavings = ((1 - jpgStats.size / originalStats.size) * 100).toFixed(1);

            console.log(`   ✅ JPG created: ${jpgSizeMB} MB (${jpgSavings}% smaller)\n`);

        } catch (error) {
            console.error(`❌ Error processing ${img.input}:`, error.message);
        }
    }

    console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);

