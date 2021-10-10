import "./taglist.scss";

const TagList = (props) => {
  const {tagList, refer} = props

  return (
    <div className="tag-list" ref={refer}>
      {tagList.map((tag, idx) => (
        <div key={idx} className="tag-list__item">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;
