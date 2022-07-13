import { useState } from 'react'

export default function useLocalStorage({ name, value }) {
    const [state, setState] = useState()
    
    return [state]
}
