import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { VisitsList } from '../cmps/Visits/VisitsList'

export function Visits() {
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

    const [columns, setColumns] = useState(null);
    useEffect(() => {
        const itemsFromBackend = [
            { id: utilService.makeId(), content: "First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task", title: 'ביקור 1', date: new Date(), isDone: false },
            { id: utilService.makeId(), content: "Second task", title: '1123123', date: new Date(), isDone: true },
            { id: utilService.makeId(), content: "Third task", title: '1123', date: new Date(), isDone: true },
            { id: utilService.makeId(), content: "Fourth task", title: '123', date: new Date(), isDone: true },
            { id: utilService.makeId(), content: "Fifth task", title: '1123213213', date: new Date(), isDone: true }
        ];
        const doneItems = itemsFromBackend.filter(item => item.isDone)
        const undoneItems = itemsFromBackend.filter(item => !item.isDone)
        const columnsFromBackend = {
            future: {
                name: "ביקורים עתידיים",
                items: undoneItems
            },
            Done: {
                name: "ביקורים שהסתיימו",
                items: doneItems
            }
        };
        setColumns(columnsFromBackend);
    }, [])

    const onRemove = (item) => {
        const attribute = item.isDone ? 'Done' : 'future';
        columns[attribute].items = columns[attribute].items.filter(currItem => currItem.id !== item.id)
        console.log('%c  columns[attribute]:', 'color: white;background: red;', columns[attribute]);
        setColumns({ ...columns })
    }

    return (<>
        <CmpHeader title='הביקורים שלי' />
        <div className='flex justify-center visits-container' >
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                {columns && <VisitsList columns={columns} onRemove={onRemove} />}
            </DragDropContext>
        </div>
        <button class="float flex align-center justify-center" >
            <i class="fa fa-plus my-float"></i>
        </button>
    </>
    );
}

