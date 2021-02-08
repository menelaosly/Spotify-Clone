import React from 'react'
import { useParams } from 'react-router-dom'

export default function Empty() {
    const { id } = useParams();
    console.log(id);
    return (
        <div className="empty">
            {id}
        </div>
    )
}
