import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { VisitsList } from '../cmps/Visits/VisitsList'
import { Popup } from '../cmps/Popup/Popup'
import { AddVisitOrWorkshop } from '../cmps/Visits/AddVisitOrWorkshop'

export function Visits({ match }) {
    const [columns, setColumns] = useState(null);
    const [editItem, setEditItem] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const title = !match.path.includes('visits') ? 'הוספת סדנא' : 'הוספת ביקור'

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, {
                ...removed,
                isDone: destination.droppableId === 'Done' ? true : false
            });
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

    useEffect(() => {
        if (!openPopup) {
            setEditItem(null)
        }
    }, [openPopup])

    useEffect(() => {
        const itemsFromBackend = [
            { id: utilService.makeId(), content: "First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task First task", title: 'ביקור 1', date: new Date(), isDone: false },
            // { id: utilService.makeId(), content: "Second task", title: '1123123', date: new Date(), isDone: true },
            // { id: utilService.makeId(), content: "Third task", title: '1123', date: new Date(), isDone: true },
            // { id: utilService.makeId(), content: "Fourth task", title: '123', date: new Date(), isDone: true },
            // { id: utilService.makeId(), content: "Fifth task", title: '1123213213', date: new Date(), isDone: true }
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
        setColumns({ ...columns })
    }

    const onEdit = (item) => {
        setEditItem(item)
        setOpenPopup(true)
    }

    const saveEdit = (item) => {
        const attribute = item.isDone ? 'Done' : 'future';
        columns[attribute].items = columns[attribute].items.map(currItem => currItem.id === item.id ? item : currItem)
        setColumns({ ...columns })
        setEditItem(null)
        setOpenPopup(false)
    }

    const onAdd = (item) => {
        columns.future.items.push(item)
        setColumns({ ...columns })
        setOpenPopup(false)
    }

    console.log(columns)

    return (<>
        <CmpHeader title='הביקורים שלי' />
        <div className='flex justify-center visits-container' >
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {columns && <VisitsList columns={columns} onRemove={onRemove} onEdit={onEdit} />}
            </DragDropContext>
        </div>
        <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
            <i class="fa fa-plus my-float"></i>
        </button>
        <Popup
            title={title}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
            <AddVisitOrWorkshop
                isVisit={match.path.includes('visits') ? true : false}
                editItem={editItem}
                onAdd={onAdd}
                saveEdit={saveEdit}
            />
        </Popup>
    </>
    );
}

