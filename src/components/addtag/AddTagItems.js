import "./add-tag.scss";

export const AddTagItems = (props) => {
  const { menuItems, refer, itemClick } = props;

  const handleClick = (event) => {
    itemClick(event);
  };

  return (
    <div className="menu-items is-form" ref={refer}>
      {menuItems.map((tg) => (
        <label key={tg} className="menu-items__item is-form">
          <input
            type="checkbox"
            value={tg}
            className="checkmark is-form"
            onClick={(e) => handleClick(e)}
          />
          {tg}
        </label>
      ))}
    </div>
  );
};
