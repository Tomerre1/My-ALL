import React from 'react'
import Select from 'react-select';
import Input from '../controls/Input'

export function FilterStoriesOrTips({ search, setSearch, setSeleceted, selected }) {
    const options2 = [
        { value: 'name', label: 'לפי אלף בית', name: 'sortBy' },
        { value: 'date', label: 'לפי תאריך', name: 'sortBy' },
    ];

    return (
        <div className="filter flex column">
            <Input
                name='search'
                label='חיפוש על פי טקסט'
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            <Select
                className="filter-toy"
                name='sortBy'
                onChange={(ev) => setSeleceted(ev.value)}
                options={options2}
            />

        </div>
    )
}

