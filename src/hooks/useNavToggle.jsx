import {useState} from 'react';

function useNavToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(currentToggle => !currentToggle);

    return (
    {isOpen, toggleNav}
  )
}

export default useNavToggle