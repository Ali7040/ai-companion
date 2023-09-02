import { UserButton } from "@clerk/nextjs";

const rootPage = () => {
    return ( 
        <UserButton afterSignOutUrl="/" />
     );
}
 
export default rootPage;