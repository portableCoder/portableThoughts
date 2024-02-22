import * as fs from 'fs';
import * as path from 'path';

export default async function downloadAndSaveImage(title: string, thumbnail: string, slug: string): Promise<void> {

    try {

        const params = new URLSearchParams();
        params.append('title', title)
        params.append('image', thumbnail)

        const response = await fetch(`http://localhost:3000/api/og?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch image. Status: ${response.status} ${response.statusText}`);
        }

        const imageBuffer = await response.arrayBuffer()

        const filePath = path.join('public', `thought-${slug}.png`);

        fs.writeFileSync(filePath, Buffer.from(imageBuffer));

        console.log(`Image saved successfully to: ${filePath}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
}
