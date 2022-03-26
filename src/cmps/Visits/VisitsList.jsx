import { maxHeight } from '@mui/system';
import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import { VisitPreview } from './VisitPreview'
export function VisitsList({ columns }) {
    return <>
        {Object.entries(columns).map(([columnId, column], index) => {
            return (
                <div className='flex column align-center' style={{ width: '100%', maxHeight: '100vh' }} key={columnId}>
                    <h2>{column.name}</h2>
                    <div style={{ width: '100%' }}>
                        <Droppable droppableId={columnId} key={columnId}>
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className='visits-column'
                                        style={{
                                            background: snapshot.isDraggingOver
                                                ? "lightblue"
                                                : "lightgrey",
                                        }}
                                    >
                                        {column.items.map((item, index) => {
                                            return (
                                                <VisitPreview item={item} index={index} />
                                            );
                                        })}
                                        {provided.placeholder}
                                    </div>
                                );
                            }}
                        </Droppable>
                    </div>
                </div>
            );
        })
        }
    </>
}

export default VisitsList