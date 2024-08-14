import React, { useState } from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index, draggable }) => {
  const [showMore, setShowMore] = useState(false);

  const onDragStart = (e) => {
    e.dataTransfer.setData("index", index);
  };

  return (
    <article
      className='task_card'
      draggable={draggable}
      onDragStart={onDragStart}
    >
      <p className='task_text'>
        {showMore ? title : title.slice(0, 50)} {/* Adjust slice length as needed */}
        {title.length > 50 && (
          <span
            className="show_more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? " Show Less" : " Show More"}
          </span>
        )}
      </p>

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className='task_delete' onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className='delete_icon' alt='' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
