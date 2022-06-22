import { useState } from "react"

const Sort = () => {

    const [sort, setSort] = useState(null)

    return <>
        <select>
            <option>--Select--</option>
            <option>Ascending</option>
            <option>Descending</option>
        </select>
    </>
}

export default Sort