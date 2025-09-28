import { FcSearch } from "react-icons/fc";

interface SearchBarProps {
    onChange:(e: React.ChangeEvent<HTMLInputElement>) =>void
}

export default function SearchBar({ onChange }: SearchBarProps) {
    return(
        <div className="" >
            <div className="">
                <FcSearch className="" />
                <input className="" type="search" onChange={onChange} placeholder="Search for content..."/>
            </div>
        </div>
    );
}