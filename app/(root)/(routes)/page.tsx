import { Categories } from "@/components/Categories";
import { SearchInput } from "@/components/Search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

const RootPage = async () => {
    const categories = await prismadb.category.findMany()
    return ( 
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            <Categories data={categories} />
        </div>
     );
}
export default RootPage;