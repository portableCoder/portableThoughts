import { promises as fsPromises } from "fs";
import * as path from "path";
import matter from "gray-matter";
import { BlogData } from "../types/BlogData";
import { NoteData } from '../types/NoteData';
import { hashUtcToUid } from "./hashDates";

export async function readBlogMarkdownFiles(
  directoryPath: string
): Promise<BlogData[]> {
  const markdownFiles: BlogData[] = [];

  try {
    // Read all files in the directory
    const files = await fsPromises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);

      // Check if the file has a .md extension
      if (path.extname(file) === ".md") {
        // Read file content and parse frontmatter using gray-matter
        const fileContent = await fsPromises.readFile(filePath, "utf-8");
        const { content, data } = matter(fileContent);

        // Add to the array
        markdownFiles.push({ ...(data as BlogData), md: content });
      }
    }

    return markdownFiles;
  } catch (error) {
    console.error("Error reading Markdown files:", error);
    return [];
  }
}

export async function readNoteMarkdownFiles(
  directoryPath: string
): Promise<NoteData[]> {
  const markdownFiles: NoteData[] = [];

  try {
    // Read all files in the directory
    const files = await fsPromises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);

      // Check if the file has a .md extension
      if (path.extname(file) === ".md") {
        // Read file content and parse frontmatter using gray-matter
        const fileContent = await fsPromises.readFile(filePath, "utf-8");
        const { content, data } = matter(fileContent);
        const stat = await fsPromises.stat(filePath)

        const utc = stat.birthtime.getTime() / 1000
        // Add to the array
        markdownFiles.push({ content, uid: hashUtcToUid(utc), date: utc });
      }
    }

    return markdownFiles;
  } catch (error) {
    console.error("Error reading Markdown files:", error);
    return [];
  }
}

