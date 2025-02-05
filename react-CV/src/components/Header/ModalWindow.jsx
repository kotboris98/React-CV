import { useCallback, useEffect, useState } from "react"

const ModalWindow = ({show, onClose, children}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        if (show) {
            setIsVisible(true)
            document.addEventListener('keydown', handleKeyDown)
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800)
                document.removeEventListener('keydown', handleKeyDown)
                return() => clearTimeout(timer)
            }
        }, [show, handleKeyDown])
    }

export default ModalWindow