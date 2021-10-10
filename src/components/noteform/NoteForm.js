import { useRef, useState } from "react";
import FormField from "../formfield/FormField";

import { IoMdMore } from "react-icons/io";

import useDetectClickOut from "../../helpers/useDetectClickOut";

import "./note-form.scss";
import TagList from "../taglist/TagList";
import { AddTagItems } from "../addtag/AddTagItems";

const NoteForm = () => {
  const tglist = ["fullstack", "react", "vue", "js"];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const noteTags = useRef(null);
  const fActionsRef = useRef(null);
  const noteFooterRef = useRef(null);
  const tagListSelRef = useRef(null);

  const { nodeRef } = useDetectClickOut((event) => {
    if (!event.target.classList.contains("is-form")) {
      fActionsRef.current.style.display = "none";
      titleRef.current.style.display = "none";
      noteTags.current.style.display = "none";
      fActionsRef.current.style.display = "none";
      noteFooterRef.current.style.display = "none";
      tagListSelRef.current.style.display = "none";
    } else {
      if (!tagListSelRef.current.contains(event.target)) {
        if (
          event.target !== document.querySelector(".fa-item") &&
          tagListSelRef.current.style.display !== "none"
        ) {
          tagListSelRef.current.style.display = "none";
          fActionsRef.current.style.display = "none";
        }
      }
      titleRef.current.style.display = "flex";
      noteTags.current.style.display = "flex";
      noteFooterRef.current.style.display = "flex";
    }
  });

  const selectTag = (event) => {
    let item = event.target;
    setTags(
      item.checked
        ? [...tags, item.value]
        : tags.filter((t) => t !== item.value)
    );
  };

  const handleAddTagClick = (event) => {
    tagListSelRef.current.style.display = "flex";
    event.target.style.display = "none";
  };

  const handleOptionsClick = () => {
    fActionsRef.current.style.display = "flex";
    document.querySelector(".fa-item").style.display = "flex";
  };

  return (
    <div className="note-form" ref={nodeRef}>
      <FormField
        value={title}
        className={"note-form__title is-form"}
        onChange={setTitle}
        placeholder={"Title"}
        refer={titleRef}
      />

      <FormField
        value={content}
        className={"note-form__content is-form"}
        onChange={setContent}
        placeholder={"Take a note..."}
        refer={contentRef}
      />

      <TagList tagList={tags} refer={noteTags} />

      <div className="note-form__footer is-form" ref={noteFooterRef}>
        <div className="footer-start is-form">
          <IoMdMore
            className="fs-menuopt is-form"
            onClick={handleOptionsClick}
          />
          <div className="footer-actions is-form" ref={fActionsRef}>
            <div
              className="fa-item is-form"
              onClick={(event) => handleAddTagClick(event)}
            >
              Add Tag
            </div>
            <AddTagItems
              menuItems={tglist}
              itemClick={selectTag}
              refer={tagListSelRef}
            />
          </div>
        </div>
        <div className="footer-end is-form">
          <div className="btn-close is-form">Close</div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
