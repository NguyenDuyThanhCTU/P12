"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor }: any = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div className="  ">
      <Head>
        <title>Ckeditor 5</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Ckeditor5 Nextjs</h1>
      {editorLoaded ? (
        <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
      ) : (
        "loading..."
      )}
    </div>
  );
}
