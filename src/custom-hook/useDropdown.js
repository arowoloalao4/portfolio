import { useState } from "react"

const useDropDown = () => {

    let [dropdown, setDropDown] = useState('')


    const handleDropDown = () => {

        if (!dropdown) {
            setDropDown('dropdown')
            return
        } else {
            setDropDown('')
        }
    }

    return [dropdown, handleDropDown]
}
export default useDropDown