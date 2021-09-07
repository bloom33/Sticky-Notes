import React from "react";
import Note from "./Note.js";

const keepSearchMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  const renderedNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      remove={props.remove}
    />
  );
  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElements = searchMatches.map(renderedNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
