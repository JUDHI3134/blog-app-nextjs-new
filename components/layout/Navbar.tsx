import { MdNoteAlt } from "react-icons/md"
import Container from "./Container"
import ThemeToggle from "./ThemeToggle"
import SearchInput from "./SearchInput"
import Notifications from "./Notifications"
import UserButton from "./UserButton"
import Link from "next/link"


const Navbar = () => {
    return (
        <nav className='sticky top-0 border-b z-50 bg-white dark:bg-slate-950'>
            <Container>
                <div className='flex justify-between items-center gap-8'>
                <Link href={"/"} className='flex items-center cursor-pointer'>
                    <MdNoteAlt size={24}/>
                    <div className="font-bold text-xl">JB-Blogs</div>
                    </Link>
                    
                    <SearchInput />

                <div className='flex items-center gap-5 sm:gap-8'>
                    <ThemeToggle />
                    <Notifications />
                        <UserButton />
                        <>
                            <Link href={"/login"}>Login</Link>
                            <Link href={"/register"}>Register</Link>
                        </>
                </div>
            </div>
            </Container>
        </nav>
    )
}

export default Navbar
