import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { utilService } from '../../services/util.service'

export function VisitPreview({ item, index, onEditVisit, onRemoveVisit }) {
    return (
        <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
        >
            {(provided, snapshot) => {
                return (
                    <div className="visit-preview"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            backgroundColor: snapshot.isDragging
                                ? "#456C86"
                                : "#e2925c",
                            ...provided.draggableProps.style
                        }}
                    >
                        <div className="actions">
                            <button onClick={() => onEditVisit(item)}><EditIcon /></button>
                            <button onClick={() => onRemoveVisit(item.id)}><DeleteIcon /></button>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <p className='date'>{utilService.makeDate(item.date)}</p>
                    </div>
                );
            }}
        </Draggable>
    )
}

export default VisitPreview