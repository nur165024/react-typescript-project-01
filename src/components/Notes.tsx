import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <Card style={{ background: note.color }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
        <Card.Text>{note.text}</Card.Text>
        <Button
          type="button"
          className="mb-3"
          variant="danger"
          onClick={() => handleDelete(note.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notes;
