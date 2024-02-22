import React, { useEffect, useState } from "react";
import { readNoteMarkdownFiles } from "../../util/readMarkdownFiles";
import { NoteData } from "../../types/NoteData";
import Header from "../../components/Header";
import Icons from "../../components/Icons";
import Link from "next/link";
import { formatUtcToDateString } from "../../util/hashDates";
import Head from "next/head";

export async function getStaticProps(context: any) {
  const notesData: NoteData[] = await readNoteMarkdownFiles("./notes");

  notesData.sort((a, b) => {
    return b.date - a.date;
  });
  return {
    // Passed to the page component as props
    props: {
      notesData,
    },
  };
}

const Notebook = (props: { notesData: NoteData[] }) => {
  const notes = props.notesData;

  const [locale, setLocale] = useState("");
  useEffect(() => {
    const userLocale = navigator.language || "en-US"; // Default to 'en-US' if navigator.language is not available
    setLocale(userLocale);
  }, []);
  return (
    <main className="h-full w-screen text-black  dark:text-white px-3  md+:px-12 md:px-20">
      <Head>
        <Icons />
        <title>portableThoughts</title>
      </Head>
      <Header />

      <div className="w-full h-full my-16 flex flex-col gap-3 gap-y-8 md:gap-6 py-16 px-3 ">
        {notes.map((note) => {
          return (
            <Link key={note.uid} href={`/notes/${note.uid}`}>
              <a>{formatUtcToDateString(note.date, locale)}</a>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Notebook;
