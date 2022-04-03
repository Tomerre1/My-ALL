import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { VisitsList } from '../cmps/Visits/VisitsList'
import { Popup } from '../cmps/Popup/Popup'
import { AddVisitOrWorkshop } from '../cmps/Visits/AddVisitOrWorkshop'
import { visitService } from '../services/visit.service'
import { useSelector, useDispatch } from "react-redux";
import { workshopService } from "../services/workshop.service";
export function Visits({ match }) {
    const user = useSelector(state => state.userReducer.user)
    const [columns, setColumns] = useState(null);
    const [editItem, setEditItem] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const popupTitle = !match.path.includes('visits') ? 'הוספת סדנא' : 'הוספת ביקור'
    const headerTitle = !match.path.includes('visits') ? 'הסדנאות שלי' : 'הביקורים שלי'
    const isVisit = match.path.includes('visits')

    const onDragEnd = async (result, columns, setColumns) => {
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
            (isVisit) ? await visitService.updateIsDone(removed.id) : await workshopService.updateIsDone(removed.id)
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
        async function fetchVisitsOrWorkshops() {
            const itemsFromBackend = isVisit ? await visitService.query(user.mail) : await workshopService.query(user.mail)
            console.log('%c  itemsFromBackend:', 'color: white;background: red;', itemsFromBackend);
            const doneItems = itemsFromBackend.filter(item => item.isDone)
            const undoneItems = itemsFromBackend.filter(item => !item.isDone)
            const columnsFromBackend = {
                future: {
                    name: !isVisit ? "סדנאות עתידיות" : "ביקורים עתידיים",
                    items: undoneItems
                },
                Done: {
                    name: !isVisit ? "סדנאות שהסתיימו" : "ביקורים שהסתיימו",
                    items: doneItems
                }
            };
            setColumns(columnsFromBackend);
        }
        fetchVisitsOrWorkshops()
    }, [])

    const onRemove = async (item) => {
        const attribute = item.isDone ? 'Done' : 'future';
        columns[attribute].items = columns[attribute].items.filter(currItem => currItem.id !== item.id)
        setColumns({ ...columns });
        (isVisit) ? await visitService.removeVisit(item.id) : await workshopService.removeWorkshop(item.id)
    }

    const onEdit = (item) => {
        setEditItem(item)
        setOpenPopup(true)
    }

    const saveEdit = async (item) => {
        const attribute = item.isDone ? 'Done' : 'future';
        columns[attribute].items = columns[attribute].items.map(currItem => currItem.id === item.id ? item : currItem)
        setColumns({ ...columns })
        setEditItem(null)
        setOpenPopup(false);
        (isVisit) ? await visitService.editVisit(user, item) : await workshopService.editWorkshop(user, item)
    }

    const onAdd = async (item) => {
        columns.future.items.push(item)
        setColumns({ ...columns })
        setOpenPopup(false);
        (isVisit) ? await visitService.addVisit(user, item) : await workshopService.addWorkshop(user, item)
    }

    console.log(columns)

    return (<>
        <CmpHeader title={headerTitle} />
        <div className='flex justify-center visits-container' >
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {columns && <VisitsList columns={columns} onRemove={onRemove} onEdit={onEdit} />}
            </DragDropContext>
        </div>
        <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
            <i class="fa fa-plus my-float"></i>
        </button>
        <Popup
            title={popupTitle}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
            <AddVisitOrWorkshop
                isVisit={isVisit}
                editItem={editItem}
                onAdd={onAdd}
                saveEdit={saveEdit}
            />
        </Popup>
    </>
    );
}

