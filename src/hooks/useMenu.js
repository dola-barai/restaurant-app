import { useEffect, useState } from "react"

const useMenu = () => {
    const [menuItem, setMenuItem] = useState([])
    const [loading, setLOading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenuItem(data)
            setLOading(false)
        })
    })

    return [menuItem, loading]
}

export default useMenu;