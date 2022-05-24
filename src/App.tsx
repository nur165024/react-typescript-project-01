import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NoteList";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Full stack Developer interview",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <NotesList notes={notes} setNotes={setNotes} />
        <CreateNotes notes={notes} setNotes={setNotes} />
      </Container>
    </>
  );
}

export default App;
