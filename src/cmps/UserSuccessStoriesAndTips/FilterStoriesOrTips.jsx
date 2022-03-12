import React from 'react'
import Select from 'react-select';
import Input from '../controls/Input'

export function FilterStoriesOrTips({ search, onSearch, onSelect, selected }) {
    const options2 = [
        { value: 'all', label: 'ללא מיון', name: 'sortBy' },
        { value: 'name', label: 'לפי אלף בית', name: 'sortBy' },
        { value: 'date', label: 'לפי תאריך', name: 'sortBy' },
    ];

    return (
        <div className="filter flex column">
            <Input
                name='search'
                label='חיפוש על פי טקסט'
                value={search}
                onChange={onSearch}
            />
            <Select
                className="filter-toy"
                name='sortBy'
                onChange={onSelect}
                options={options2}
            />

        </div>
    )
}

