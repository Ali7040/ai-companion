import { SearchInput } from "@/components/Search-input";
import { UserButton } from "@clerk/nextjs";

const rootPage = () => {
    return ( 
        <div className="h-full p-4 space-y-2">
            <SearchInput />
        </div>
     );
}
 
export default rootPage;