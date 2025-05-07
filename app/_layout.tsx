import { storeGet } from "@/helpers/storage";
import { Slot, Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";

const avoidLayout = ['/login', '/register']
export default () =>{
    const router = useRouter();
    const pathname = usePathname();
    
    
    const getUser = async () => {
        try {
            let session = await storeGet('userSession');
            console.log('Session:', session);
            if (!session) return router.navigate('/login');
        } catch (err) {
            // Not logged in
            console.log(err);
        }
    }

    useEffect(() => {
        getUser();
    },[])

    if (avoidLayout.includes(pathname)) {
        return <Slot />;

    } 
    return <Stack />;
    }


