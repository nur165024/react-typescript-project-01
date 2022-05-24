import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <h2 className="mt-3">NoteList</h2>
      <Row md={4}>
        {notes.map((note) => (
          <Col className="mb-4" key={note.id}>
            <Notes note={note} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NoteList;
