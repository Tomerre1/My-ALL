import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { VisitsList } from '../cmps/Visits/VisitsList'

export function Visits() {
    const itemsFromBackend = [
        { id: utilService.makeId(), content: "First task", title: '', date: new Date() },
        { id: utilService.makeId(), content: "Second task", title: '', date: new Date() },
        { id: utilService.makeId(), content: "Third task", title: '', date: new Date() },
        { id: utilService.makeId(), content: "Fourth task", title: '', date: new Date() },
        { id: utilService.makeId(), content: "Fifth task", title: '', date: new Date() }
    ];

    const columnsFromBackend = {
        future: {
            name: "ביקורים עתידיים",
            items: itemsFromBackend
        },
        Done: {
            name: "ביקורים שהסתיימו",
            items: []
        }
    };

    // item{id, content, title, date,isDone}

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            console.log(source.droppableId);
            console.log(destination.droppableId);
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    const [columns, setColumns] = useState(columnsFromBackend);
    return (<>
        <CmpHeader title='הביקורים שלי' />
        <div className='flex justify-center visits-container' >
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                <VisitsList columns={columns} />
            </DragDropContext>
        </div>
    </>
    );
}

